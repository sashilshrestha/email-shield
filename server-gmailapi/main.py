import os
import json
import uvicorn
from fastapi import FastAPI, Depends, HTTPException
from fastapi.responses import RedirectResponse
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from fastapi.middleware.cors import CORSMiddleware  # <-- Import CORSMiddleware
from fastapi.responses import JSONResponse
import re

app = FastAPI()

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

# Load client secrets from credentials.json
CLIENT_SECRETS_FILE = "credentials.json"
SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"]
REDIRECT_URI = "http://localhost:8000/auth/callback"

# Store tokens (you can use a database)
TOKEN_FILE = "token.json"

@app.get("/")
def home():
    return {"message": "Welcome to Gmail API with FastAPI"}

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

import base64
import os
# # Function to decode the email body
def decode_message_body_html(parts):
    """Extract and decode the message body from email parts."""
    for part in parts:
        if part.get("mimeType") == "text/html" and "data" in part["body"]:
            return base64.urlsafe_b64decode(part["body"]["data"]).decode("utf-8", errors="ignore")
        elif "parts" in part:
            return decode_message_body_html(part["parts"])
    return "No HTML body content found"

def decode_message_body_raw(parts):
    """Extract and decode the message body from email parts."""
    for part in parts:
        if part.get("mimeType") == "text/plain" and "data" in part["body"]:
            return base64.urlsafe_b64decode(part["body"]["data"]).decode("utf-8", errors="ignore")
        elif part.get("mimeType") == "text/html" and "data" in part["body"]:
            return base64.urlsafe_b64decode(part["body"]["data"]).decode("utf-8", errors="ignore")
        elif "parts" in part:
            return decode_message_body_raw(part["parts"])
    return "No body content found"

def extract_name_and_email(from_header):
    """Extracts name and email from 'From' header."""
    match = re.match(r'^(.*?)\s*<(.+?)>$', from_header.strip())
    if match:
        name = match.group(1).strip().strip('"')
        email = match.group(2).strip()
    else:
        # If no name is present, just return the raw email
        name, email = "Unknown", from_header.strip()

    return name, email
    

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

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
