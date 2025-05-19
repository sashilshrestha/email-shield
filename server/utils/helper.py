from datetime import datetime
from zoneinfo import ZoneInfo

def getCurrentTimestamp()-> datetime:
    local_now = datetime.now(ZoneInfo("Australia/Melbourne"))
    return local_now