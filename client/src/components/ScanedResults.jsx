import { useEffect } from 'react';

export default function ScannedResults({ results, onBack }) {
  useEffect(() => {
    console.log(results);
  }, []);
  return (
    <div className="p-6 space-y-6">
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
        <h1 className="text-2xl font-bold md:text-3xl">Scan Results</h1>
      </div>
      {results}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-medium">Email Analysis</h2>
              {results?.isSafe ? (
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
            <div className="space-y-1">
              <div className="text-sm font-medium">Subject</div>
              <div className="text-sm">{results?.subject}</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Sender</div>
              <div className="text-sm">{results?.sender}</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Scan Date</div>
              <div className="text-sm">
                {new Date(results?.scanDate).toLocaleString()}
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Security Score</div>
                <div className="text-sm font-medium">{results?.score}/100</div>
              </div>
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    results?.score > 70
                      ? 'bg-green-500'
                      : results?.score > 40
                      ? 'bg-amber-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${results?.score}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-red-500">High Risk</span>
                <span className="text-xs text-amber-500">Medium Risk</span>
                <span className="text-xs text-green-500">Low Risk</span>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2">
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
              Share Results
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              <AlertCircle className="h-4 w-4" />
              <span>Send to Admin</span>
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium">Threat Summary</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {results?.threats.length === 0
                ? 'No threats detected'
                : `${results?.threats.length} threat${
                    results?.threats.length > 1 ? 's' : ''
                  } detected`}
            </p>
          </div>
          <div className="p-6">
            {results?.threats.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-500 mb-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-medium">This email is safe</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  No malware or suspicious content detected
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {results?.threats.map((threat, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${
                          threat.severity === 'High'
                            ? 'text-red-500'
                            : threat.severity === 'Medium'
                            ? 'text-amber-500'
                            : 'text-yellow-500'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">{threat.type}</span>
                      <span
                        className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                          threat.severity === 'High'
                            ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                            : threat.severity === 'Medium'
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        }`}
                      >
                        {threat.severity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {threat.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium">Recommended Actions</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Steps to take based on the scan results
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {results?.isSafe ? (
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-medium">This email appears to be safe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    You can proceed with reading and interacting with this email
                    as normal.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Do not open any attachments</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      The attachments in this email may contain malware that
                      could harm your device.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Do not click on any links</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      The links in this email may lead to phishing websites
                      designed to steal your information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-500 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">
                      Report this email as suspicious
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Help protect others by reporting this email to your IT
                      department.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
