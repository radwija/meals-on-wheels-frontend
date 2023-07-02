import React from 'react';
import Sidebar from './Sidebar';

const Partners = () => {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex-1 p-4 ml-64">
      <h2 className="text-2xl font-bold mb-4">Partners</h2>
      {/* content for the partners page */}
    </div>
  </div>
  );
};

export default Partners;
