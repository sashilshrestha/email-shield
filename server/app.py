from fastapi import FastAPI, UploadFile, File, HTTPException, Depends, Request, Header
from schemas.user_schema import UserCreate, UserLogin
from services import user_service
from utils.auth import create_access_token
from middleware.auth_middleware import get_current_user
from db import init_db
import shutil
import os
import joblib
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from services.predict import predict_pe_image
from fastapi.responses import RedirectResponse
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware  # <-- Import CORSMiddleware
from utils.gmail import (
    decode_message_body_html,
    decode_message_body_raw,
    extract_name_and_email,
)
import re
import base64
import requests
# import os

app = FastAPI()
init_db()

# Allow cross-origin requests from any origin (replace "*" with specific origins if needed)
origins = [
    "*",  # Allow all origins
    # "http://localhost:5173",  # You can specify your frontend origin if you want
]

# Add CORS middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows all origins or you can specify a list of origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "models")

scaler = joblib.load(os.path.join(MODEL_DIR, "scaler.pkl"))
pca = joblib.load(os.path.join(MODEL_DIR, "pca.pkl"))
svm = joblib.load(os.path.join(MODEL_DIR, "svm_model.pkl"))
classes = joblib.load(os.path.join(MODEL_DIR, "classes.pkl"))

# Load client secrets from credentials.json
CLIENT_SECRETS_FILE = "credentials.json"
SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"]
REDIRECT_URI = "http://localhost:8000/auth/callback"

# Store tokens (you can use a database)
TOKEN_FILE = "token.json"


@app.post("/register")
def register(user: UserCreate):
    try:
        new_user = user_service.create_user(user)
        return {"message": f"User {new_user.email} registered successfully."}
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))

@app.post("/login")
def login(user: UserLogin):
    auth_user = user_service.authenticate_user(user.email, user.password)
    if not auth_user:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_access_token({"id": auth_user.id})
    return {"access_token": token, "token_type": "bearer", "role": auth_user.role, "name": f"{auth_user.first_name} {auth_user.last_name}".strip(), "email": auth_user.email}

# @app.post("/predict")
# def predict(file: UploadFile = File(...), user=Depends(get_current_user)):
#     os.makedirs("output", exist_ok=True)
#     file_path = f"output/{file.filename}"
#     with open(file_path, "wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     predicted_class, confidence, details= predict_pe_image(file_path,scaler,pca,svm ,classes)

#     return {
#         "status":"ok", 
#         "predicted_class":predicted_class,
#         "confidence":confidence,
#         "malware_info":details['malware_info'],
#         "behaviour": details['behaviour'],
#         "remedy":details['remedy']
#         }

# @app.post("/predict")
# def predict(filename: str, user=Depends(get_current_user)):
#     attachments_dir = "attachments"
#     file_path = os.path.join(attachments_dir, filename)

#     # Check if the file exists
#     if not os.path.exists(file_path):
#         raise HTTPException(status_code=404, detail="File not found")

#     # Predict the malware type
#     predicted_class, confidence, details = predict_pe_image(file_path, scaler, pca, svm, classes)

#     # Return the prediction result
#     return {
#         "status": "ok",
#         "predicted_class": predicted_class,
#         "confidence": confidence,
#         "malware_info": details['malware_info'],
#         "behaviour": details['behaviour'],
#         "remedy": details['remedy']
#     }

@app.post("/predict")
def predict(filename: str, user=Depends(get_current_user)):    
    try:
        attachments_dir = "attachments"
        file_path = os.path.join(attachments_dir, filename)

        # Check if the file exists
        if not os.path.exists(file_path):
            raise HTTPException(status_code=404, detail="File not found")

        user_id = user.get("id")

        predicted_class, confidence, details, metadata = predict_pe_image(
            file_path,  scaler, pca, svm, classes, user_id
        )

        return {
            "status": "ok", 
            "predicted_class": predicted_class,
            "metadata": metadata,
            "confidence": confidence,
            "malware_info": details['malware_info'],
            "behaviour": details['behaviour'],
            "remedy": details['remedy']
        }
    
    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }

@app.get("/user-scans")
def user_scans(current_user=Depends(get_current_user)):
    try:
        user_id = current_user.get("id")
        
        result = user_service.get_user_scans(user_id)
        return {"status":"ok", "message": "User scan history", "user_id": user_id, "details": result}
    
    except Exception as e:
        result = {
            "status": "error",
            "message": str(e)
        }
        return JSONResponse(status_code=400, content=result)
    

@app.get("/user-risk-assess")
def user_scans(current_user=Depends(get_current_user)):
    try:
        summary, details = user_service.get_risk_scores()
        return {"status":"ok", "message": "User risk accessment details", "summary": summary, "details": details}
        
    except Exception as e:
        result = {
            "status": "error",
            "message": str(e)
        }
        return JSONResponse(status_code=400, content=result)

@app.get("/test")
def test_endpoint(current_user=Depends(get_current_user)):
    try:
        user_id = current_user.get("id")  # Extract user_id from token payload
        return {"message": "Authenticated successfully", "user_id": user_id}

    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }

@app.get("/auth")
def authenticate():
    """Redirect user to Google's OAuth 2.0 consent screen."""
    flow = Flow.from_client_secrets_file(CLIENT_SECRETS_FILE, scopes=SCOPES)
    flow.redirect_uri = REDIRECT_URI

    auth_url, _ = flow.authorization_url(prompt="consent")
    return RedirectResponse(auth_url)

@app.get("/auth/callback")
def auth_callback(code: str):
    """Handle OAuth 2.0 callback."""
    try:
        flow = Flow.from_client_secrets_file(CLIENT_SECRETS_FILE, scopes=SCOPES)
        flow.redirect_uri = REDIRECT_URI
        flow.fetch_token(code=code)

        credentials = flow.credentials
        with open(TOKEN_FILE, "w") as token:
            token.write(credentials.to_json())

        redirect_url = f"http://localhost:5173/inbox"
        return RedirectResponse(url=redirect_url)

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))



@app.get("/check-token")
def check_token():
    try:
        token_exists = os.path.isfile(TOKEN_FILE)
        return JSONResponse(content={"token_exists": token_exists})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/gmail/messages")
def get_gmail_messages():
    """Fetch Gmail messages, extract relevant details, and download attachments."""
    if not os.path.exists(TOKEN_FILE):
        raise HTTPException(status_code=401, detail="User is not authenticated. Please log in.")

    credentials = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    service = build("gmail", "v1", credentials=credentials)

    # Fetch message IDs
    results = service.users().messages().list(userId="me", maxResults=10).execute()
    messages = results.get("messages", [])

    email_data = []

    for msg in messages:
        msg_id = msg["id"]
        msg_details = service.users().messages().get(userId="me", id=msg_id, format="full").execute()

        headers = {h["name"]: h["value"] for h in msg_details.get("payload", {}).get("headers", [])}
        html_body = decode_message_body_html(msg_details.get("payload", {}).get("parts", []))
        raw_body = decode_message_body_raw(msg_details.get("payload", {}).get("parts", []))
        from_header = headers.get("From", "Unknown")
        name, email = extract_name_and_email(from_header)

        # Add the HTML body to the email info
        email_info = {
            "id": msg_id,
            "from_name": name,
            "from_email": email,
            "to": headers.get("To", "Unknown"),
            "subject": headers.get("Subject", "No Subject"),
            "snippet": msg_details.get("snippet", ""),
            "body": html_body,  # HTML formatted body
            "raw_body": raw_body,  # HTML formatted body
            "date": headers.get("Date", "Unknown"),
            "labels": msg_details.get("labelIds", []),
            "attachments": []
        }

        # Check if the email has attachments
        parts = msg_details.get("payload", {}).get("parts", [])
        for part in parts:
            if part.get("filename"):  # If there's a filename, it's an attachment
                attachment_id = part["body"].get("attachmentId")
                if attachment_id:
                    attachment = service.users().messages().attachments().get(
                        userId="me", messageId=msg_id, id=attachment_id
                    ).execute()

                    file_data = base64.urlsafe_b64decode(attachment["data"])
                    filename = part["filename"]
                    save_path = f"attachments/{filename}"  # Save attachment locally

                    # Ensure directory exists
                    os.makedirs(os.path.dirname(save_path), exist_ok=True)

                    # Save the file
                    with open(save_path, "wb") as f:
                        f.write(file_data)

                    email_info["attachments"].append({"filename": filename, "path": save_path})

        email_data.append(email_info)

    return JSONResponse(content={"emails": email_data})


from pydantic import BaseModel


# Load Model
try:
    model = joblib.load("models/spam_classifier.pkl")
    print("✅ Model Loaded Successfully!")
except Exception as e:
    print(f"❌ Error Loading Model: {e}")

# Input Schema


class EmailInput(BaseModel):
    text: str

@app.post("/check_spam")
def predict_spam(email: EmailInput):
    prediction = model.predict([email.text])[0]
    return {"spam": bool(prediction)}
