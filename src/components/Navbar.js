import React, { useEffect, useState } from "react";

import mow_navbar_logo from "../assets/mow_navbar_logo.png"
import { Link, useLocation } from 'react-router-dom'
import { useSignOut, useAuthUser } from 'react-auth-kit'
import { getProfile } from "../api/profile-api";
import { useNavigate } from "react-router";
import { Collapse } from 'flowbite';

export const Navbar = () => {
    const auth = useAuthUser();
    const role = auth()?.role[0];
    const roleName = role?.substring(5).toLowerCase();
    const signOut = useSignOut();
    const navigate = useNavigate();

    const location = useLocation();

    const [profile, setProfile] = useState({});
    const handleSignOut = () => {
        signOut();
        navigate("/login");
    }
    const fetchData = async () => {
        if (!auth()) {
            // User is not authenticated and cookies are expired
        }
        const userEmail = auth()?.email;
        const res = await getProfile(userEmail, role);
        setProfile(res);
        // Rest of your code here
    };
    useEffect(() => {
        fetchData();
    }, []);

    const options = {
        onCollapse: () => {
            console.log('element has been collapsed')
        },
        onExpand: () => {
            console.log('element has been expanded')
        },
        onToggle: () => {
            console.log('element has been toggled')
        }
    };

    // // Navbar Toggle
    // const $targetEl = document.getElementById('mobile-menu-2');
    // const $triggerEl = document.getElementById('triggerEl');

    // const collapseNavbar = new Collapse($targetEl, $triggerEl, options);

    // // show the target element
    // collapseNavbar.expand();

    // // hide the target element
    // collapseNavbar.collapse();

    // // toggle the visibility of the target element
    // collapseNavbar.toggle();


    // // Profile Toggle
    // const $profileTarget = document.getElementById('user-dropdown');
    // const $profileTrigger = document.getElementById('user-menu-button');

    // const collapseProfile = new Collapse($profileTarget, $profileTrigger, options);

    // // show the target element
    // collapseProfile.expand();

    // // hide the target element
    // collapseProfile.collapse();

    // // toggle the visibility of the target element
    // collapseProfile.toggle();




    return (

        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </Link>
                <div className="flex items-center md:order-2">
                    {
                        !auth() ?
                            <div>
                                <Link className="text-white bg-accent-dark hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to={"/login"}>Login</Link>
                                <Link className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-accent focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" to={"/registration"}>Register</Link>
                            </div>
                            :
                            <button id="user-menu-button" type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <div className="w-8 h-8">
                                    {profile?.picture ? (
                                        <img
                                            src={`data:image/jpeg;base64,${profile?.picture}`}
                                            alt="pfp"
                                            className="w-8 h-8 object-cover object-center border-1 border-white rounded-full"
                                        />
                                    ) : (
                                        <div className="w-8 h-8 border-4 flex justify-center items-center bg-white rounded-full">
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
                    }
                    {/* <!-- Dropdown menu --> */}
                    <div id="user-dropdown" className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" >
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <Link to={"#"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</Link>
                            </li>
                            <li>
                                <Link onClick={() => handleSignOut()} className="block mr-0 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                    <button id="triggerEl" data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div id="mobile-menu-2" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to={"#"} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to={"#"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>
                        <li>
                            <Link to={"#"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                        </li>
                        <li>
                            <Link to={"#"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
                        </li>
                        <li>
                            <Link to={"#"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
