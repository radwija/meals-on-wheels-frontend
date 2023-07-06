import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDashboard,
  faUsers,
  faUserFriends,
  faTruck,
  faIdCardAlt,
  faTachometerAlt,
  faBowlFood,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const [isUsersDropdownOpen, setUsersDropdownOpen] = useState(false);

  const toggleUsersDropdown = () => {
    setUsersDropdownOpen(!isUsersDropdownOpen);
  };

  return (
    <div className={`flex z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Sidebar */}
      <div
        className={`w-64 fixed top-0 left-0 bottom-0 transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:block ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } `}
      >
        <div className="py-4">
          <ul>
            <li className="px-6 py-3">
              <Link
                to="/admin"
                className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
              >
                <FontAwesomeIcon icon={faDashboard} className="mr-3" />
                Dashboard
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link
                to="/admin/user"
                className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
              >
                <FontAwesomeIcon icon={faUsers} className="mr-3" />
                Users
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link
                to="/admin/partner"
                className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
              >
                <FontAwesomeIcon
                  icon={faUserFriends}
                  className="mr-2 text-sm"
                />
                Partners
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link
                to="/order/all"
                className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
              >
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
                Meal Order History
              </Link>
            </li>
          </ul>
        </div>
        {/* Dark mode toggle button */}
        <div className="absolute bottom-0 left-0 right-0 m-4 flex items-center">
          <button
            className={`text-dark focus:outline-none ${isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            onClick={toggleDarkMode}
          >
            <span className="text-sm mr-2">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
            <span
              className={`${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                } w-14 h-8 flex items-center rounded-full transition-colors duration-300`}
            >
              <span
                className={`${isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-6 h-6 bg-white rounded-full transform transition-transform duration-300`}
              ></span>
            </span>
          </button>
        </div>
        {/* Close button */}
        <button
          className="fixed top-4 right-4 text-white p-2 bg-red-500 rounded-full z-10"
          onClick={toggleSidebar}
        >
          &times;
        </button>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-64' : 'translate-x-0'
          }`}
      >
        {/* Content */}
      </div>

      {/* Sidebar toggle button */}
      <div className="md:block bg-primary">
        <button
          className={`text-black focus:outline-none mt-1 ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          onClick={toggleSidebar}
        >
          <svg
            className={`h-6 w-6 ${isSidebarOpen ? 'hidden' : 'block'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`h-6 w-6 ${isSidebarOpen ? 'block' : 'hidden'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
