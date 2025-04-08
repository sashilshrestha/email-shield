# backend/routers/admin.py
from fastapi import APIRouter, UploadFile, File
import pandas as pd
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

router = APIRouter(prefix="/admin")

@router.post("/upload-dataset")
def upload_spam_dataset(file: UploadFile = File(...)):
    df = pd.read_csv(file.file)
    X = TfidfVectorizer().fit_transform(df['text'])
    y = df['label']
    model = MultinomialNB().fit(X, y)

    joblib.dump(model, "spam_model.pkl")
    return {"status": "Model trained"}
