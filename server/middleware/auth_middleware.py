from fastapi import Header, HTTPException, Depends
from utils.auth import decode_token

def get_current_user(authorization: str = Header(...)):
    if not authorization:
    # Return your custom JSON response here
        raise HTTPException(status_code=401, detail={"status": "error", "message": "Authorization header missing"})
    try:
        scheme, token = authorization.split()
        if scheme.lower() != 'bearer':
            raise HTTPException(status_code=401, detail="Invalid auth scheme")
        payload = decode_token(token)
        if not payload:
            raise HTTPException(status_code=401, detail="Invalid token")
        return payload
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
