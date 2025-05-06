import { createBrowserRouter } from 'react-router';
import App from '../App';
import DashboardLayout from '../layouts/DashboardLayout';
import Inbox from '../pages/Inbox';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      { index: true, Component: App },
      { path: 'inbox', Component: Inbox },
    ],
  },
]);
