import React from 'react';
import Sidebar from './Sidebar';

const MealOrderTracker = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 ml-64">
        <h2 className="text-2xl font-bold mb-4">Meal Order Tracker</h2>
        {/* content for the meal orders page */}
      </div>
    </div>
  );
};

export default MealOrderTracker;
