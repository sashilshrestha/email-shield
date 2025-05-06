import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <>
      <div className="flex">
        <div className='fixed top-0 left-0 z-100'>
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col pl-64">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
