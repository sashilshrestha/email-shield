import { createBrowserRouter } from 'react-router';
import App from '../App';
import DashboardLayout from '../layouts/DashboardLayout';
import Inbox from '../pages/Inbox';
import ScanResults from '../components/ScanedResults';
import DashboardStats from '../pages/DashboardStats';
import SettingsPage from '../pages/SettingsPage';
import ProtectedRoute from './ProtectedRoute';
import EmailDetailView from '../pages/EmailDetailView';
import LoginPage from '../pages/LoginPage';
import AdminLayout from '../layouts/AdminLayout';
import UserRiskScoresPage from '../pages/UserRiskScoresPage';
import SecurityPoliciesPage from '../pages/SecurityPoliciesPage';
import UserReportsPage from '../pages/UserReportsPage';

export const router = createBrowserRouter([
  { path: 'login', Component: LoginPage },
  { path: '/settings', Component: SettingsPage }, 
  {
    path: '',
    Component: ProtectedRoute,
    loader: async () => {
      return { allowedRole: 'user' };
    },
    children: [
      {
        path: '',
        Component: DashboardLayout,
        children: [
          { index: true, Component: DashboardStats },
          { path: 'inbox', Component: Inbox },
          { path: 'scan-results', Component: ScanResults },
          { path: 'email-details', Component: EmailDetailView },
          // { path: 'settings', Component: SettingsPage },
        ],
      },
    ],
  },
  {
    path: 'admin',
    Component: ProtectedRoute,
    loader: async () => {
      return { allowedRole: 'admin' };
    },
    children: [
      {
        path: '',
        Component: AdminLayout,
        children: [
          { path: 'user-risk-scores', Component: UserRiskScoresPage },
          { path: 'security-policies', Component: SecurityPoliciesPage },
          { path: 'user-reports', Component: UserReportsPage },
        ],
      },
      // { path: 'login', Component: LoginPage },
    ],
  },
]);
