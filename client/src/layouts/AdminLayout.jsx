import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isAdmin={true} />

      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
