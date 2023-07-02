import React from 'react';
import Sidebar from './Sidebar';

const Members = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 ml-64">
        <h2 className="text-2xl font-bold mb-4">Members</h2>
        {/* content for the members page */}
      </div>
    </div>
  );
};

export default Members;
