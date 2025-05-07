import { createBrowserRouter } from 'react-router';
import App from '../App';
import DashboardLayout from '../layouts/DashboardLayout';
import Inbox from '../pages/Inbox';
import ScanResults from '../components/ScanedResults';
import DashboardStats from '../pages/DashboardStats';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardStats },
      { path: 'inbox', Component: Inbox },
      { path: 'scan-results', Component: ScanResults },
    ],
  },
]);
