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
  faChevronDown
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
    <div className={`flex ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      
      {/* Sidebar */}
      <div
        className={`w-64 ${isSidebarOpen ? 'block' : 'hidden'
          } md:block fixed top-0 bottom-0 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } min-h-screen pt-[65px]`}
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
              <div
                className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
                onClick={toggleUsersDropdown}
              >
                <FontAwesomeIcon icon={faUsers} className="mr-3" />
                Users
                <FontAwesomeIcon
                  icon={isUsersDropdownOpen ? faChevronUp : faChevronDown}
                  className={`ml-2 text-xs ${isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}
                />
              </div>
              {isUsersDropdownOpen && (
                <ul className="pl-6 py-2">
                  <li>
                    <Link
                      to="/users/partners"
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
                  <li>
                    <Link
                      to="/users/drivers"
                      className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}
                    >
                      <FontAwesomeIcon
                        icon={faTruck}
                        className="mr-2 text-sm"
                      />
                      Drivers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/users/volunteers"
                      className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}
                    >
                      <FontAwesomeIcon
                        icon={faUserFriends}
                        className="mr-2 text-sm"
                      />
                      Volunteers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/users/members"
                      className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}
                    >
                      <FontAwesomeIcon
                        icon={faIdCardAlt}
                        className="mr-2 text-sm"
                      />
                      Members
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="px-6 py-3">
              <Link
                to="/meal-order-tracker"
                className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
              >
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
                Meal Order Tracker
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link
                to="/meal-packages"
                className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
              >
                <FontAwesomeIcon icon={faBowlFood} className="mr-3" />
                Meal Packages
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
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Content */}
      </div>

      {/* Sidebar toggle button */}
      <div className="md:hidden">
        <button
          className={`text-white focus:outline-none ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
