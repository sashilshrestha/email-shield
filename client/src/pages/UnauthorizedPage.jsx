import {
  Shield,
  AlertTriangle,
  ArrowLeft,
  LogIn,
  HelpCircle,
} from 'lucide-react';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-12">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-12 w-12 text-red-600 dark:text-red-400" />
                </div>
                <div className="absolute -right-1 -top-1 bg-red-600 dark:bg-red-500 rounded-full p-1">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
                Access Denied
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                You don't have permission to access this page or resource.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} EmailShield. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
