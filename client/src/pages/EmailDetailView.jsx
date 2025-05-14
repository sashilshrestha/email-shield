import { useLocation } from 'react-router';
import { ShieldPlus } from 'lucide-react';

function EmailDetailView() {
  const location = useLocation();
  const email = location.state;

  if (!email || Object.keys(email).length === 0) {
    return <div className="p-6 text-center">No email data available.</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden p-6">
      <div className="flex items-center gap-4 border-b border-gray-200 pb-4 justify-between">
        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors">
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

        <button
          className="flex items-center px-3 py-2 gap-1  tracking-tight font-medium text-blue-600 bg-blue-50 rounded-md transition-colors cursor-pointer hover:border-blue-200 hover:border-2 border-2 border-white"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ShieldPlus strokeWidth={2} size={16} />

          <div>Scan for threats</div>
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          {email.subject}
        </h2>
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
          <span>
            From: {email.from_name} &lt;{email.from_email}&gt;
          </span>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
          <span>To: {email.to}</span>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
          <span>Date: {new Date(email.date).toLocaleString()}</span>
        </div>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: email.body }}
        ></div>
      </div>

      {email.attachments && email.attachments.length > 0 && (
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium mb-3">Attachments</h3>
          <div className="flex flex-wrap gap-3">
            {email.attachments.map((attachment, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <div className="font-medium">{attachment.filename}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {attachment.size || 'Unknown Size'}
                  </div>
                </div>
                <button className="ml-auto p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
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
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default EmailDetailView;
