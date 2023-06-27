import React from 'react';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="main-content">
        {/* main content of the dashboard */}
      </div>
    </div>
  );
};

export default AdminDashboard;
