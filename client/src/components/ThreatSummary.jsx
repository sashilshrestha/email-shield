import {
  AlertTriangle,
  Shield,
  Activity,
  CheckCircle,
  FileX,
} from 'lucide-react';
import { useEffect } from 'react';

export function ThreatSummary({ scanResult }) {
  useEffect(() => {
    console.log(scanResult);
  }, []);
  // Remove duplicate entries from arrays
  const uniqueBehaviors = [...new Set(scanResult?.behaviour)];
  const uniqueRemedies = [...new Set(scanResult?.remedy)];

  // Format confidence as percentage
  const confidencePercentage = Math.round(scanResult?.confidence * 100);

  // Determine severity level based on confidence
  const getSeverityLevel = (confidence) => {
    if (confidence >= 0.9) return 'Critical';
    if (confidence >= 0.7) return 'High';
    if (confidence >= 0.4) return 'Medium';
    return 'Low';
  };

  const severityLevel = getSeverityLevel(scanResult?.confidence);

  // Get appropriate color classes based on severity
  const getSeverityColorClass = (severity) => {
    switch (severity) {
      case 'Critical':
        return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
      case 'High':
        return 'text-red-500 dark:text-red-300 bg-red-50 dark:bg-red-900/20';
      case 'Medium':
        return 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30';
      case 'Low':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const severityColorClass = getSeverityColorClass(severityLevel);

  return scanResult ? (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      {' '}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium">Threat Summary</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Malware detected: {scanResult.predicted_class}
            </p>
          </div>
          <div
            className={`px-3 py-1.5 rounded-full ${severityColorClass} flex items-center gap-1.5`}
          >
            <AlertTriangle className="h-4 w-4" />
            <span className="font-medium">{severityLevel} Risk</span>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-6">
        {/* Confidence meter */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium">Detection Confidence</div>
            <div className="text-sm font-medium">{confidencePercentage}%</div>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500"
              style={{ width: `${confidencePercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Malware Information */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-red-500" />
            <h3 className="text-sm font-semibold">Malware Information</h3>
          </div>
          <ul className="space-y-2 pl-6 list-disc text-sm">
            {scanResult.malware_info.map((info, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {info}
              </li>
            ))}
          </ul>
        </div>

        {/* Behavior */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Activity className="h-5 w-5 text-amber-500" />
            <h3 className="text-sm font-semibold">Malicious Behavior</h3>
          </div>
          <ul className="space-y-2 pl-6 list-disc text-sm">
            {uniqueBehaviors.map((behavior, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {behavior}
              </li>
            ))}
          </ul>
        </div>

        {/* Remediation Steps */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <h3 className="text-sm font-semibold">Recommended Actions</h3>
          </div>
          <ul className="space-y-2 pl-6 list-disc text-sm">
            {uniqueRemedies.map((remedy, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {remedy}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium">Threat Summary</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 invisible">
              Detailed analysis of the scanned email
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 items-center justify-center flex">
        <div className="flex flex-col items-center justify-center text-center p-8">
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-3">
            <FileX className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
            No Attachments Found
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
            This email does not contain any file attachments to analyze.
          </p>
        </div>
      </div>
    </div>
  );
}
