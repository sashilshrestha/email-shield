from fastapi import FastAPI, UploadFile, File, HTTPException, Depends
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

app = FastAPI()
init_db()


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "models")

scaler = joblib.load(os.path.join(MODEL_DIR, "scaler.pkl"))
pca = joblib.load(os.path.join(MODEL_DIR, "pca.pkl"))
svm = joblib.load(os.path.join(MODEL_DIR, "svm_model.pkl"))
classes = joblib.load(os.path.join(MODEL_DIR, "classes.pkl"))


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
    return {"access_token": token, "token_type": "bearer"}

@app.post("/predict")
def predict(file: UploadFile = File(...), user=Depends(get_current_user)):
    os.makedirs("output", exist_ok=True)
    file_path = f"output/{file.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    predicted_class, confidence, details= predict_pe_image(file_path,scaler,pca,svm ,classes)

    return {
        "status":"ok", 
        "predicted_class":predicted_class,
        "confidence":confidence,
        "malware_info":details['malware_info'],
        "behaviour": details['behaviour'],
        "remedy":details['remedy']
        }
