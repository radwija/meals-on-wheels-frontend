import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Layout from "../../components/Layout";
import ForbiddenPage from "../ForbiddenPage";
import { getAdminUserAPI, getAdminUserActiveAPI } from '../../api/admin-api';
import { user_type } from "../../context/context-type";
import { useAuthUser } from "react-auth-kit";
import { getProfile } from '../../api/profile-api';
import { useNavigate } from 'react-router-dom';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const auth = useAuthUser();
  const isAdmin = auth()?.role?.[0] === "ROLE_ADMIN";
  const token = auth()?.token;
  const [profile, setProfile] = useState({});
  const role = auth()?.role[0];
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const fetchUsers = async () => {
    try {
      const data = await getAdminUserAPI(token);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchData = async () => {
    if (!auth()) {
      navigate("/login");
    }
    const userEmail = auth()?.email;
    const res = await getProfile(userEmail, role);
    setProfile(res);
    // Rest of your code here
  };

  const handleActive = (id) => {
    getAdminUserActiveAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
    fetchUsers();
  }, [token]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSelectdriver = (userId, selectedDriver) => {
    // Handle the selected driver for the member
    console.log(`User ${userId} selected ${selectedDriver} as their driver.`);
  };
  // if user not admin forbid access
  if (!isAdmin) {
    return <ForbiddenPage />;
  }

  return (
    <Layout>
      <div className="flex min-h-screen mr-5">
        <Sidebar />
        <div className="flex-1 p-4">
          {/* Search bar */}
          <div className="mb-4 flex justify-end">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a user"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-64 py-2 px-4 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a7 7 0 100 14A7 7 0 009 2zm0 12a5 5 0 100-10 5 5 0 000 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-10 mt-10 text-center">Users Management</h1>

          <h2 className="text-2xl font-bold mb-4">Users</h2>
          {/* Members table */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b font-medium">No.</th>
                <th className="py-2 px-4 border-b font-medium">Name</th>
                <th className="py-2 px-4 border-b font-medium">Address</th>
                <th className="py-2 px-4 border-b font-medium">Email</th>
                <th className="py-2 px-4 border-b font-medium">Gender</th>
                <th className="py-2 px-4 border-b font-medium">Roles</th>
                <th className="py-2 px-4 border-b font-medium">Qualification</th>
                <th className="py-2 px-4 border-b font-medium">Image</th>
                <th className="py-2 px-4 border-b font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* Data rows */}
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.address}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.gender}</td>
                  <td className="py-2 px-4 border-b">{user.role}</td>
                  <td className="py-2 px-4 border-b text-green-500">{user.qualification}</td>
                  <td className="py-2 px-4 border-b">
                    <img src={user.profilePicture} alt=" User Profile Picture" className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="py-2 px-4 border-b">
                    {/* Action dropdown */}
                    <div className="relative inline-block text-left">
                      <select
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        onChange={(event) => handleSelectdriver(user.id, event.target.value)}
                      >
                        <option value="">Actions</option>
                        <option value="Edit">Edit</option>
                        <option value="Delete">Delete</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Members;
