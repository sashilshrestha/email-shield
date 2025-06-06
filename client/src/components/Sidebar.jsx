import {
  LogOut,
  Users,
  LayoutDashboard,
  Inbox,
  Shield,
  BadgeAlert,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useLoaderData } from 'react-router';

export default function Sidebar({ currentView, isOpen, setIsOpen, isAdmin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [userDetails, setUserDetails] = useState({ email: '', name: '' });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const { email, name } = JSON.parse(localStorage.getItem('emailShield'));

    setUserDetails({ email, name });

    // Initial check
    checkIsMobile();

    // Add event listener
    window.addEventListener('resize', checkIsMobile);

    // Clean up
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('emailShield');
    return navigate('/login');
  };

  const clientMenuItems = [
    {
      id: '',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
    },
    {
      id: 'inbox',
      label: 'Inbox',
      icon: <Inbox size={20} />,
    },
    // {
    //   id: 'settings',
    //   label: 'Settings',
    //   icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    // },
  ];

  const adminMenuItems = [
    {
      id: 'user-risk-scores',
      label: 'User Risk Scores',
      icon: <Users size={20} />,
    },
    {
      id: 'user-reports',
      label: 'User Reports',
      icon: <BadgeAlert size={20} />,
    },
    {
      id: 'security-policies',
      label: 'Security Policies',
      icon: <Shield size={20} />,
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-30 w-64 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
              }`
            : 'w-64'
        } bg-white  border-r border-gray-200  transition-transform duration-200 ease-in-out flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center h-16 px-6 border-b border-gray-200 ">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-lg font-bold">EmailShield</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {(isAdmin ? adminMenuItems : clientMenuItems).map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.id);
                if (isMobile) setIsOpen(false);
              }}
              className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-colors cursor-pointer ${
                location.pathname === `/${isAdmin ? 'admin/' : ''}${item.id}`
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100 '
              }`}
            >
              <div className="h-5 w-5 mr-2"> {item.icon}</div>

              {item.label}
            </button>
          ))}
        </nav>

        {/* User profile */}
        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <button className="flex items-center px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 ">
            <div className="w-8 h-8 rounded-full bg-gray-200  mr-3 flex items-center justify-center text-gray-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-left">
              <div className="font-medium">{userDetails?.name}</div>
              <div className="text-xs text-gray-500 truncate w-26">{userDetails?.email}</div>
            </div>
          </button>
          <button
            className="flex items-center text-sm -gray-700 hover:bg-gray-100  rounded-full h-9 p-2 w-9 justify-center cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut color="grey" size={16} />
          </button>
        </div>
      </div>

      {/* Mobile toggle button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 right-4 z-40 p-3 rounded-full bg-blue-600 text-white shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      )}
    </>
  );
}
