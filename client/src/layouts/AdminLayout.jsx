import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet, useNavigate } from 'react-router';

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to /user-risk-score on mount
    navigate('/admin/user-risk-scores');
  }, [navigate]);

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
