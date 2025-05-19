APPLICATION_USERS = {
    1: {
        "role": "admin",
        "first_name": "System",
        "last_name": "Admin",
        "email": "admin@emailshield.com",
        "password_hash": "scrypt:32768:8:1$B6vHNwH5DvyBg3zg$6d1cd169b75d91b9637d384953956a215821b1d57c348aeba03089a6a70261b57842bd979e73214c91d0c8343a720c667a82f121b24da270619507ea3f23a91b"
    },
    2: {
        "role": "user",
        "first_name": "Bina",
        "last_name": "Kandel",
        "email": "bina.kandel@emailshield.com",
        "password_hash": "scrypt:32768:8:1$sm2z0YuiVYaDPx56$d8e144a130b5402a8f2f48a9137aea46c7f3b7e42762327c916b5e77a918251ed672d8a427339c550f127871f8e4b3e8df9ac4c78bafb5def10ec059994c234c"
    },
    3: {
        "role": "user",
        "first_name": "Sashil",
        "last_name": "Shrestha",
        "email": "sashil.shrestha@emailshield.com",
        "password_hash": "scrypt:32768:8:1$AJOOmjoCZYEV3y5b$eed8e1bf64cb57bddc44ac9906ecc1338a98d70f5d1e977d9969c1ba87934e7c0e39bf2c302bd55de9741dd4d3278f7b3fe76378d12625ae59b5b8c7a8704dae"
    },
    4: {
        "role": "user",
        "first_name": "Radu",
        "last_name": "Cojocaru",
        "email": "radu.cojocaru@emailshield.com",
        "password_hash": "scrypt:32768:8:1$A3prgZIWb2gy5XSD$ba64dd3c797840aaf4f8f4c6ca102f3d04e84e697f9b6800e0671452d94541206674662b11b6d71a9972f38aaf27f89ba8cba62c1b097686a2294d7624f7cb19"
    },
    5: {
        "role": "user",
        "first_name": "Owais",
        "last_name": "Saeed",
        "email": "owais.saeed@emailshield.com",
        "password_hash": "scrypt:32768:8:1$Dml81qmJv1sWUoSc$acf87b45aba00bda860c5d857c2b3d75a47b007e91b4d44bf7ad0f7d1b3422e30555464b0adde6460e7d62f41319af3c4680aa87f3a763ce234612b96e87a9d8"
    },
    6: {
        "role": "user",
        "first_name": "Noarin",
        "last_name": "Panjwani",
        "email": "noarin.panjwani@emailshield.com",
        "password_hash": "scrypt:32768:8:1$FUaSLHrQ6M0yCS2r$ba6cc4c2341f155cdbe7a2b569154050bd440f0a6f26c001f71ef55bf9651835812af2b7924aaa2d819cb7dc34ee559cb2166c5fcffa253ac25d2970c0397313"
    },
    7: {
        "role": "user",
        "first_name": "Jermy",
        "last_name": "Johnson",
        "email": "jermy.johnson@emailshield.com",
        "password_hash": "scrypt:32768:8:1$FFpcE5aVLkOEP4BK$aa491703f431019fe0377b0c905df67bec351bec7c8e483022794597a8bf90364beb191832e3496f518ff44fe01e264f3562810db991e98d57c3790294058aa1"
    },
    8: {
        "role": "admin",
        "first_name": "System",
        "last_name": "Admin",
        "email": "admin@emailshield.com",
        "password_hash": "scrypt:32768:8:1$eQWXLeLUamXnc3zv$fe20e387e51cf5abc4badbd90ff1df5d2525df760cfbd2be6c411ff3b950df8b09ca71b2e16dd728dc3b323c357a95b0bb8bbf22b4041a947212ea960d754787"
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

# malware_class 24 = benign
SCAN_HISTORY = {
    # user_id = 2
    1:{
        "user_id":2,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":24,
        "confidence_score":0.56,
        "timestamp":"2025-05-15T22:10:32"
    },
    2:{
        "user_id":2,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":24,
        "confidence_score":0.61,
        "timestamp":"2025-05-15T22:10:32"
    },
    3:{
        "user_id":2,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":24,
        "confidence_score":0.31,
        "timestamp":"2025-05-16T22:10:32"
    },
    4:{
        "user_id":2,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":13,
        "confidence_score":0.4,
        "timestamp":"2025-05-16T22:10:32"
    },
    5:{
        "user_id":2,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":24,
        "confidence_score":0.9873,
        "timestamp":"2025-05-16T22:10:32"
    },
    6:{
        "user_id":2,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":14,
        "confidence_score":0.6,
        "timestamp":"2025-05-17T22:10:32"
    },
    7:{
        "user_id":2,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":24,
        "confidence_score":0.88,
        "timestamp":"2025-05-17T22:10:32"
    },
    8:{
        "user_id":2,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":16,
        "confidence_score":0.5,
        "timestamp":"2025-05-18T22:10:32"
    },
    9:{
        "user_id":2,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":24,
        "confidence_score":0.8921,
        "timestamp":"2025-05-18T22:10:32"
    },
    10:{
        "user_id":2,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":24,
        "confidence_score":0.65,
        "timestamp":"2025-05-18T22:10:32"
    },
    

    # user_id = 3
    11:{
        "user_id":3,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class": 24, 
        "confidence_score":0.9873,
        "timestamp":"2025-05-14T22:10:32"
    },
    12:{
        "user_id":3,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class": 24,
        "confidence_score":0.956,
        "timestamp":"2025-05-15T22:10:32"
    },
    13:{
        "user_id":3,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class": 3,
        "confidence_score":0.78,
        "timestamp":"2025-05-15T22:10:32"
    },
    14:{
        "user_id":3,
        "file_name":"001b262b87355ca18c848227093dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":10,
        "confidence_score":0.889,
        "timestamp":"2025-05-16T22:10:32"
    },
    15:{
        "user_id":3,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":6,
        "confidence_score":0.60,
        "timestamp":"2025-05-16T22:10:32"
    },
    16:{
        "user_id":3,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class": 7,
        "confidence_score":0.889,
        "timestamp":"2025-05-17T22:10:32"
    },
    17:{
        "user_id":3,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class": 5,
        "confidence_score":0.587,
        "timestamp":"2025-05-17T22:10:32"
    },
    18:{
        "user_id":3,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":9,
        "confidence_score":0.672,
        "timestamp":"2025-05-18T22:10:32"
    },
    19:{
        "user_id":3,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":24,
        "confidence_score":0.994,
        "timestamp":"2025-05-18T22:10:32"
    },
    20:{
        "user_id":3,
        "file_name":"001b262b87355ca18c84822793dc3e82.png",
        "file_size_bytes": 97758,
        "file_created": "2025-05-18T22:10:32",
        "malware_class":24,
        "confidence_score":0.851,
        "timestamp":"2025-05-18T22:10:32"
    },

    
    # user_id = 4
    "21": {
    "user_id": 4,
    "file_name": "b374f1c9a4f93e83b3d7bc3184e47d91.png",
    "file_size_bytes": 81234,
    "file_created": "2025-05-11T10:23:18",
    "malware_class": 14,
    "confidence_score": 0.885,
    "timestamp": "2025-05-11T10:23:18"
    },
    "22": {
    "user_id": 4,
    "file_name": "7c98dd19e271456cbd68c77664e7fc51.png",
    "file_size_bytes": 122093,
    "file_created": "2025-05-14T03:45:12",
    "malware_class": 7,
    "confidence_score": 0.691,
    "timestamp": "2025-05-14T03:45:12"
    },
    "23": {
    "user_id": 4,
    "file_name": "40a013a2642f4f19bdf6fa1657df9b6f.png",
    "file_size_bytes": 95482,
    "file_created": "2025-05-18T20:32:47",
    "malware_class": 24,
    "confidence_score": 0.961,
    "timestamp": "2025-05-18T20:32:47"
    },
    "24": {
    "user_id": 4,
    "file_name": "f4f7aa6b4f5a4b27b4cde5e6e9c84df3.png",
    "file_size_bytes": 87345,
    "file_created": "2025-05-10T08:14:53",
    "malware_class": 3,
    "confidence_score": 0.788,
    "timestamp": "2025-05-10T08:14:53"
    },
    "25": {
    "user_id": 4,
    "file_name": "1b845c60adbd401d8a9ffb8a19fdf99a.png",
    "file_size_bytes": 105689,
    "file_created": "2025-05-12T16:05:22",
    "malware_class": 0,
    "confidence_score": 0.631,
    "timestamp": "2025-05-12T16:05:22"
    },
    "26": {
    "user_id": 4,
    "file_name": "cd32730f93a24176ae1210c6fc5a3f21.png",
    "file_size_bytes": 89321,
    "file_created": "2025-05-17T11:49:31",
    "malware_class": 24,
    "confidence_score": 0.952,
    "timestamp": "2025-05-17T11:49:31"
    },
    "27": {
    "user_id": 4,
    "file_name": "3d1c5cb3aa22426fb74f924a4d2d7c65.png",
    "file_size_bytes": 74321,
    "file_created": "2025-05-13T07:34:01",
    "malware_class": 18,
    "confidence_score": 0.711,
    "timestamp": "2025-05-13T07:34:01"
    },
    "28": {
    "user_id": 4,
    "file_name": "be7b9b66f6d8432a924b9d00cc021e60.png",
    "file_size_bytes": 116743,
    "file_created": "2025-05-15T22:27:39",
    "malware_class": 24,
    "confidence_score": 0.875,
    "timestamp": "2025-05-15T22:27:39"
    },
    "29": {
    "user_id": 4,
    "file_name": "d5a94e91b0cf4d1f8a15f7fce69dcd2f.png",
    "file_size_bytes": 98523,
    "file_created": "2025-05-11T14:40:29",
    "malware_class": 2,
    "confidence_score": 0.645,
    "timestamp": "2025-05-11T14:40:29"
    },
    "30": {
    "user_id": 4,
    "file_name": "f7b231ec2dcd49838b9b285ab15ef1f6.png",
    "file_size_bytes": 101387,
    "file_created": "2025-05-19T06:12:11",
    "malware_class": 5,
    "confidence_score": 0.922,
    "timestamp": "2025-05-19T06:12:11"
    },
    "31": {
    "user_id": 4,
    "file_name": "a1f5eb21e14f4298bb95f59e8ddda6e4.png",
    "file_size_bytes": 76489,
    "file_created": "2025-05-10T20:54:42",
    "malware_class": 12,
    "confidence_score": 0.803,
    "timestamp": "2025-05-10T20:54:42"
    },
    "32": {
    "user_id": 4,
    "file_name": "e2dc47fb74244cd7a29193a91f6a7f82.png",
    "file_size_bytes": 93672,
    "file_created": "2025-05-16T18:39:54",
    "malware_class": 24,
    "confidence_score": 0.989,
    "timestamp": "2025-05-16T18:39:54"
    },

    # user_id = 5
    "33": {
    "user_id": 5,
    "file_name": "5f79bcf3f56c4f9b8267994b5e6c65f1.png",
    "file_size_bytes": 89734,
    "file_created": "2025-05-10T09:25:44",
    "malware_class": 6,
    "confidence_score": 0.732,
    "timestamp": "2025-05-10T09:25:44"
    },
    "34": {
    "user_id": 5,
    "file_name": "bd7286ea0e644dc2962fa8428bcb77b5.png",
    "file_size_bytes": 105223,
    "file_created": "2025-05-11T18:32:17",
    "malware_class": 20,
    "confidence_score": 0.889,
    "timestamp": "2025-05-11T18:32:17"
    },
    "35": {
    "user_id": 5,
    "file_name": "f07e236cfe4f407f8eb1c2ad9c51d3f9.png",
    "file_size_bytes": 97345,
    "file_created": "2025-05-14T12:07:39",
    "malware_class": 1,
    "confidence_score": 0.648,
    "timestamp": "2025-05-14T12:07:39"
    },
    "36": {
    "user_id": 5,
    "file_name": "4377ffbd215f4c148b03c6d4efb9fa5a.png",
    "file_size_bytes": 86321,
    "file_created": "2025-05-17T08:56:03",
    "malware_class": 11,
    "confidence_score": 0.954,
    "timestamp": "2025-05-17T08:56:03"
    },
    "37": {
    "user_id": 5,
    "file_name": "ea84e93d69e441249b90b7adcc75b474.png",
    "file_size_bytes": 99984,
    "file_created": "2025-05-13T17:12:44",
    "malware_class": 23,
    "confidence_score": 0.768,
    "timestamp": "2025-05-13T17:12:44"
    },
    "38": {
    "user_id": 5,
    "file_name": "92ae7a3797b540bda24887e5dcd760ac.png",
    "file_size_bytes": 113772,
    "file_created": "2025-05-19T05:15:32",
    "malware_class": 8,
    "confidence_score": 0.967,
    "timestamp": "2025-05-19T05:15:32"
    },
    "39": {
    "user_id": 5,
    "file_name": "4c0a392b5e7b4c5eb4b03a1f23cf4d94.png",
    "file_size_bytes": 78214,
    "file_created": "2025-05-10T14:27:50",
    "malware_class": 4,
    "confidence_score": 0.819,
    "timestamp": "2025-05-10T14:27:50"
    },
    "40": {
    "user_id": 5,
    "file_name": "d107c1f61d734487a0a9dcdbcefb3875.png",
    "file_size_bytes": 100324,
    "file_created": "2025-05-15T19:46:21",
    "malware_class": 17,
    "confidence_score": 0.935,
    "timestamp": "2025-05-15T19:46:21"
    },
    "41": {
    "user_id": 5,
    "file_name": "c8d72e37a3274e62a6e03de8dcd276d3.png",
    "file_size_bytes": 109785,
    "file_created": "2025-05-16T23:02:10",
    "malware_class": 13,
    "confidence_score": 0.871,
    "timestamp": "2025-05-16T23:02:10"
    },
    "42": {
    "user_id": 5,
    "file_name": "6be57865b0864a9da39a7cbe623a07e9.png",
    "file_size_bytes": 84397,
    "file_created": "2025-05-18T09:50:33",
    "malware_class": 9,
    "confidence_score": 0.684,
    "timestamp": "2025-05-18T09:50:33"
    },
    "43": {
    "user_id": 5,
    "file_name": "ab30261f5e024cbfb2d7d8c1b5118a32.png",
    "file_size_bytes": 103298,
    "file_created": "2025-05-12T21:38:08",
    "malware_class": 0,
    "confidence_score": 0.601,
    "timestamp": "2025-05-12T21:38:08"
    },
    "44": {
    "user_id": 5,
    "file_name": "e99f3f4e51584cd7a31a6c7d3c871f24.png",
    "file_size_bytes": 95784,
    "file_created": "2025-05-14T06:40:29",
    "malware_class": 16,
    "confidence_score": 0.923,
    "timestamp": "2025-05-14T06:40:29"
    },
    "45": {
    "user_id": 5,
    "file_name": "bc663d81c50b4c7ab0c302cfbfc1142e.png",
    "file_size_bytes": 89932,
    "file_created": "2025-05-11T03:12:00",
    "malware_class": 24,
    "confidence_score": 0.711,
    "timestamp": "2025-05-11T03:12:00"
    },

    # user_id = 6
    "46": {
    "user_id": 6,
    "file_name": "0d6c18f74f054527a3cda7d65a1bc22b.png",
    "file_size_bytes": 104732,
    "file_created": "2025-05-12T10:04:37",
    "malware_class": 4,
    "confidence_score": 0.965,
    "timestamp": "2025-05-12T10:04:37"
    },
    "47": {
    "user_id": 6,
    "file_name": "30a1f6c4e1f44e7ba45c1d17133c49fc.png",
    "file_size_bytes": 112398,
    "file_created": "2025-05-14T13:26:59",
    "malware_class": 17,
    "confidence_score": 0.972,
    "timestamp": "2025-05-14T13:26:59"
    },
    "48": {
    "user_id": 6,
    "file_name": "ec9a9a7a3d8b41e3b319e6ae2a6b184f.png",
    "file_size_bytes": 98201,
    "file_created": "2025-05-16T18:49:23",
    "malware_class": 6,
    "confidence_score": 0.943,
    "timestamp": "2025-05-16T18:49:23"
    },
    "49": {
    "user_id": 6,
    "file_name": "adc1cb83e5c040d495ef5e61f7cba558.png",
    "file_size_bytes": 87842,
    "file_created": "2025-05-11T05:44:10",
    "malware_class": 24,
    "confidence_score": 0.989,
    "timestamp": "2025-05-11T05:44:10"
    },
    "50": {
    "user_id": 6,
    "file_name": "b4d7cbaebff64917929074aeab7ae529.png",
    "file_size_bytes": 107512,
    "file_created": "2025-05-13T22:33:41",
    "malware_class": 8,
    "confidence_score": 0.915,
    "timestamp": "2025-05-13T22:33:41"
    },
    "51": {
    "user_id": 6,
    "file_name": "998f2297d3874d83a38e7ecb3fcfe379.png",
    "file_size_bytes": 92384,
    "file_created": "2025-05-17T01:20:09",
    "malware_class": 3,
    "confidence_score": 0.931,
    "timestamp": "2025-05-17T01:20:09"
    },
    "52": {
    "user_id": 6,
    "file_name": "5e22115b8c8f4ec08e15c89120b59f90.png",
    "file_size_bytes": 100238,
    "file_created": "2025-05-18T07:12:48",
    "malware_class": 14,
    "confidence_score": 0.901,
    "timestamp": "2025-05-18T07:12:48"
    },
    "53": {
    "user_id": 6,
    "file_name": "b7a5bc79a7614a43b41c7ccf563fc330.png",
    "file_size_bytes": 115724,
    "file_created": "2025-05-10T12:57:22",
    "malware_class": 0,
    "confidence_score": 0.986,
    "timestamp": "2025-05-10T12:57:22"
    },
    "54": {
    "user_id": 6,
    "file_name": "774b4dd089d246e6a472a3b7b74c5cc7.png",
    "file_size_bytes": 84736,
    "file_created": "2025-05-15T04:45:36",
    "malware_class": 19,
    "confidence_score": 0.938,
    "timestamp": "2025-05-15T04:45:36"
    },
    "55": {
    "user_id": 6,
    "file_name": "3ad1b5f5537342ad8dd1f8a760ab58fa.png",
    "file_size_bytes": 97742,
    "file_created": "2025-05-19T09:19:03",
    "malware_class": 22,
    "confidence_score": 0.993,
    "timestamp": "2025-05-19T09:19:03"
    },
    "56": {
    "user_id": 6,
    "file_name": "cb87edfc60f74d30a7199b6f6cdd8d7c.png",
    "file_size_bytes": 96833,
    "file_created": "2025-05-10T19:11:59",
    "malware_class": 9,
    "confidence_score": 0.919,
    "timestamp": "2025-05-10T19:11:59"
    },
    "57": {
    "user_id": 6,
    "file_name": "d60c5b0e47a54ccba6c509bbd2e7c9ed.png",
    "file_size_bytes": 102456,
    "file_created": "2025-05-13T03:50:17",
    "malware_class": 15,
    "confidence_score": 0.978,
    "timestamp": "2025-05-13T03:50:17"
    },
    "58": {
    "user_id": 6,
    "file_name": "faa8c9ff8b594263b9a9e6a2993db51f.png",
    "file_size_bytes": 101392,
    "file_created": "2025-05-12T16:02:29",
    "malware_class": 12,
    "confidence_score": 0.941,
    "timestamp": "2025-05-12T16:02:29"
    },

    # user_id = 7
    "59": {
    "user_id": 7,
    "file_name": "3fb4021fca8b4a8a985d882486b87925.png",
    "file_size_bytes": 93372,
    "file_created": "2025-05-11T07:22:11",
    "malware_class": 5,
    "confidence_score": 0.867,
    "timestamp": "2025-05-11T07:22:11"
    },
    "60": {
    "user_id": 7,
    "file_name": "f0db4b59a2b2411abbd61231a84eb3f6.png",
    "file_size_bytes": 98763,
    "file_created": "2025-05-13T08:59:44",
    "malware_class": 16,
    "confidence_score": 0.435,
    "timestamp": "2025-05-13T08:59:44"
    },
    "61": {
    "user_id": 7,
    "file_name": "0f44284978b847689b65c6c013e5741f.png",
    "file_size_bytes": 111902,
    "file_created": "2025-05-14T16:41:33",
    "malware_class": 3,
    "confidence_score": 0.722,
    "timestamp": "2025-05-14T16:41:33"
    },
    "62": {
    "user_id": 7,
    "file_name": "ab84778a9cb448c29ad7e1723df403a5.png",
    "file_size_bytes": 105003,
    "file_created": "2025-05-12T12:50:00",
    "malware_class": 0,
    "confidence_score": 0.361,
    "timestamp": "2025-05-12T12:50:00"
    },
    "63": {
    "user_id": 7,
    "file_name": "ea9e5ac8bcf14c7db3d18038fd60f90e.png",
    "file_size_bytes": 84355,
    "file_created": "2025-05-15T21:15:39",
    "malware_class": 21,
    "confidence_score": 0.704,
    "timestamp": "2025-05-15T21:15:39"
    },
    "64": {
    "user_id": 7,
    "file_name": "7c1d90a7904d46aab998388c827acbe2.png",
    "file_size_bytes": 96412,
    "file_created": "2025-05-10T06:38:49",
    "malware_class": 10,
    "confidence_score": 0.595,
    "timestamp": "2025-05-10T06:38:49"
    },
    "65": {
    "user_id": 7,
    "file_name": "8d173aa3f77a4191919de3b94f1edc79.png",
    "file_size_bytes": 88921,
    "file_created": "2025-05-16T13:28:11",
    "malware_class": 8,
    "confidence_score": 0.888,
    "timestamp": "2025-05-16T13:28:11"
    },
    "66": {
    "user_id": 7,
    "file_name": "57a5bd1145c44b80a81f1ebc8bda15d3.png",
    "file_size_bytes": 107893,
    "file_created": "2025-05-17T02:34:25",
    "malware_class": 24,
    "confidence_score": 0.832,
    "timestamp": "2025-05-17T02:34:25"
    },
    "67": {
    "user_id": 7,
    "file_name": "b0db4b0e3e4c4384ad8bba7dd56dc948.png",
    "file_size_bytes": 94520,
    "file_created": "2025-05-11T18:09:38",
    "malware_class": 13,
    "confidence_score": 0.467,
    "timestamp": "2025-05-11T18:09:38"
    },
    "68": {
    "user_id": 7,
    "file_name": "c784e07d747e4ed3bbd3c2a35c6d364b.png",
    "file_size_bytes": 101984,
    "file_created": "2025-05-18T23:17:45",
    "malware_class": 12,
    "confidence_score": 0.879,
    "timestamp": "2025-05-18T23:17:45"
    },
    "69": {
    "user_id": 7,
    "file_name": "1cecf7c3a9294b66a6e580ebac0c0b66.png",
    "file_size_bytes": 98112,
    "file_created": "2025-05-10T22:44:30",
    "malware_class": 1,
    "confidence_score": 0.398,
    "timestamp": "2025-05-10T22:44:30"
    },
    "70": {
    "user_id": 7,
    "file_name": "e3a8be9fc65e4e0bb6122d4be20610f4.png",
    "file_size_bytes": 99453,
    "file_created": "2025-05-13T15:05:01",
    "malware_class": 6,
    "confidence_score": 0.537,
    "timestamp": "2025-05-13T15:05:01"
    },
    "71": {
    "user_id": 7,
    "file_name": "fde1cc5c212a4cd68b7c9f3bcad7c33e.png",
    "file_size_bytes": 87004,
    "file_created": "2025-05-12T04:23:16",
    "malware_class": 19,
    "confidence_score": 0.793,
    "timestamp": "2025-05-12T04:23:16"
    },
    "72": {
    "user_id": 7,
    "file_name": "1d1932c1f2354a75a1ab166e19f13e32.png",
    "file_size_bytes": 109324,
    "file_created": "2025-05-19T11:55:54",
    "malware_class": 24,
    "confidence_score": 0.653,
    "timestamp": "2025-05-19T11:55:54"
    },
    "73": {
    "user_id": 7,
    "file_name": "c88a28e8c08c4713a8b884f6d204d262.png",
    "file_size_bytes": 108213,
    "file_created": "2025-05-17T20:41:10",
    "malware_class": 7,
    "confidence_score": 0.711,
    "timestamp": "2025-05-17T20:41:10"
    }

}
