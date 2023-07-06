import React, { useEffect, useState } from "react";

import mow_navbar_logo from "../assets/mow_navbar_logo.png";
import { Link, useLocation } from "react-router-dom";
import { useSignOut, useAuthUser } from "react-auth-kit";
import { getProfile } from "../api/profile-api";
import { useNavigate } from "react-router";
import { Collapse } from "flowbite";

export const Navbar = ({ isProfileUpdated }) => {
  const auth = useAuthUser();
  const role = auth()?.role[0];
  const roleName = role?.substring(5).toLowerCase();
  const signOut = useSignOut();
  const navigate = useNavigate();
  const userEmail = auth()?.email;
  const location = useLocation();
  const [isProfileExpanded, setProfileExpanded] = React.useState(false);
  const [isBurgerExpanded, setBurgerExpanded] = React.useState(false);

  const handleBurgerExpand = () => {
    if (isProfileExpanded === true) {
      setProfileExpanded(false);
    }
    setBurgerExpanded(!isBurgerExpanded);
  };

  const handleProfileExpand = () => {
    if (isBurgerExpanded === true) {
      setBurgerExpanded(false);
    }
    setProfileExpanded(!isProfileExpanded);
  };

  const [profile, setProfile] = useState({});
  const handleSignOut = () => {
    signOut();
    window.location.reload(false);
    navigate("/login");
  };
  const fetchData = async () => {
    if (!auth()) {
      // User is not authenticated and cookies are expired
    }
    try {
      const res = await getProfile(userEmail, role);
      setProfile(res);
    } catch (error) {
      console.log(error);
    }

    // Rest of your code here
  };

  const dashboardRolePath = () => {
    if (role === "ROLE_MEMBER") {
      return "/member";
    } else if (role === "ROLE_CAREGIVER") {
      return "/caregiver";
    } else if (role === "ROLE_DRIVER") {
      return "/driver";
    }
    // else if (role === 'ROLE_VOLUNTEER') {
    //     return '/volunteer'
    // }
    else if (role === "ROLE_PARTNER") {
      return "/partner";
    } else if (role === "ROLE_ADMIN") {
      return "/admin";
    }
  };
  useEffect(() => {
    fetchData();
    // Profile Toggle
  }, [isProfileUpdated]);

  return (
    <nav className="fixed mx-auto w-full top-0 z-20 bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src={mow_navbar_logo}
            className="h-20 mr-3"
            alt="Meals On Wheels"
          />
        </Link>
        <div className="flex items-center lg:order-2">
          {!auth() ? (
            <div>
              <Link
                className="text-white bg-accent-dark hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                to={"/login"}
              >
                Login
              </Link>
              <Link
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-accent focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                to={"/registration"}
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="lg:flex  items-center">
              <span className="hidden lg:flex sm:hidden capitalize mr-3">
                {roleName}
              </span>
              <button
                onClick={() => handleProfileExpand()}
                id="user-menu-button"
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full lg:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <div className="w-12 h-12">
                  {profile?.picture ? (
                    <img
                      src={`data:image/jpeg;base64,${profile?.picture}`}
                      alt="pfp"
                      className="w-12 h-12 object-cover object-center border-1 border-white rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 border-4 flex justify-center items-center bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" /> */}
              </button>
            </div>
          )}
          {/* <!-- Dropdown menu --> */}
          {auth() && isProfileExpanded ? (
            <div
              id="user-dropdown"
              className="z-50 absolute right-12 top-20 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {profile?.name}
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  {userEmail}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  {
                    role !== "ROLE_VOLUNTEER" ? <Link
                      to={dashboardRolePath()}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </Link> : <></>
                  }

                </li>
                <li>
                  <Link
                    to={"/profile"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
                {role === "ROLE_MEMBER" ? (
                  <>
                    <li>
                      <Link
                        to={"/feedback"}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Feedback
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/order-history"}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Order History
                      </Link>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                <li>
                  <button
                    onClick={() => handleSignOut()}
                    className="block mr-0 text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
          <button
            onClick={() => handleBurgerExpand()}
            id="triggerEl"
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu-2"
          className={`items-center justify-between ${isBurgerExpanded === true ? "" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded lg:hover:bg-transparent hover:text-accent lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 
                                ${location.pathname === "/" ? "text-navActive" : ""
                  }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/donation"}
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded lg:hover:bg-transparent hover:text-accent lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 
                                ${location.pathname === "/donation"
                    ? "text-navActive"
                    : ""
                  }`}
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                to={"/partnership"}
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded lg:hover:bg-transparent hover:text-accent lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 
                                ${location.pathname === "/partnership"
                    ? "text-navActive"
                    : ""
                  }`}
              >
                Partnership
              </Link>
            </li>
            <li>
              <Link
                to={"/about-us"}
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded lg:hover:bg-transparent hover:text-accent lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 
                                ${location.pathname === "/about-us"
                    ? "text-navActive"
                    : ""
                  }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={"/contact-us"}
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded lg:hover:bg-transparent hover:text-accent lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 
                                ${location.pathname === "/contact-us"
                    ? "text-navActive"
                    : ""
                  }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
