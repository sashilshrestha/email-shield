from sqlalchemy import Column, Integer, String, Text
from .config import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    email = Column(String(120), unique=True, index=True, nullable=False)
    password_hash = Column(String(512), nullable=False)
    role = Column(String(50), nullable=False, default='user')


class MalwareDetails(Base):
    __tablename__ = 'malware_details'

    id = Column(Integer, primary_key=True, index=True)
    malware_family =Column(String, unique=True, index=True, nullable=False)
    malware_info =Column(Text, nullable=False) 
    behaviour =Column(Text, nullable=False) 
    remedy = Column(Text, nullable=False) 
