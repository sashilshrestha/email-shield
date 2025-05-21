import { useState } from 'react';
import GmailIcon from '../assets/icons/gmail.png';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('integrations');
  const [showGmailIntegration, setShowGmailIntegration] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [scanAttachments, setScanAttachments] = useState(true);
  const [scanLinks, setScanLinks] = useState(true);
  const [autoScan, setAutoScan] = useState(true);

  return (
    // <div className="p-6 space-y-8">
    //   <div className="flex items-center justify-between">
    //     <h1 className="text-2xl font-bold md:text-3xl">Settings</h1>
    //   </div>

    //   <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
    //     <div className="border-b border-gray-200 dark:border-gray-700">
    //       <nav className="flex overflow-x-auto">
    //         <button
    //           onClick={() => {
    //             setActiveTab('integrations');
    //             setShowGmailIntegration(false);
    //           }}
    //           className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
    //             activeTab === 'integrations'
    //               ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
    //               : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
    //           }`}
    //         >
    //           Integrations
    //         </button>
    //       </nav>
    //     </div>

    //     <div className="p-6">
    //       {activeTab === 'general' && (
    //         <div className="space-y-6">
    //           <h2 className="text-lg font-medium">General Settings</h2>

    //           <div className="space-y-4">
    //             <div className="flex items-center justify-between">
    //               <div>
    //                 <h3 className="font-medium">Dark Mode</h3>
    //                 <p className="text-sm text-gray-500 dark:text-gray-400">
    //                   Enable dark mode for the application
    //                 </p>
    //               </div>
    //               <label className="relative inline-flex items-center cursor-pointer">
    //                 <input
    //                   type="checkbox"
    //                   className="sr-only peer"
    //                   checked={darkMode}
    //                   onChange={() => setDarkMode(!darkMode)}
    //                 />
    //                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //               </label>
    //             </div>

    //             <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
    //               <h3 className="font-medium mb-2">Profile Information</h3>
    //               <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
    //                 <div className="sm:col-span-3">
    //                   <label
    //                     htmlFor="first-name"
    //                     className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    //                   >
    //                     First name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="first-name"
    //                     id="first-name"
    //                     defaultValue="John"
    //                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800"
    //                   />
    //                 </div>

    //                 <div className="sm:col-span-3">
    //                   <label
    //                     htmlFor="last-name"
    //                     className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    //                   >
    //                     Last name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="last-name"
    //                     id="last-name"
    //                     defaultValue="Doe"
    //                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800"
    //                   />
    //                 </div>

    //                 <div className="sm:col-span-6">
    //                   <label
    //                     htmlFor="email"
    //                     className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    //                   >
    //                     Email address
    //                   </label>
    //                   <input
    //                     type="email"
    //                     name="email"
    //                     id="email"
    //                     defaultValue="john@example.com"
    //                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="flex justify-end">
    //             <button
    //               type="button"
    //               className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //             >
    //               Save Changes
    //             </button>
    //           </div>
    //         </div>
    //       )}

    //       {activeTab === 'security' && (
    //         <div className="space-y-6">
    //           <h2 className="text-lg font-medium">Security Settings</h2>

    //           <div className="space-y-4">
    //             <div className="flex items-center justify-between">
    //               <div>
    //                 <h3 className="font-medium">Scan Email Attachments</h3>
    //                 <p className="text-sm text-gray-500 dark:text-gray-400">
    //                   Automatically scan all email attachments for malware
    //                 </p>
    //               </div>
    //               <label className="relative inline-flex items-center cursor-pointer">
    //                 <input
    //                   type="checkbox"
    //                   className="sr-only peer"
    //                   checked={scanAttachments}
    //                   onChange={() => setScanAttachments(!scanAttachments)}
    //                 />
    //                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //               </label>
    //             </div>

    //             <div className="flex items-center justify-between">
    //               <div>
    //                 <h3 className="font-medium">Scan Email Links</h3>
    //                 <p className="text-sm text-gray-500 dark:text-gray-400">
    //                   Check all links in emails for phishing attempts
    //                 </p>
    //               </div>
    //               <label className="relative inline-flex items-center cursor-pointer">
    //                 <input
    //                   type="checkbox"
    //                   className="sr-only peer"
    //                   checked={scanLinks}
    //                   onChange={() => setScanLinks(!scanLinks)}
    //                 />
    //                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //               </label>
    //             </div>

    //             <div className="flex items-center justify-between">
    //               <div>
    //                 <h3 className="font-medium">Auto-Scan New Emails</h3>
    //                 <p className="text-sm text-gray-500 dark:text-gray-400">
    //                   Automatically scan emails when they arrive
    //                 </p>
    //               </div>
    //               <label className="relative inline-flex items-center cursor-pointer">
    //                 <input
    //                   type="checkbox"
    //                   className="sr-only peer"
    //                   checked={autoScan}
    //                   onChange={() => setAutoScan(!autoScan)}
    //                 />
    //                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //               </label>
    //             </div>

    //             <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
    //               <h3 className="font-medium mb-2">Change Password</h3>
    //               <div className="space-y-4">
    //                 <div>
    //                   <label
    //                     htmlFor="current-password"
    //                     className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    //                   >
    //                     Current Password
    //                   </label>
    //                   <input
    //                     type="password"
    //                     name="current-password"
    //                     id="current-password"
    //                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800"
    //                   />
    //                 </div>
    //                 <div>
    //                   <label
    //                     htmlFor="new-password"
    //                     className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    //                   >
    //                     New Password
    //                   </label>
    //                   <input
    //                     type="password"
    //                     name="new-password"
    //                     id="new-password"
    //                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800"
    //                   />
    //                 </div>
    //                 <div>
    //                   <label
    //                     htmlFor="confirm-password"
    //                     className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    //                   >
    //                     Confirm New Password
    //                   </label>
    //                   <input
    //                     type="password"
    //                     name="confirm-password"
    //                     id="confirm-password"
    //                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="flex justify-end">
    //             <button
    //               type="button"
    //               className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //             >
    //               Save Changes
    //             </button>
    //           </div>
    //         </div>
    //       )}

    //       {activeTab === 'notifications' && (
    //         <div className="space-y-6">
    //           <h2 className="text-lg font-medium">Notification Settings</h2>

    //           <div className="space-y-4">
    //             <div className="flex items-center justify-between">
    //               <div>
    //                 <h3 className="font-medium">Email Notifications</h3>
    //                 <p className="text-sm text-gray-500 dark:text-gray-400">
    //                   Receive email notifications for security alerts
    //                 </p>
    //               </div>
    //               <label className="relative inline-flex items-center cursor-pointer">
    //                 <input
    //                   type="checkbox"
    //                   className="sr-only peer"
    //                   checked={notifications}
    //                   onChange={() => setNotifications(!notifications)}
    //                 />
    //                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //               </label>
    //             </div>

    //             <div className="flex items-center justify-between">
    //               <div>
    //                 <h3 className="font-medium">Browser Notifications</h3>
    //                 <p className="text-sm text-gray-500 dark:text-gray-400">
    //                   Show browser notifications for security alerts
    //                 </p>
    //               </div>
    //               <label className="relative inline-flex items-center cursor-pointer">
    //                 <input
    //                   type="checkbox"
    //                   className="sr-only peer"
    //                   defaultChecked
    //                 />
    //                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //               </label>
    //             </div>

    //             <div className="flex items-center justify-between">
    //               <div>
    //                 <h3 className="font-medium">Weekly Security Report</h3>
    //                 <p className="text-sm text-gray-500 dark:text-gray-400">
    //                   Receive a weekly summary of security scans
    //                 </p>
    //               </div>
    //               <label className="relative inline-flex items-center cursor-pointer">
    //                 <input
    //                   type="checkbox"
    //                   className="sr-only peer"
    //                   defaultChecked
    //                 />
    //                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //               </label>
    //             </div>
    //           </div>

    //           <div className="flex justify-end">
    //             <button
    //               type="button"
    //               className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //             >
    //               Save Changes
    //             </button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>

    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <div className="flex gap-2 mb-4">
                {showGmailIntegration && (
                  <button
                    onClick={() => setShowGmailIntegration(false)}
                    className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </button>
                )}
                <h1
                  className={`text-2xl font-bold text-gray-900 dark:text-white text-center ${
                    showGmailIntegration && 'w-full'
                  }`}
                >
                  Email Service Integrations
                </h1>
              </div>
              {activeTab === 'integrations' && !showGmailIntegration && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100  rounded-full flex items-center justify-center mr-4 p-1">
                          <img
                            src={GmailIcon}
                            alt=""
                            className="h-4 object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">Gmail</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Connect your Gmail account to scan emails
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowGmailIntegration(true)}
                        className="px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                      >
                        Connect
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-600 dark:text-blue-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Outlook</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Connect your Outlook account to scan emails
                          </p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 border border-none dark:border-blue-400 rounded-md">
                        Comming Soon
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mr-4 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-yellow-600 dark:text-yellow-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v4zm0-5H6V6h12v2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Yahoo Mail</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Connect your Yahoo Mail account to scan emails
                          </p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 border border-none dark:border-blue-400 rounded-md">
                        Comming Soon
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'integrations' && showGmailIntegration && (
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <img src={GmailIcon} alt="" className="h-6" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      Connect to Gmail
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                      Connect your Gmail account to EmailShield to scan your
                      emails for malware, phishing attempts, and other threats.
                    </p>

                    <div className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4 text-sm text-blue-800 dark:text-blue-300">
                        <p>
                          <strong>Note:</strong> EmailShield will only scan your
                          emails for security threats and will not store your
                          email content.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <a href="http://localhost:8000/auth">
                            Connect to Gmail
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2">
                      What permissions will EmailShield have?
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Read emails to scan for security threats</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Scan attachments for malware</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Check links for phishing attempts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          EmailShield will NOT send emails on your behalf
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          EmailShield will NOT store your email content
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
