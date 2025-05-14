APPLICATION_USERS = {
    1: {
        "role": "admin",
        "first_name": "System",
        "last_name": "Admin",
        "email": "admin@defendxpert.com",
        "password_hash": "scrypt:32768:8:1$B6vHNwH5DvyBg3zg$6d1cd169b75d91b9637d384953956a215821b1d57c348aeba03089a6a70261b57842bd979e73214c91d0c8343a720c667a82f121b24da270619507ea3f23a91b"
    },
    2: {
        "role": "user",
        "first_name": "Bina",
        "last_name": "Kandel",
        "email": "bina.kandel@defendxpert.com",
        "password_hash": "scrypt:32768:8:1$sm2z0YuiVYaDPx56$d8e144a130b5402a8f2f48a9137aea46c7f3b7e42762327c916b5e77a918251ed672d8a427339c550f127871f8e4b3e8df9ac4c78bafb5def10ec059994c234c"
    },
    3: {
        "role": "user",
        "first_name": "Sashil",
        "last_name": "Shrestha",
        "email": "sashil.shrestha@defendxpert.com",
        "password_hash": "scrypt:32768:8:1$AJOOmjoCZYEV3y5b$eed8e1bf64cb57bddc44ac9906ecc1338a98d70f5d1e977d9969c1ba87934e7c0e39bf2c302bd55de9741dd4d3278f7b3fe76378d12625ae59b5b8c7a8704dae"
    }
}


MALWARE_DETAILS = {
    0: {
        "malware_family": "Adialer.C",
        "malware_info": [
            "A dialer Trojan that makes unauthorized premium-rate calls.",
            "Spreads via infected email attachments or downloads.",
            "Targets Windows operating systems."
        ],
        "behaviour": [
            "Initiates unauthorized phone calls to premium numbers",
            "Modifies system dialer settings",
            "Disables antivirus software",
            "Creates registry entries to persist",
            "Downloads additional malware",
            "Steals user credentials",
            "Slows down system performance",
            "Blocks access to security websites",
            "Sends user data to remote servers",
            "Displays fake error messages"
        ],
        "remedy": [
            "Disconnect from internet and phone line",
            "Run full system scan with updated antivirus",
            "Remove suspicious dialer software",
            "Restore system dialer settings",
            "Update OS and software",
            "Change all passwords after cleanup",
            "Use reputable anti-malware removal tools",
            "Check and clean registry entries",
            "Monitor phone bills for unusual charges",
            "Educate users to avoid suspicious downloads"
        ],
    },
    1: {
        "malware_family": "Agent.FYI",
        "malware_info": [
            "Trojan that steals sensitive information.",
            "Delivered via phishing emails.",
            "Can open backdoors for attackers."
        ],
        "behaviour": [
            "Logs keystrokes",
            "Steals login credentials",
            "Uploads data to C&C servers",
            "Disables security software",
            "Modifies system files",
            "Creates backdoors",
            "Monitors user activity",
            "Spreads through network shares",
            "Alters firewall settings",
            "Executes remote commands"
        ],
        "remedy": [
            "Isolate infected systems",
            "Run updated antivirus scans",
            "Change passwords from clean device",
            "Apply security patches",
            "Use firewall to block suspicious traffic",
            "Monitor network traffic",
            "Educate users on phishing",
            "Backup data regularly",
            "Use multi-factor authentication",
            "Restore system from clean backups"
        ],
    },
    2: {
        "malware_family": "Allaple.A",
        "malware_info": [
            "Worm spreading through removable drives and network shares.",
            "Can delete or corrupt files.",
            "Targets Windows OS."
        ],
        "behaviour": [
            "Self-replicates via USB drives",
            "Infects executable files",
            "Deletes or corrupts files",
            "Disables antivirus software",
            "Modifies autorun settings",
            "Spreads through network shares",
            "Consumes system resources",
            "Creates hidden files",
            "Blocks access to security sites",
            "Triggers system crashes"
        ],
        "remedy": [
            "Disable autorun on removable drives",
            "Scan removable media before use",
            "Keep antivirus updated",
            "Avoid unknown USB devices",
            "Apply OS patches",
            "Backup data regularly",
            "Use endpoint protection",
            "Educate users on USB safety",
            "Isolate infected machines",
            "Restore corrupted files from backups"
        ],
    },
    3: {
        "malware_family": "Allaple.L",
        "malware_info": [
            "Variant of Allaple worm family.",
            "Spreads via removable drives and network shares.",
            "Causes system instability."
        ],
        "behaviour": [
            "Replicates through USB devices",
            "Infects executable files",
            "Modifies system registry",
            "Disables security software",
            "Deletes or corrupts files",
            "Blocks access to security websites",
            "Consumes CPU and memory",
            "Creates hidden files",
            "Spreads over local network",
            "Triggers system crashes"
        ],
        "remedy": [
            "Disable autorun features",
            "Scan external media",
            "Update antivirus definitions",
            "Avoid unknown USB devices",
            "Patch OS vulnerabilities",
            "Backup important data",
            "Use network segmentation",
            "Educate users on malware risks",
            "Isolate infected hosts",
            "Restore system from backups"
        ],
    },
    4: {
        "malware_family": "Alueron.gen!J",
        "malware_info": [
            "Generic detection for Alueron Trojan variants.",
            "Opens backdoors and steals data.",
            "Targets Windows systems."
        ],
        "behaviour": [
            "Creates backdoors",
            "Steals sensitive information",
            "Downloads additional malware",
            "Modifies system files",
            "Disables antivirus and firewall",
            "Monitors user activity",
            "Logs keystrokes",
            "Spreads via email attachments",
            "Alters registry for persistence",
            "Executes remote commands"
        ],
        "remedy": [
            "Disconnect infected machine from network",
            "Run full antivirus and anti-malware scans",
            "Update all software and OS",
            "Change passwords after cleanup",
            "Use firewalls to block suspicious traffic",
            "Monitor network for unusual activity",
            "Educate users on phishing attacks",
            "Backup data regularly",
            "Use multi-factor authentication",
            "Restore system if infection persists"
        ],
    },
    5: {
        "malware_family": "Autorun.K",
        "malware_info": [
            "Malware exploiting Windows autorun feature.",
            "Spreads via removable drives.",
            "Can execute malicious code automatically."
        ],
        "behaviour": [
            "Creates autorun.inf files",
            "Spreads through USB drives",
            "Executes malware on drive insertion",
            "Disables security tools",
            "Modifies registry for persistence",
            "Copies itself to multiple locations",
            "Blocks access to security websites",
            "Consumes system resources",
            "Prevents removal by standard tools",
            "Deletes or corrupts files"
        ],
        "remedy": [
            "Disable autorun feature on all drives",
            "Scan removable media before use",
            "Update antivirus software",
            "Use specialized autorun removal tools",
            "Apply OS security patches",
            "Backup important data",
            "Educate users on safe USB usage",
            "Isolate infected systems",
            "Monitor network traffic",
            "Restore system from clean backup if needed"
        ],
    },
    6: {
        "malware_family": "C2LOP.P",
        "malware_info": [
            "Backdoor Trojan allowing remote control.",
            "Used to steal information and execute commands.",
            "Targets Windows platforms."
        ],
        "behaviour": [
            "Creates backdoor access",
            "Steals sensitive data",
            "Downloads and executes files",
            "Modifies system settings",
            "Disables security software",
            "Monitors user activity",
            "Connects to remote C&C servers",
            "Logs keystrokes",
            "Spreads via network shares",
            "Executes remote commands"
        ],
        "remedy": [
            "Disconnect infected machine from network",
            "Run comprehensive malware scans",
            "Update all system software",
            "Change all credentials",
            "Use firewalls to block C&C communication",
            "Monitor network for anomalies",
            "Educate users on phishing and malware",
            "Backup data regularly",
            "Use endpoint detection and response tools",
            "Restore system if infection persists"
        ],
    },
    7: {
        "malware_family": "C2LOP.gen!g",
        "malware_info": [
            "Generic detection for C2LOP backdoor variants.",
            "Enables remote attacker control.",
            "Steals data and executes commands."
        ],
        "behaviour": [
            "Backdoor creation",
            "Data theft",
            "Remote command execution",
            "Disables security tools",
            "Modifies registry",
            "Monitors user activity",
            "Spreads via network",
            "Logs keystrokes",
            "Downloads additional malware",
            "Connects to C&C servers"
        ],
        "remedy": [
            "Isolate infected device",
            "Run updated antivirus scans",
            "Patch OS and applications",
            "Change passwords",
            "Block suspicious network traffic",
            "Monitor network activity",
            "Educate users on cyber threats",
            "Backup critical data",
            "Use multi-factor authentication",
            "Restore from clean backups if needed"
        ],
    },
    8: {
        "malware_family": "Dialplatform.B",
        "malware_info": [
            "Dialer Trojan that makes unauthorized calls.",
            "Often bundled with other malware.",
            "Targets Windows OS."
        ],
        "behaviour": [
            "Initiates premium-rate calls",
            "Modifies dialer settings",
            "Disables antivirus",
            "Downloads other malware",
            "Blocks security websites",
            "Steals user data",
            "Creates persistence mechanisms",
            "Displays fake alerts",
            "Consumes system resources",
            "Alters system files"
        ],
        "remedy": [
            "Disconnect phone and internet",
            "Run full antivirus scan",
            "Remove dialer malware",
            "Restore dialer settings",
            "Update OS and software",
            "Change passwords",
            "Use anti-malware tools",
            "Check phone bills for fraud",
            "Educate users on downloads",
            "Backup important files"
        ],
    },
    9: {
        "malware_family": "Dontovo.A",
        "malware_info": [
            "Trojan that steals sensitive information.",
            "Often delivered via email attachments.",
            "Targets Windows systems."
        ],
        "behaviour": [
            "Steals credentials",
            "Logs keystrokes",
            "Uploads data to remote servers",
            "Disables security software",
            "Modifies system files",
            "Creates backdoors",
            "Monitors user activity",
            "Spreads through network shares",
            "Alters firewall settings",
            "Executes remote commands"
        ],
        "remedy": [
            "Isolate infected systems",
            "Run updated antivirus scans",
            "Change passwords on clean devices",
            "Apply security patches",
            "Use firewalls to block suspicious traffic",
            "Monitor network activity",
            "Educate users on phishing",
            "Backup data frequently",
            "Use multi-factor authentication",
            "Restore system from backups"
        ],
    },
    10: {
        "malware_family": "Fakerean",
        "malware_info": [
            "Trojan designed to steal banking credentials.",
            "Targets online banking users.",
            "Often uses web injection techniques."
        ],
        "behaviour": [
            "Injects malicious code into web pages",
            "Steals banking credentials",
            "Monitors browser activity",
            "Disables security software",
            "Downloads additional malware",
            "Creates backdoors",
            "Logs keystrokes",
            "Blocks access to security websites",
            "Alters system files",
            "Executes remote commands"
        ],
        "remedy": [
            "Disconnect from internet",
            "Run full antivirus and anti-malware scans",
            "Change banking passwords",
            "Update OS and browsers",
            "Use secure browsers and plugins",
            "Enable two-factor authentication",
            "Educate users on phishing",
            "Backup important data",
            "Monitor bank accounts for fraud",
            "Restore system if infection persists"
        ],
    },
    11: {
        "malware_family": "Instantaccess",
        "malware_info": [
            "Backdoor Trojan that enables remote access.",
            "Used to steal information and control systems.",
            "Targets Windows OS."
        ],
        "behaviour": [
            "Creates backdoor access",
            "Steals sensitive data",
            "Downloads and executes files",
            "Disables security software",
            "Monitors user activity",
            "Connects to remote servers",
            "Logs keystrokes",
            "Spreads via network shares",
            "Modifies system files",
            "Executes remote commands"
        ],
        "remedy": [
            "Disconnect infected device from network",
            "Run comprehensive malware scans",
            "Update all software",
            "Change all passwords",
            "Use firewalls to block C&C communication",
            "Monitor network for anomalies",
            "Educate users on cyber threats",
            "Backup data regularly",
            "Use endpoint detection tools",
            "Restore system if needed"
        ],
    },
    12: {
        "malware_family": "Lolyda.AA1",
        "malware_info": [
            "Trojan worm spreading via email and removable drives.",
            "Infects executable files.",
            "Targets Windows OS."
        ],
        "behaviour": [
            "Self-replicates via USB and email",
            "Infects executables",
            "Disables antivirus",
            "Modifies registry",
            "Deletes or corrupts files",
            "Blocks security sites",
            "Consumes system resources",
            "Creates hidden files",
            "Spreads over network",
            "Triggers system instability"
        ],
        "remedy": [
            "Disable autorun",
            "Scan removable media",
            "Update antivirus",
            "Avoid unknown USB devices",
            "Patch OS",
            "Backup data",
            "Educate users",
            "Isolate infected systems",
            "Restore from backups",
            "Monitor network traffic"
        ],
    },
    13: {
        "malware_family": "Lolyda.AA2",
        "malware_info": [
            "Variant of Lolyda Trojan worm family.",
            "Spreads via removable drives and email.",
            "Targets Windows OS."
        ],
        "behaviour": [
            "Replicates via USB and email",
            "Infects executables",
            "Disables security software",
            "Modifies registry",
            "Deletes files",
            "Blocks security websites",
            "Consumes CPU and memory",
            "Creates hidden files",
            "Spreads over network",
            "Causes system crashes"
        ],
        "remedy": [
            "Disable autorun",
            "Scan external media",
            "Update antivirus software",
            "Avoid unknown USB devices",
            "Apply OS patches",
            "Backup important data",
            "Educate users",
            "Isolate infected hosts",
            "Restore system from backups",
            "Monitor network activity"
        ],
    },
    14: {
        "malware_family": "Lolyda.AA3",
        "malware_info": [
            "Another variant of Lolyda Trojan worm family.",
            "Spreads through removable drives and email.",
            "Targets Windows OS."
        ],
        "behaviour": [
            "Self-replicates via USB and email",
            "Infects executables",
            "Disables antivirus",
            "Modifies registry",
            "Deletes or corrupts files",
            "Blocks security sites",
            "Consumes system resources",
            "Creates hidden files",
            "Spreads through network",
            "Triggers system instability"
        ],
        "remedy": [
            "Disable autorun",
            "Scan removable drives",
            "Keep antivirus updated",
            "Avoid unknown USB devices",
            "Patch OS regularly",
            "Backup data frequently",
            "Educate users",
            "Isolate infected machines",
            "Restore from backups",
            "Monitor network traffic"
        ],
    },
    15: {
        "malware_family": "Lolyda.AT",
        "malware_info": [
            "Trojan worm variant from Lolyda family.",
            "Spreads via removable drives and email.",
            "Targets Windows OS."
        ],
        "behaviour": [
            "Replicates via USB and email",
            "Infects executable files",
            "Disables security software",
            "Modifies registry",
            "Deletes files",
            "Blocks access to security websites",
            "Consumes CPU and memory",
            "Creates hidden files",
            "Spreads over local network",
            "Triggers system crashes"
        ],
        "remedy": [
            "Disable autorun",
            "Scan external media",
            "Update antivirus",
            "Avoid unknown USB devices",
            "Apply OS updates",
            "Backup important files",
            "Educate users",
            "Isolate infected hosts",
            "Restore system from backups",
            "Monitor network activity"
        ],
    },
    16: {
        "malware_family": "Malex.gen!J",
        "malware_info": [
            "Generic detection for Malex Trojan variants.",
            "Known for stealing information and opening backdoors.",
            "Targets Windows systems."
        ],
        "behaviour": [
            "Creates backdoors",
            "Steals sensitive data",
            "Downloads additional malware",
            "Disables security software",
            "Modifies system files",
            "Monitors user activity",
            "Logs keystrokes",
            "Spreads via email",
            "Alters registry",
            "Executes remote commands"
        ],
        "remedy": [
            "Disconnect infected device",
            "Run updated antivirus scans",
            "Patch OS and software",
            "Change all passwords",
            "Use firewall to block C&C",
            "Monitor network traffic",
            "Educate users on phishing",
            "Backup data regularly",
            "Use multi-factor authentication",
            "Restore system if needed"
        ],
    },
    17: {
        "malware_family": "Obfuscator.AD",
        "malware_info": [
            "Malware that uses code obfuscation to evade detection.",
            "Can be Trojan, worm or virus.",
            "Targets Windows OS."
        ],
        "behaviour": [
            "Obfuscates code to avoid detection",
            "Downloads additional malware",
            "Creates persistence",
            "Disables security software",
            "Modifies system files",
            "Steals data",
            "Spreads through removable drives",
            "Alters registry",
            "Executes remote commands",
            "Blocks security websites"
        ],
        "remedy": [
            "Use advanced heuristic antivirus",
            "Keep software updated",
            "Run full system scans",
            "Backup important data",
            "Educate users on malware risks",
            "Disable autorun",
            "Monitor network for anomalies",
            "Use endpoint protection",
            "Isolate infected systems",
            "Restore from clean backups"
        ],
    },
    18: {
        "malware_family": "Rbot!gen",
        "malware_info": [
            "Generic detection for Rbot botnet malware.",
            "Used to control infected machines remotely.",
            "Targets Windows systems."
        ],
        "behaviour": [
            "Connects to botnet C&C servers",
            "Executes remote commands",
            "Downloads additional malware",
            "Steals sensitive information",
            "Spreads via network shares",
            "Disables security software",
            "Monitors user activity",
            "Logs keystrokes",
            "Consumes system resources",
            "Blocks security updates"
        ],
        "remedy": [
            "Disconnect infected device from network",
            "Run comprehensive malware scans",
            "Update OS and software",
            "Change all passwords",
            "Use firewalls to block C&C",
            "Monitor network traffic",
            "Educate users on botnets",
            "Backup data regularly",
            "Use endpoint detection tools",
            "Restore system if infection persists"
        ],
    },
    19: {
        "malware_family": "Skintrim.N",
        "malware_info": [
            "Trojan that modifies system appearance and steals data.",
            "Targets Windows OS.",
            "Often used to spread other malware."
        ],
        "behaviour": [
            "Modifies desktop appearance",
            "Steals user credentials",
            "Disables security software",
            "Downloads additional malware",
            "Creates backdoors",
            "Monitors user activity",
            "Logs keystrokes",
            "Blocks access to security sites",
            "Alters system files",
            "Consumes system resources"
        ],
        "remedy": [
            "Run full antivirus scans",
            "Update OS and applications",
            "Change passwords",
            "Remove suspicious software",
            "Backup important data",
            "Educate users on malware",
            "Use endpoint protection",
            "Monitor network traffic",
            "Isolate infected machines",
            "Restore system from backups"
        ],
    },
    20: {
        "malware_family": "Swizzor.gen!E",
        "malware_info": [
            "Generic detection for Swizzor Trojan variants.",
            "Used to steal information and download malware.",
            "Targets Windows systems."
        ],
        "behaviour": [
            "Downloads additional malware",
            "Steals sensitive data",
            "Creates backdoors",
            "Disables antivirus",
            "Modifies system files",
            "Monitors user activity",
            "Logs keystrokes",
            "Spreads via email",
            "Alters registry",
            "Executes remote commands"
        ],
        "remedy": [
            "Disconnect infected device",
            "Run updated antivirus scans",
            "Patch OS and software",
            "Change passwords",
            "Use firewall to block C&C",
            "Monitor network activity",
            "Educate users on phishing",
            "Backup data regularly",
            "Use multi-factor authentication",
            "Restore system if needed"
        ],
    },
    21: {
        "malware_family": "Swizzor.gen!I",
        "malware_info": [
            "Another generic detection for Swizzor Trojan variants.",
            "Steals data and downloads malware.",
            "Targets Windows OS."
        ],
        "behaviour": [
            "Downloads malware",
            "Steals sensitive information",
            "Creates backdoors",
            "Disables security software",
            "Modifies system files",
            "Monitors user activity",
            "Logs keystrokes",
            "Spreads via email attachments",
            "Alters registry",
            "Executes remote commands"
        ],
        "remedy": [
            "Isolate infected machine",
            "Run full antivirus scans",
            "Update OS and apps",
            "Change all passwords",
            "Use firewall to block malicious traffic",
            "Monitor network for anomalies",
            "Educate users on cyber threats",
            "Backup data regularly",
            "Enable multi-factor authentication",
            "Restore system if needed"
        ],
    },
    22: {
        "malware_family": "VB.AT",
        "malware_info": [
            "Virus or Trojan written in Visual Basic.",
            "Can replicate and perform malicious actions.",
            "Targets Windows operating systems."
        ],
        "behaviour": [
            "Replicates itself",
            "Modifies or deletes files",
            "Disables security software",
            "Creates registry entries",
            "Spreads via removable drives",
            "Consumes system resources",
            "Blocks access to security sites",
            "Downloads additional malware",
            "Alters system settings",
            "Triggers system instability"
        ],
        "remedy": [
            "Run updated antivirus scans",
            "Disable autorun",
            "Backup important data",
            "Update OS and software",
            "Avoid suspicious files",
            "Educate users on malware",
            "Isolate infected systems",
            "Use endpoint protection",
            "Monitor network traffic",
            "Restore system from backups"
        ],
    },
    23: {
        "malware_family": "Wintrim.BX",
        "malware_info": [
            "Trojan that deletes files and disrupts system.",
            "Targets Windows OS.",
            "Often spreads via email or downloads."
        ],
        "behaviour": [
            "Deletes user files",
            "Disables antivirus",
            "Modifies system files",
            "Creates backdoors",
            "Blocks security websites",
            "Consumes system resources",
            "Spreads via email attachments",
            "Alters registry",
            "Logs keystrokes",
            "Triggers system crashes"
        ],
        "remedy": [
            "Disconnect from network",
            "Run full antivirus scans",
            "Update OS and apps",
            "Change passwords",
            "Backup important data",
            "Educate users on phishing",
            "Use firewall to block malicious traffic",
            "Isolate infected machines",
            "Restore system from backups",
            "Monitor network activity"
        ],
    },
    24: {
        "malware_family": "Yuner.A",
        "malware_info": [
            "Backdoor Trojan allowing remote control.",
            "Steals sensitive data.",
            "Targets Windows systems."
        ],
        "behaviour": [
            "Creates backdoor access",
            "Steals user credentials",
            "Downloads additional malware",
            "Disables security software",
            "Monitors user activity",
            "Logs keystrokes",
            "Spreads via network shares",
            "Alters system files",
            "Executes remote commands",
            "Connects to C&C servers"
        ],
        "remedy": [
            "Disconnect infected device",
            "Run comprehensive malware scans",
            "Update all software",
            "Change all passwords",
            "Use firewall to block C&C",
            "Monitor network traffic",
            "Educate users on cyber threats",
            "Backup data regularly",
            "Use endpoint protection tools",
            "Restore system if infection persists"
        ],
    },
}
