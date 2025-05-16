import { useState, useEffect } from 'react';
import { Scan, ShieldPlus } from 'lucide-react';
import { useNavigate } from 'react-router';
import ScanResults from '../components/ScanedResults';

// Mock email data
// const mockEmails = [
//   {
//     id: 1,
//     sender: 'security@company.com',
//     subject: 'Important Security Update',
//     preview:
//       'Please update your password immediately to ensure your account remains secure...',
//     date: '2023-05-04T10:30:00',
//     read: true,
//     hasAttachment: true,
//   },
//   {
//     id: 2,
//     sender: 'newsletter@tech-updates.com',
//     subject: 'Weekly Tech Newsletter',
//     preview:
//       'This week in tech: New AI developments, cybersecurity threats, and more...',
//     date: '2023-05-03T14:15:00',
//     read: false,
//     hasAttachment: false,
//   },
//   {
//     id: 3,
//     sender: 'support@suspicious-domain.net',
//     subject: 'Your Account Has Been Compromised',
//     preview:
//       'We have detected unusual activity on your account. Click here to verify...',
//     date: '2023-05-03T09:45:00',
//     read: false,
//     hasAttachment: true,
//   },
//   {
//     id: 4,
//     sender: 'hr@yourcompany.com',
//     subject: 'Monthly Team Update',
//     preview:
//       'Here are the updates from all departments for the month of May...',
//     date: '2023-05-02T16:20:00',
//     read: true,
//     hasAttachment: false,
//   },
//   {
//     id: 5,
//     sender: 'no-reply@banking.com',
//     subject: 'Transaction Alert',
//     preview: 'A transaction of $500 has been made from your account...',
//     date: '2023-05-02T11:10:00',
//     read: true,
//     hasAttachment: false,
//   },
//   {
//     id: 6,
//     sender: 'marketing@online-store.com',
//     subject: 'Special Discount Just For You!',
//     preview:
//       "As a valued customer, we're offering you an exclusive 50% discount...",
//     date: '2023-05-01T13:25:00',
//     read: false,
//     hasAttachment: false,
//   },
//   {
//     id: 7,
//     sender: 'notifications@social-network.com',
//     subject: 'New Connection Request',
//     preview: 'You have 3 new connection requests waiting for your approval...',
//     date: '2023-04-30T19:05:00',
//     read: true,
//     hasAttachment: false,
//   },
//   {
//     id: 8,
//     sender: 'info@travel-agency.com',
//     subject: 'Your Travel Itinerary',
//     preview:
//       'Here is your complete travel itinerary for your upcoming trip to Paris...',
//     date: '2023-04-30T08:40:00',
//     read: false,
//     hasAttachment: true,
//   },
// ];

export default function InboxView() {
  const [emails, setEmails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredEmail, setHoveredEmail] = useState(null);
  const [scanningEmail, setScanningEmail] = useState(null);
  const [showScanDialog, setShowScanDialog] = useState(false);
  const [showScanedScreen, setShowScannedScreen] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch emails from FastAPI server
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch('http://localhost:8000/gmail/messages');
        const { emails } = await response.json();
        setEmails(emails);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching emails:', error);
        setIsLoading(false);
      }
    };
    fetchEmails();
  }, []);

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

  const handleScanEmail = async (email) => {
    try {
      const filename = email.attachments[0].filename;
      if (!filename) throw new Error('No attachment found');

      const token = localStorage.getItem('token');

      const response = await fetch(
        `http://localhost:8000/predict?filename=${filename}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error('Error scanning the file');

      const result = await response.json();

      const scanResult = { ...email, malwareDetails: result };

      console.log(scanResult);

      setScanResults(scanResult);

      setShowScannedScreen(true);
    } catch (error) {
      console.error('Error scanning email:', error);
    } finally {
      setShowScanDialog(false);
    }
  };

  return (
    <>
      {!showScanedScreen && (
        <>
          <div className="p-6 h-full flex flex-col relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h1 className="text-2xl font-bold md:text-3xl">Inbox</h1>

              <div className="flex items-center gap-2 text-sm">
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
                {isLoading ? (
                  <div className="flex justify-center items-center w-full h-full flex-col gap-4">
                    <div
                      class="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                    <div className="font-semibold tracking-tight">
                      {' '}
                      Loading{' '}
                    </div>
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
                        onClick={() =>
                          navigate('/email-details', { state: email })
                        }
                      >
                        <div className="flex items-start gap-2 flex-col">
                          <div className="w-full">
                            <div className="grid grid-cols-12 gap-2">
                              {/* Sender */}
                              <div className="col-span-3 flex items-center gap-3">
                                <span
                                  className={`${
                                    !email.read ? 'font-semibold truncate' : ''
                                  }`}
                                >
                                  {email.from_name}
                                </span>
                                <span className="text-gray-500 italic w-40 truncate block">
                                  {email.from_email}
                                </span>
                              </div>
                              {/* Subject and Date */}
                              <div
                                className={`col-span-9 flex justify-between ${
                                  !email.read ? 'font-semibold' : ''
                                }`}
                              >
                                <h5>{email.subject}</h5>
                                <span className="text-xs text-gray-500">
                                  {formatDate(email.date)}
                                </span>
                              </div>
                            </div>
                            <p
                              className={`text-gray-500 truncate mt-2 ${
                                hoveredEmail === email.id && 'pr-40'
                              }`}
                            >
                              {email.snippet}
                            </p>
                          </div>

                          {email.attachments.map((attachment) => (
                            <div
                              className="bg-gray-200 px-2 py-1 rounded-full text-gray-600"
                              style={{ fontSize: '0.65rem' }}
                            >
                              {attachment.filename}
                            </div>
                          ))}
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
        <div className="fixed inset-0 bg-gray-400/80 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
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
