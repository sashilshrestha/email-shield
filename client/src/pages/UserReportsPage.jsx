import { useState } from 'react';
import {
  AlertTriangle,
  Check,
  Plus,
  Shield,
  Trash2,
  AlertCircle,
} from 'lucide-react';

export default function UserReportsPage() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [activeTab, setActiveTab] = useState('policies');
  const [showAddPolicy, setShowAddPolicy] = useState(false);
  const [selectedPolicies, setSelectedPolicies] = useState([]);
  const [showCreateFromReport, setShowCreateFromReport] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [policyTypeFilter, setPolicyTypeFilter] = useState('all');

  const handleSaveSettings = () => {
    setIsUpdating(true);
    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false);
    }, 1500);
  };

  const handleSelectPolicy = (policyId) => {
    if (selectedPolicies.includes(policyId)) {
      setSelectedPolicies(selectedPolicies.filter((id) => id !== policyId));
    } else {
      setSelectedPolicies([...selectedPolicies, policyId]);
    }
  };

  const handleSelectAll = (policies) => {
    if (selectedPolicies.length === policies.length) {
      setSelectedPolicies([]);
    } else {
      setSelectedPolicies(policies.map((policy) => policy.id));
    }
  };

  const handleCreatePolicyFromReport = (report) => {
    setSelectedReport(report);
    setShowCreateFromReport(true);
  };

  // Mock data for file type policies
  const fileTypePolicies = [
    {
      id: 1,
      name: 'Block Executable Files',
      description: 'Block all executable file attachments',
      type: 'File Type',
      patterns: ['.exe', '.bat', '.cmd', '.msi', '.js'],
      action: 'Block',
      enabled: true,
      lastUpdated: '2023-05-01T10:30:00',
    },
    {
      id: 2,
      name: 'Scan Office Documents',
      description: 'Deep scan all Microsoft Office documents',
      type: 'File Type',
      patterns: ['.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'],
      action: 'Scan',
      enabled: true,
      lastUpdated: '2023-05-02T14:15:00',
    },
    {
      id: 3,
      name: 'Quarantine Archive Files',
      description: 'Quarantine compressed archive files for review',
      type: 'File Type',
      patterns: ['.zip', '.rar', '.7z', '.tar', '.gz'],
      action: 'Quarantine',
      enabled: true,
      lastUpdated: '2023-05-03T09:45:00',
    },
    {
      id: 4,
      name: 'Block Script Files',
      description: 'Block all script file attachments',
      type: 'File Type',
      patterns: ['.vbs', '.ps1', '.py', '.rb', '.pl'],
      action: 'Block',
      enabled: true,
      lastUpdated: '2023-05-04T16:20:00',
    },
  ];

  // Mock data for domain policies
  const domainPolicies = [
    {
      id: 5,
      name: 'Block Known Phishing Domains',
      description: 'Block emails from domains known for phishing',
      type: 'Domain',
      patterns: ['phishing-example.com', 'scam-site.net', 'fake-bank.com'],
      action: 'Block',
      enabled: true,
      lastUpdated: '2023-05-01T11:30:00',
    },
    {
      id: 6,
      name: 'Flag Suspicious TLDs',
      description: 'Flag emails from suspicious top-level domains',
      type: 'Domain',
      patterns: ['.xyz', '.top', '.club', '.info'],
      action: 'Flag',
      enabled: true,
      lastUpdated: '2023-05-02T13:15:00',
    },
    {
      id: 7,
      name: 'Quarantine New Domains',
      description:
        'Quarantine emails from domains registered in the last 30 days',
      type: 'Domain',
      patterns: ['<30 days old>'],
      action: 'Quarantine',
      enabled: false,
      lastUpdated: '2023-05-03T10:45:00',
    },
  ];

  // Mock data for content policies
  const contentPolicies = [
    {
      id: 8,
      name: 'Detect Sensitive Data',
      description: 'Flag emails containing sensitive data patterns',
      type: 'Content',
      patterns: [
        'Credit Card Numbers',
        'Social Security Numbers',
        'Bank Account Numbers',
      ],
      action: 'Flag',
      enabled: true,
      lastUpdated: '2023-05-01T12:30:00',
    },
    {
      id: 9,
      name: 'Block Malicious URLs',
      description: 'Block emails containing known malicious URLs',
      type: 'Content',
      patterns: [
        'Known malware URLs',
        'Phishing URLs',
        'Command & Control URLs',
      ],
      action: 'Block',
      enabled: true,
      lastUpdated: '2023-05-02T15:15:00',
    },
    {
      id: 10,
      name: 'Detect Suspicious Keywords',
      description: 'Flag emails containing suspicious keywords',
      type: 'Content',
      patterns: [
        'Urgent wire transfer',
        'Account verification required',
        'Security alert',
      ],
      action: 'Flag',
      enabled: true,
      lastUpdated: '2023-05-03T11:45:00',
    },
  ];

  // Combine all policies
  const allPolicies = [
    ...fileTypePolicies,
    ...domainPolicies,
    ...contentPolicies,
  ];

  // Filter policies based on selected type
  const filteredPolicies =
    policyTypeFilter === 'all'
      ? allPolicies
      : allPolicies.filter(
          (policy) =>
            policy.type.toLowerCase() === policyTypeFilter.toLowerCase()
        );

  // Mock data for user reports
  const userReports = [
    {
      id: 1,
      userId: 'user123',
      userName: 'John Smith',
      department: 'Finance',
      subject: 'Invoice Payment #INV-2023-05-15',
      sender: 'accounting@suspicious-invoice.com',
      scanDate: '2023-05-15T09:30:00',
      score: 25,
      threats: [
        {
          type: 'Phishing Attempt',
          severity: 'High',
          description:
            'Email contains suspicious links attempting to collect login credentials',
        },
        {
          type: 'Suspicious Attachment',
          severity: 'High',
          description:
            'Contains a malicious JavaScript file disguised as a PDF',
        },
      ],
      status: 'New',
      submittedAt: '2023-05-15T09:35:00',
    },
    {
      id: 2,
      userId: 'user456',
      userName: 'Sarah Johnson',
      department: 'Marketing',
      subject: 'Urgent: Update Your Account Information',
      sender: 'security@bankofamerica-secure.net',
      scanDate: '2023-05-14T14:22:00',
      score: 15,
      threats: [
        {
          type: 'Brand Impersonation',
          severity: 'High',
          description:
            'Email impersonates Bank of America but originates from an unrelated domain',
        },
      ],
      status: 'Under Review',
      submittedAt: '2023-05-14T14:25:00',
    },
    {
      id: 3,
      userId: 'user789',
      userName: 'Michael Chen',
      department: 'Engineering',
      subject: 'Your package delivery notification',
      sender: 'delivery-notification@fedex-tracking.info',
      scanDate: '2023-05-13T11:15:00',
      score: 30,
      threats: [
        {
          type: 'Malware Distribution',
          severity: 'High',
          description:
            'Email contains a link to download malware disguised as a tracking application',
        },
      ],
      status: 'Resolved',
      submittedAt: '2023-05-13T11:20:00',
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getActionClass = (action) => {
    switch (action) {
      case 'Block':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'Quarantine':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Flag':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Scan':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getTypeClass = (type) => {
    switch (type) {
      case 'File Type':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Domain':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Content':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Under Review':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Resolved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold md:text-3xl">User Reports</h1>
        </div>
      </div>

      {showCreateFromReport && selectedReport && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white dark:bg-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <AlertCircle
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                      Create Policy from Report
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Create a new security policy based on the threat
                        detected in this user report.
                      </p>

                      <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                        <h4 className="font-medium text-sm">Report Details</h4>
                        <div className="mt-2 space-y-2 text-sm">
                          <div>
                            <span className="font-medium">Subject:</span>{' '}
                            {selectedReport.subject}
                          </div>
                          <div>
                            <span className="font-medium">Sender:</span>{' '}
                            {selectedReport.sender}
                          </div>
                          <div>
                            <span className="font-medium">Threats:</span>
                            <ul className="list-disc pl-5 mt-1">
                              {selectedReport.threats.map((threat, index) => (
                                <li key={index}>
                                  {threat.type} ({threat.severity})
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="policy-name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Policy Name
                        </label>
                        <input
                          type="text"
                          name="policy-name"
                          id="policy-name"
                          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="Enter policy name"
                          defaultValue={`Block emails from ${
                            selectedReport.sender.split('@')[1]
                          }`}
                        />
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="policy-type"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Policy Type
                        </label>
                        <select
                          id="policy-type"
                          name="policy-type"
                          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          defaultValue="Domain"
                        >
                          <option>Domain</option>
                          <option>File Type</option>
                          <option>Content</option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="policy-action"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Action
                        </label>
                        <select
                          id="policy-action"
                          name="policy-action"
                          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          defaultValue="Block"
                        >
                          <option>Block</option>
                          <option>Quarantine</option>
                          <option>Flag</option>
                          <option>Scan</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                  onClick={() => setShowCreateFromReport(false)}
                >
                  Create Policy
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-700 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={() => setShowCreateFromReport(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Email Details
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Threats
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Score
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Submitted
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {userReports.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                >
                  No user reports found
                </td>
              </tr>
            ) : (
              userReports.map((report) => (
                <tr
                  key={report.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/30"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">{report.userName}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {report.department}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{report.subject}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      From: {report.sender}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      {report.threats.map((threat, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                              threat.severity === 'High'
                                ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                                : threat.severity === 'Medium'
                                ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                            }`}
                          >
                            {threat.severity}
                          </span>
                          <span className="text-xs">{threat.type}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div
                        className={`h-2 w-16 rounded-full ${
                          report.score > 70
                            ? 'bg-green-500'
                            : report.score > 40
                            ? 'bg-amber-500'
                            : 'bg-red-500'
                        }`}
                        style={{
                          width: `${
                            (Math.min(report.score, 100) / 100) * 64
                          }px`,
                        }}
                      ></div>
                      <span className="ml-2 text-xs font-medium">
                        {report.score}/100
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(report.submittedAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleCreatePolicyFromReport(report)}
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Create Policy
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
