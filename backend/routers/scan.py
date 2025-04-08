# backend/routers/scan.py
from fastapi import APIRouter
import joblib

router = APIRouter(prefix="/scan")

@router.post("/email")
def scan_email(subject: str, body: str):
    model = joblib.load("spam_model.pkl")
    input_text = [subject + " " + body]

    vectorizer = joblib.load("vectorizer.pkl")
    vector = vectorizer.transform(input_text)
    result = model.predict(vector)

    return {"spam": result[0]}
