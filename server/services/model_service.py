from db.config import SessionLocal
from db.models import MalwareDetails
import random
import json

db = SessionLocal()


def get_overall_malware_details(malware_family: str, file_name: str):
    details= db.query(MalwareDetails).filter(
        MalwareDetails.malware_family == malware_family
        ).first()

    indices = generate_indices(file_name)
    
    info = json.loads(details.malware_info)
    behaviour = json.loads(details.behaviour)
    remedy = json.loads(details.remedy)

    filtered_behaviour = [behaviour[i] for i in indices if 0 <= i < len(behaviour)]
    filtered_remedy = [remedy[i] for i in indices if 0 <= i < len(remedy)]

    return {
        "malware_info": info,
        "behaviour":filtered_behaviour,
        "remedy":filtered_remedy
        }   


def generate_indices(input):
    random.seed(input)
    numbers = [random.randint(0, 9) for _ in range(4)]
    return numbers