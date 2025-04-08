# backend/main.py
from fastapi import FastAPI
from routers import admin
from routers import scan

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

app.include_router(admin.router)
app.include_router(scan.router)

