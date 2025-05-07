import { useState } from 'react';
import { Scan, ShieldPlus } from 'lucide-react';
import ScanResults from '../components/ScanedResults';

// Mock email data
const mockEmails = [
  {
    id: 1,
    sender: 'security@company.com',
    subject: 'Important Security Update',
    preview:
      'Please update your password immediately to ensure your account remains secure...',
    date: '2023-05-04T10:30:00',
    read: true,
    hasAttachment: true,
  },
  {
    id: 2,
    sender: 'newsletter@tech-updates.com',
    subject: 'Weekly Tech Newsletter',
    preview:
      'This week in tech: New AI developments, cybersecurity threats, and more...',
    date: '2023-05-03T14:15:00',
    read: false,
    hasAttachment: false,
  },
  {
    id: 3,
    sender: 'support@suspicious-domain.net',
    subject: 'Your Account Has Been Compromised',
    preview:
      'We have detected unusual activity on your account. Click here to verify...',
    date: '2023-05-03T09:45:00',
    read: false,
    hasAttachment: true,
  },
  {
    id: 4,
    sender: 'hr@yourcompany.com',
    subject: 'Monthly Team Update',
    preview:
      'Here are the updates from all departments for the month of May...',
    date: '2023-05-02T16:20:00',
    read: true,
    hasAttachment: false,
  },
  {
    id: 5,
    sender: 'no-reply@banking.com',
    subject: 'Transaction Alert',
    preview: 'A transaction of $500 has been made from your account...',
    date: '2023-05-02T11:10:00',
    read: true,
    hasAttachment: false,
  },
  {
    id: 6,
    sender: 'marketing@online-store.com',
    subject: 'Special Discount Just For You!',
    preview:
      "As a valued customer, we're offering you an exclusive 50% discount...",
    date: '2023-05-01T13:25:00',
    read: false,
    hasAttachment: false,
  },
  {
    id: 7,
    sender: 'notifications@social-network.com',
    subject: 'New Connection Request',
    preview: 'You have 3 new connection requests waiting for your approval...',
    date: '2023-04-30T19:05:00',
    read: true,
    hasAttachment: false,
  },
  {
    id: 8,
    sender: 'info@travel-agency.com',
    subject: 'Your Travel Itinerary',
    preview:
      'Here is your complete travel itinerary for your upcoming trip to Paris...',
    date: '2023-04-30T08:40:00',
    read: false,
    hasAttachment: true,
  },
];

export default function InboxView() {
  const [emails, setEmails] = useState(mockEmails);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredEmail, setHoveredEmail] = useState(null);
  const [scanningEmail, setScanningEmail] = useState(null);
  const [showScanDialog, setShowScanDialog] = useState(false);
  const [showScanedScreen, setShowScannedScreen] = useState(false);
  const [scanResults, setScanResults] = useState(null);

  const filteredEmails = emails.filter(
    (email) =>
      email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScan = (email) => {
    setScanningEmail(email);
    setShowScanDialog(true);

    // Simulate scanning process
    setTimeout(() => {
      setShowScanDialog(false);
      // Props Wala Idea Ho
      // onScanEmail(email);
      handleScanEmail(email);
    }, 2000);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();

    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  const handleScanEmail = (email) => {
    // setSelectedEmail(email);
    // Simulate scanning process
    setTimeout(() => {
      const result = {
        id: email.id,
        subject: email.subject,
        sender: email.sender,
        scanDate: new Date().toISOString(),
        threats:
          Math.random() > 0.7
            ? [
                {
                  type: 'Phishing',
                  severity: 'High',
                  description: 'Suspicious link detected',
                },
                {
                  type: 'Malware',
                  severity: 'Medium',
                  description: 'Potential malicious attachment',
                },
              ]
            : [],
        isSafe: Math.random() > 0.7 ? false : true,
        score: Math.floor(Math.random() * 100),
      };
      setScanResults(result);
      setShowScannedScreen(true);
    }, 1000);
  };

  return (
    <>
      {!showScanedScreen && (
        <>
          <div className="p-6 h-full flex flex-col relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h1 className="text-2xl font-bold md:text-3xl">Inbox</h1>
              <div className="flex items-center gap-2">
                <div className="relative flex-1 md:w-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="search"
                    placeholder="Search emails..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 bg-white overflow-hidden text-xs">
              <div className="h-full overflow-auto">
                {filteredEmails.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">No emails found</p>
                  </div>
                ) : (
                  <ul className="divide-y divide-gray-200">
                    {filteredEmails.map((email) => (
                      <li
                        key={email.id}
                        className={`relative p-4 hover:bg-gray-50 hover:shadow-lg transition-colors cursor-pointer ${
                          !email.read ? 'ya unread xa bhane colour auxa' : ''
                        }`}
                        onMouseEnter={() => setHoveredEmail(email.id)}
                        onMouseLeave={() => setHoveredEmail(null)}
                      >
                        <div className="flex items-start gap-2 flex-col">
                          <div className="w-full">
                            <div className="grid grid-cols-12 gap-2">
                              {/* Sender */}
                              <div className="col-span-2">
                                <span
                                  className={`font-medium ${
                                    !email.read ? 'font-semibold' : ''
                                  }`}
                                >
                                  {email.sender}
                                </span>
                              </div>
                              {/* Subject and Date */}
                              <div
                                className={`col-span-10 flex justify-between ${
                                  !email.read ? 'font-semibold' : ''
                                }`}
                              >
                                <h5>{email.subject}</h5>
                                <span className="text-xs text-gray-500">
                                  {formatDate(email.date)}
                                </span>
                              </div>
                            </div>
                            <p className=" text-gray-500 truncate mt-2">
                              {email.preview}
                            </p>
                          </div>

                          {email.hasAttachment && (
                            <div
                              className="bg-gray-200 px-2 py-1 rounded-full text-gray-600"
                              style={{ fontSize: '0.65rem' }}
                            >
                              Attachment
                            </div>
                          )}
                        </div>

                        {hoveredEmail === email.id && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-200 rounded-lg z-10">
                            <button
                              className="flex items-center px-3 py-2 gap-1 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-progress"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleScan(email);
                              }}
                            >
                              <ShieldPlus strokeWidth={2} size={16} />

                              <div>Scan for threats</div>
                            </button>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {/* Scanning Dialog */}
      {showScanDialog && (
        <div className="fixed inset-0 bg-blue-900/80 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full mx-4 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-1">Scanning Email</h3>
              <p className="text-sm text-gray-500 mb-6">
                Analyzing email for potential threats...
              </p>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                {scanningEmail && (
                  <div className="text-center">
                    <p className="font-medium">{scanningEmail.subject}</p>
                    <p className="text-sm text-gray-500">
                      {scanningEmail.sender}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {showScanedScreen && <ScanResults email={scanResults} />}
    </>
  );
}
