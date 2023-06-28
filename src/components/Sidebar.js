import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="bg-gray-800 w-64">
        <ul className="py-4">
          <li className="px-6 py-3">
            <a href="/dashboard" className="text-white hover:text-gray-300">
              Dashboard
            </a>
          </li>
          <li className="px-6 py-3">
            <a href="/users" className="text-white hover:text-gray-300">
              Users
            </a>
            <ul className="pl-6 py-2">
              <li>
                <a href="/users/partners" className="text-white hover:text-gray-300">
                  Partners
                </a>
              </li>
              <li>
                <a href="/users/drivers" className="text-white hover:text-gray-300">
                  Drivers
                </a>
              </li>
              <li>
                <a href="/users/volunteers" className="text-white hover:text-gray-300">
                  Volunteers
                </a>
              </li>
              <li>
                <a href="/users/members" className="text-white hover:text-gray-300">
                  Members
                </a>
              </li>
            </ul>
          </li>
          <li className="px-6 py-3">
            <a href="/meal-order-tracker" className="text-white hover:text-gray-300">
              Meal Order Tracker
            </a>
          </li>
          <li className="px-6 py-3">
            <a href="/meal-packages" className="text-white hover:text-gray-300">
              Meal Packages
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
