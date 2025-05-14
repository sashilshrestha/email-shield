from .config import Base, engine, SessionLocal
from .models import User,MalwareDetails
from sqlalchemy import inspect
from utils.auth import hash_password
from .constants import APPLICATION_USERS, MALWARE_DETAILS
import json


def init_db():
    inspector = inspect(engine)
    session = SessionLocal()

    # Check if 'users' table exists
    if 'users' not in inspector.get_table_names():
        print("[DB INIT] Creating tables and adding default users")
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
    
        # Check if 'users' table exists
    if 'malware_details' not in inspector.get_table_names():
        print("[DB INIT] Creating tables and adding data")
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

    
    session.close()
