from db.config import SessionLocal
from db.models import User
from utils.auth import hash_password, verify_password

db = SessionLocal()

def create_user(data):
    if data.password != data.re_password:
        raise ValueError("Passwords do not match")
    
    if db.query(User).filter(User.email == data.email).first():
        raise ValueError("Email already exists")
    
    user = User(
        first_name=data.first_name,
        last_name=data.last_name,
        email=data.email,
        password_hash=hash_password(data.password),
        role="user"
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def authenticate_user(email: str, password: str):
    user = db.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.password_hash):
        return None
    return user
