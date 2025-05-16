import { AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { ThreatSummary } from './ThreatSummary';

export default function Scannedemails({ email, onBack }) {
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleSendToAdmin = () => {
    setIsSending(true);
    // Simulate API call to send report to admin
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      // Reset success message after 3 seconds
      setTimeout(() => setSendSuccess(false), 3000);
    }, 1500);
  };
  return (
    <div className="p-6 space-y-3">
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors"
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
        <h1 className="text-2xl font-bold md:text-3xl">Scan emails</h1>
      </div>
      {/* Buttons */}
      <div className="px-6 py-4  flex justify-end gap-2">
        {/* <button className="px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Report
        </button>
        <button className="px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          Share email
        </button> */}
        <button
          onClick={handleSendToAdmin}
          disabled={isSending || sendSuccess}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
            sendSuccess
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isSending ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Sharing Now ...</span>
            </>
          ) : sendSuccess ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Shared with Admin</span>
            </>
          ) : (
            <>
              <AlertCircle className="h-4 w-4" />
              <span>Share with Admin</span>
            </>
          )}
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-medium">Email Analysis</h2>
              {email?.isSafe ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Detailed analysis of the scanned email
            </p>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-1 ">
              <div className="text-sm font-semibold">Subject: </div>
              <div className="text-sm text-gray-500">{email?.subject}</div>
            </div>
            <div className="space-y-1 ">
              <div className="text-sm font-semibold">Sender: </div>
              <div className="text-sm text-gray-500">{email?.from_email}</div>
            </div>

            <div className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Security Score</div>
                <div className="text-sm font-medium">{email?.score}/100</div>
              </div>
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                {/* <div
                  className={`h-full ${
                    email?.score > 70
                      ? 'bg-green-500'
                      : email?.score > 40
                      ? 'bg-amber-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${email?.score}%` }}
                ></div> */}
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-red-500">High Risk</span>
                <span className="text-xs text-amber-500">Medium Risk</span>
                <span className="text-xs text-green-500">Low Risk</span>
              </div>
            </div>
          </div>
        </div>

        <ThreatSummary scanResult={email.malwareDetails} />
      </div>
    </div>
  );
}
