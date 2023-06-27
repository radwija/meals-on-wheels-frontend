import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item">
          <a href="/dashboard">Dashboard</a>
        </li>
        <li className="menu-item">
          <a href="/users">Users</a>
          <ul className="submenu">
            <li>
              <a href="/users/partners">Partners</a>
            </li>
            <li>
              <a href="/users/drivers">Drivers</a>
            </li>
            <li>
              <a href="/users/volunteers">Volunteers</a>
            </li>
            <li>
              <a href="/users/members">Members</a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="/meal-order-tracker">Meal Order Tracker</a>
        </li>
        <li className="menu-item">
          <a href="/meal-packages">Meal Packages</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
