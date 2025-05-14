import jwt
from datetime import datetime, timedelta, timezone
import os
from werkzeug.security import check_password_hash, generate_password_hash

SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

# pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password):
    return generate_password_hash(password)

def verify_password(plain_password, hashed_password):
    return check_password_hash(hashed_password, plain_password)
    # return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def decode_token(token: str):
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except jwt.PyJWTError:
        return None
