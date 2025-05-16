import base64
import os
import re
# # Function to decode the email body
def decode_message_body_html(parts):
    """Extract and decode the message body from email parts."""
    for part in parts:
        if part.get("mimeType") == "text/html" and "data" in part["body"]:
            return base64.urlsafe_b64decode(part["body"]["data"]).decode("utf-8", errors="ignore")
        elif "parts" in part:
            return decode_message_body_html(part["parts"])
    return "No HTML body content found"

def decode_message_body_raw(parts):
    """Extract and decode the message body from email parts."""
    for part in parts:
        if part.get("mimeType") == "text/plain" and "data" in part["body"]:
            return base64.urlsafe_b64decode(part["body"]["data"]).decode("utf-8", errors="ignore")
        elif part.get("mimeType") == "text/html" and "data" in part["body"]:
            return base64.urlsafe_b64decode(part["body"]["data"]).decode("utf-8", errors="ignore")
        elif "parts" in part:
            return decode_message_body_raw(part["parts"])
    return "No body content found"

def extract_name_and_email(from_header):
    """Extracts name and email from 'From' header."""
    match = re.match(r'^(.*?)\s*<(.+?)>$', from_header.strip())
    if match:
        name = match.group(1).strip().strip('"')
        email = match.group(2).strip()
    else:
        # If no name is present, just return the raw email
        name, email = "Unknown", from_header.strip()

    return name, email
    