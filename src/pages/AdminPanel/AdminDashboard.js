import React from 'react';
import Sidebar from './Sidebar';


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 ml-64">
          <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
          {/* content for the dashboard page */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
