from db.config import SessionLocal
from db.models import User,ScanHistory
from utils.auth import hash_password, verify_password
from utils.helper import getCurrentTimestamp
from sqlalchemy import func, case
from datetime import datetime, timedelta

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


def get_user_scans(user_id:int):

    # last 30 days 
    thirty_days_ago = getCurrentTimestamp() - timedelta(days=30)
    
    # Filter by user_id and timestamp >= 30 days ago
    total_count = db.query(func.count(ScanHistory.id))\
                    .filter(
                        ScanHistory.user_id == user_id,
                        ScanHistory.timestamp >= thirty_days_ago
                    ).scalar()
    
    clean_count = db.query(func.count(ScanHistory.id))\
                        .filter(
                            ScanHistory.user_id == user_id,
                            ScanHistory.malware_class == 24,
                            ScanHistory.timestamp >= thirty_days_ago
                        ).scalar()
    
    return {
        "total_scans": total_count,
        "clean_results": clean_count,
        "malware_results": total_count - clean_count
    }


def get_risk_scores():

    # Step 1: Join ScanHistory with User and calculate average risk score per user
    user_scores = db.query(
        ScanHistory.user_id,
        User.first_name,
        User.last_name,
        func.avg(
            case(
                (ScanHistory.malware_class != 24, ScanHistory.confidence_score * 100),
                else_=0
            )
        ).label('risk_score')
    ).join(User, ScanHistory.user_id == User.id)\
     .group_by(ScanHistory.user_id, User.first_name, User.last_name)\
     .all()

    detail = []
    high_count = medium_count = low_count = 0

    for user_id, first_name, last_name, score in user_scores:
        # Apply thresholds
        if score >= 70:
            risk_level = 'high'
            high_count += 1
        elif score >= 30:
            risk_level = 'medium'
            medium_count += 1
        else:
            risk_level = 'low'
            low_count += 1

        detail.append({
            'user_id': user_id,
            'full_name': f"{first_name} {last_name}",
            'risk_score': round(score, 2),
            'risk_level': risk_level
        })

    summary = {
        'total_users': len(user_scores),
        'high_risk_users': high_count,
        'medium_risk_users': medium_count,
        'low_risk_users': low_count
    }

    print(summary)
    print(detail)

    return summary, detail

