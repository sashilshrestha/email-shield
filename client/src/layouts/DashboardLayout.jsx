import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
