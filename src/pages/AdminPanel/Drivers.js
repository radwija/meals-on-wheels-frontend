import React from 'react';
import Sidebar from './Sidebar';

const Drivers = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 ml-64">
        <h2 className="text-2xl font-bold mb-4">Drivers</h2>
        {/* content for the drivers page */}
      </div>
    </div>
  );
};

export default Drivers;

// Repeat the same modifications for other page components (MealOrderTracker, MealPackages, Members, Partners, Users, Volunteers)
