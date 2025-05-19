from .config import Base, engine, SessionLocal
from .models import User,MalwareDetails,ScanHistory
from sqlalchemy import inspect
from utils.auth import hash_password
from .constants import APPLICATION_USERS, MALWARE_DETAILS, SCAN_HISTORY
import json
from datetime import datetime


def init_db():
    inspector = inspect(engine)
    session = SessionLocal()

    # Check if 'users' table exists
    if 'users' not in inspector.get_table_names():
        print("[DB INIT] Creating users table and adding default users")
        Base.metadata.create_all(bind=engine)

        for user_id, user_data in APPLICATION_USERS.items():

            user = User(
                id=user_id,
                first_name=user_data["first_name"],
                last_name=user_data["last_name"],
                email=user_data["email"],
                password_hash=user_data["password_hash"],
                role=user_data["role"]
            )
            session.add(user)
        session.commit()
    
        # Check if 'malware_details' table exists
    if 'malware_details' not in inspector.get_table_names():
        print("[DB INIT] Creating malware_details table and adding data")
        Base.metadata.create_all(bind=engine)

        for malware_id, details in MALWARE_DETAILS.items():

            detail = MalwareDetails(
                id=malware_id,
                malware_family=details["malware_family"],
                malware_info=json.dumps(details["malware_info"]),
                behaviour=json.dumps(details["behaviour"]),
                remedy=json.dumps(details["remedy"]),
            )
            session.add(detail)
        session.commit()

        # Check if 'scan_history' table exists
    if 'scan_history' not in inspector.get_table_names():
        print("[DB INIT] Creating scan_history table and adding data")
        Base.metadata.create_all(bind=engine)

        for id, scans in SCAN_HISTORY.items():

            scan = ScanHistory(
                user_id=scans["user_id"],
                file_name=scans["file_name"],
                file_size_bytes=scans["file_size_bytes"],
                file_created=datetime.fromisoformat(scans["file_created"]),
                malware_class=scans["malware_class"],
                confidence_score=scans["confidence_score"],
                timestamp=datetime.fromisoformat(scans["timestamp"])
                )
            session.add(scan)
        session.commit()

        
    session.close()
