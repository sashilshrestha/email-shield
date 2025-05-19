import os
import sys
import numpy as np
import joblib
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from .model_service import get_overall_malware_details
from db.models import ScanHistory,User
from db.config import SessionLocal
from datetime import datetime
from utils.helper import getCurrentTimestamp

db = SessionLocal()

def preprocess_image(image_path, scaler , pca):
    if not os.path.isfile(image_path):
        raise FileNotFoundError(f"File not found: {image_path}")
    img = load_img(image_path, target_size=(64, 64), color_mode='grayscale')
    img_array = img_to_array(img).flatten().reshape(1, -1)
    img_scaled = scaler.transform(img_array)
    img_pca = pca.transform(img_scaled)
    return img_pca

def predict_pe_image(image_path, scaler, pca,svm, classes, user_id):
    file_name = os.path.basename(image_path)

    processed = preprocess_image(image_path, scaler , pca)
    prediction = svm.predict(processed)[0]
    proba = svm.predict_proba(processed)[0]
    confidence = np.max(proba)
    predicted_index = list(svm.classes_).index(prediction)
    malware_family = classes[predicted_index]

    metadata = get_file_details(image_path)
    
    if(predicted_index != 24):
        details = get_overall_malware_details(malware_family,file_name)
    else:
        malware_family = "Benign"
        details = {
        "malware_info": None,
        "behaviour":None,
        "remedy":None
        }

    # save in db
    history = ScanHistory(
        user_id = user_id,
        # full_name = f"{user.first_name} {user.last_name}",
        file_name = metadata['filename'],
        file_size_bytes = metadata['file_size_bytes'],
        file_created =  metadata['file_created'],
        malware_class = predicted_index,
        confidence_score = confidence,
        timestamp = getCurrentTimestamp()
    )
    db.add(history)
    db.commit()

    return malware_family, confidence, details, metadata

def get_file_details(path):
    if not os.path.exists(path):
        raise FileNotFoundError(f"File not found: {path}")

    # Get file size in bytes
    file_size = os.path.getsize(path)

    # Get creation time (platform dependent)
    created_timestamp = os.path.getctime(path)
    file_created = datetime.fromtimestamp(created_timestamp)

    # Get last modification time
    modified_timestamp = os.path.getmtime(path)
    file_modified = datetime.fromtimestamp(modified_timestamp)

    # Get file name from path
    filename = os.path.basename(path)

    metadata = {
        "filename": filename,
        "file_size_bytes": file_size,
        "file_created": file_created,
        "file_modified": file_modified,
    }

    return metadata
