import os
import sys
import numpy as np
import joblib
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from .model_service import get_overall_malware_details

def preprocess_image(image_path, scaler , pca):
    if not os.path.isfile(image_path):
        raise FileNotFoundError(f"File not found: {image_path}")
    img = load_img(image_path, target_size=(64, 64), color_mode='grayscale')
    img_array = img_to_array(img).flatten().reshape(1, -1)
    img_scaled = scaler.transform(img_array)
    img_pca = pca.transform(img_scaled)
    return img_pca

def predict_pe_image(image_path,scaler,pca,svm ,classes):
    file_name = os.path.basename(image_path)

    processed = preprocess_image(image_path, scaler , pca)
    prediction = svm.predict(processed)[0]
    proba = svm.predict_proba(processed)[0]
    confidence = np.max(proba)
    predicted_index = list(svm.classes_).index(prediction)
    malware_family = classes[predicted_index]

    details =  get_overall_malware_details(malware_family,file_name)

    return malware_family, confidence, details

