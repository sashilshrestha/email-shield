import { useState } from 'react';

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

export default function InboxView({ onScanEmail }) {
  const [emails, setEmails] = useState(mockEmails);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredEmail, setHoveredEmail] = useState(null);
  const [scanningEmail, setScanningEmail] = useState(null);
  const [showScanDialog, setShowScanDialog] = useState(false);

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
      onScanEmail(email);
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

  return (
    <div className="p-6 h-full flex flex-col">
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

      <div className="flex-1 bg-white rounded-xl overflow-hidden text-sm">
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
                  className={`relative p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                    !email.read ? 'bg-blue-50' : ''
                  }`}
                  onMouseEnter={() => setHoveredEmail(email.id)}
                  onMouseLeave={() => setHoveredEmail(null)}
                >
                  <div className="flex items-start gap-4 flex-col">
                    <div className="w-full">
                      <div className="flex justify-between gap-2">
                        <span
                          className={`font-medium ${
                            !email.read ? 'font-semibold' : ''
                          }`}
                        >
                          {email.sender}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatDate(email.date)}
                        </span>
                      </div>
                      <h3
                        className={`mt-1 ${!email.read ? 'font-semibold' : ''}`}
                      >
                        {email.subject}
                      </h3>
                      <p className="text-sm text-gray-500 truncate mt-1">
                        {email.preview}
                      </p>
                    </div>

                    {email.hasAttachment && (
                      <div className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        Attachment
                      </div>
                    )}
                  </div>

                  {hoveredEmail === email.id && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-200 rounded-lg p-1 z-10">
                      <button
                        className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleScan(email);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        Scan for threats
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Scanning Dialog */}
      {showScanDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
    </div>
  );
}
