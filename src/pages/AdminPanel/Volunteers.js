import React from 'react';
import Sidebar from './Sidebar';

const Volunteers = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 ml-64">
        <h2 className="text-2xl font-bold mb-4">Volunteers</h2>
        {/* content for the volunteers page */}
      </div>
    </div>
  );
};

export default Volunteers;
