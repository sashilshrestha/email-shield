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
from fastapi.responses import JSONResponse

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
    return {"access_token": token, "token_type": "bearer", "user_name":f"{auth_user.first_name} {auth_user.last_name}"}

@app.post("/predict")
def predict(file: UploadFile = File(...), user=Depends(get_current_user)):
    
    try:
        user_id = user.get("id")
        os.makedirs("output", exist_ok=True)
        file_path = f"output/{file.filename}"
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

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


