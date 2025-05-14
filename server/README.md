# Fast API Backend

Backend server for PE-Malware Detection using Hybrid-ML Model

## Features

- Uses machine learning model for malware detection in PE file image.
- Handles PE file analysis and prediction.
- Provides RESTful API endpoints.

## Installation:

Build the environment

    python -m venv env

Install dependencies

    pip install -r requirements.txt

Run the server

    uvicorn app:app --reload
