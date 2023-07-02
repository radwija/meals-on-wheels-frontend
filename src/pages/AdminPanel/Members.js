import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Layout from '../../components/Layout';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectRider = (memberId, selectedRider) => {
    // Handle the selected rider for the member
    console.log(`Member ${memberId} selected ${selectedRider} as their rider.`);
  };

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
                placeholder="Search for a member"
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
          <h1 className="text-3xl font-bold mb-10 mt-10 text-center">Members</h1>

          <h2 className="text-2xl font-bold mb-4">Members</h2>
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
                <th className="py-2 px-4 border-b font-medium">Status</th>
                <th className="py-2 px-4 border-b font-medium">Image</th>
                <th className="py-2 px-4 border-b font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* Data rows */}
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">123 Main St</td>
                <td className="py-2 px-4 border-b">john.doe@example.com</td>
                <td className="py-2 px-4 border-b">Male</td>
                <td className="py-2 px-4 border-b">Member</td>
                <td className="py-2 px-4 border-b text-green-500">Approved</td>
                <td className="py-2 px-4 border-b">
                  <img src="https://example.com/avatar.jpg" alt="Member Avatar" className="w-10 h-10 rounded-full" />
                </td>
                <td className="py-2 px-4 border-b">
                  {/* Action dropdown */}
                  <div className="relative inline-block text-left">
                    <select
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      onChange={(event) => handleSelectRider(1, event.target.value)}
                    >
                      <option value="">Actions</option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </div>
                </td>
              </tr>
              {/* Add more rows for each member */}
              <tr>
                <td className="py-2 px-4 border-b">2</td>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">456 Oak St</td>
                <td className="py-2 px-4 border-b">jane.smith@example.com</td>
                <td className="py-2 px-4 border-b">Female</td>
                <td className="py-2 px-4 border-b">Admin</td>
                <td className="py-2 px-4 border-b text-red-500">Pending</td>
                <td className="py-2 px-4 border-b">
                  <img src="https://example.com/avatar.jpg" alt="Member Avatar" className="w-10 h-10 rounded-full" />
                </td>
                <td className="py-2 px-4 border-b">
                  {/* Action dropdown */}
                  <div className="relative inline-block text-left">
                    <select
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      onChange={(event) => handleSelectRider(2, event.target.value)}
                    >
                      <option value="">Actions</option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">3</td>
                <td className="py-2 px-4 border-b">Matt Smith</td>
                <td className="py-2 px-4 border-b">456 Oak St</td>
                <td className="py-2 px-4 border-b">matt.sm@gmail.com</td>
                <td className="py-2 px-4 border-b">Male</td>
                <td className="py-2 px-4 border-b">Member</td>
                <td className="py-2 px-4 border-b text-green-500">Approved</td>
                <td className="py-2 px-4 border-b">
                  <img src="https://example.com/avatar.jpg" alt="Member Avatar" className="w-10 h-10 rounded-full" />
                </td>
                <td className="py-2 px-4 border-b">
                  {/* Action dropdown */}
                  <div className="relative inline-block text-left">
                    <select
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      onChange={(event) => handleSelectRider(2, event.target.value)}
                    >
                      <option value="">Actions</option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Members;
