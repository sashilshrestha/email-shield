from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

DB_TYPE = os.getenv("DB_TYPE", "sqlite")  # default to sqlite

if DB_TYPE == "mysql":
    DB_URL = os.getenv("MYSQL_DB_URL")  # Example: mysql+pymysql://user:pass@localhost/dbname
else:
    DB_URL = "sqlite:///./db/EmailShield.db"

engine = create_engine(DB_URL, connect_args={"check_same_thread": False} if DB_TYPE == "sqlite" else {})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
