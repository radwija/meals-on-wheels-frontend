import React from 'react';
import Sidebar from './Sidebar';

const MealPackages = () => {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex-1 p-4 ml-64">
      <h2 className="text-2xl font-bold mb-4">Available Meal Packages</h2>
      {/* content for the menu page */}
    </div>
  </div>
  );
};

export default MealPackages;
