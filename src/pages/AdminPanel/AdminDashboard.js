import React, { useState, useEffect } from 'react';
import { FaUsers, FaHandsHelping, FaHandshake, FaCar } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Layout from '../../components/Layout';

const AdminDashboard = () => {
  const [membersCount, setMembersCount] = useState(0);
  const [volunteersCount, setVolunteersCount] = useState(0);
  const [partnersCount, setPartnersCount] = useState(0);
  const [driversCount, setDriversCount] = useState(0);

  useEffect(() => {
    // Fetch the data from the database and update the state variables
    // Example code:
    // const fetchData = async () => {
    //   const members = await fetchMembersFromDatabase();
    //   const volunteers = await fetchVolunteersFromDatabase();
    //   const partners = await fetchPartnersFromDatabase();
    //   const drivers = await fetchDriversFromDatabase();
    //   setMembersCount(members.length);
    //   setVolunteersCount(volunteers.length);
    //   setPartnersCount(partners.length);
    //   setDriversCount(drivers.length);
    // };
    // fetchData();

    // Placeholder code to simulate the data fetching and updating the state
    setTimeout(() => {
      setMembersCount(10000);
      setVolunteersCount(5000);
      setPartnersCount(2500);
      setDriversCount(1000);
    }, 2000);
  }, []);

  return (
    <Layout>
      <div className="flex min-h-screen mr-10">
        <Sidebar />
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-20 mt-20 text-center">Admin Dashboard</h1>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {/* Members Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-blue-700 font-bold mb-4 flex items-center">
                <FaUsers className="mr-2" /> Members
              </h3>
              <p className="text-3xl font-bold">{membersCount}</p>
            </div>
            {/* Volunteers Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-blue-700 font-bold mb-4 flex items-center">
                <FaHandsHelping className="mr-2" /> Volunteers
              </h3>
              <p className="text-3xl font-bold">{volunteersCount}</p>
            </div>
            {/* Partners Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-blue-700 font-bold mb-4 flex items-center">
                <FaHandshake className="mr-2" /> Partners
              </h3>
              <p className="text-3xl font-bold">{partnersCount}</p>
            </div>
            {/* Drivers Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-blue-700 font-bold mb-4 flex items-center">
                <FaCar className="mr-2" /> Drivers
              </h3>
              <p className="text-3xl font-bold">{driversCount}</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 mt-20">Newcomers</h2>
          {/* Table list of newcomers */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b font-medium">No.</th>
                <th className="py-2 px-4 border-b font-medium">Name</th>
                <th className="py-2 px-4 border-b font-medium">Address</th>
                <th className="py-2 px-4 border-b font-medium">Email</th>
                <th className="py-2 px-4 border-b font-medium">Assign Role</th>
                {/* Add more columns if needed */}
              </tr>
            </thead>
            <tbody className="text-center">
              {/* Data rows */}
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">123 Main St</td>
                <td className="py-2 px-4 border-b">john.doe@example.com</td>
                <td className="py-2 px-4 border-b">
                  <select className="border rounded-lg py-1 px-2">
                    <option value="ROLE_MEMBER">Member</option>
                    <option value="ROLE_DRIVER">Driver</option>
                    <option value="ROLE_CAREGIVER">Caregiver</option>
                    <option value="ROLE_PARTNER">Partner</option>
                  </select>
                </td>
                {/* Add more cells for each data */}
              </tr>
              {/* Add more rows for each newcomer */}
            </tbody>
          </table>
          <h2 className="text-2xl font-bold mt-10 mb-4 mt-15">Meals Available</h2>
          {/* Table list of meals available */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b font-medium">Meal No.</th>
                <th className="py-2 px-4 border-b font-medium">Meal Name</th>
                {/* Add more columns if needed */}
              </tr>
            </thead>
            <tbody className="text-center">
              {/* Data rows */}
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">Meal Package 1</td>
                {/* Add more cells for each data */}
              </tr>
              {/* Add more rows for each meal */}
            </tbody>
          </table>
          <h2 className="text-2xl font-bold mt-10 mb-4 mt-15">Meal Order History</h2>
          {/* Table list of meal order history */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b font-medium">No.</th>
                <th className="py-2 px-4 border-b font-medium">Ordered By</th>
                <th className="py-2 px-4 border-b font-medium">Meal Package</th>
                <th className="py-2 px-4 border-b font-medium">Delivery Address</th>
                <th className="py-2 px-4 border-b font-medium">Order date</th>
                <th className="py-2 px-4 border-b font-medium">Prepared By</th>
                <th className="py-2 px-4 border-b font-medium">driver</th>
                <th className="py-2 px-4 border-b font-medium">Status</th>
                {/* Add more columns if needed */}
              </tr>
            </thead>
            <tbody className="text-center">
              {/* Data rows */}
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">Meal Package 1</td>
                <td className="py-2 px-4 border-b">Bali, Indonesia</td>
                <td className="py-2 px-4 border-b">01/07/2023</td>
                <td className="py-2 px-4 border-b">XYZ Catering</td>
                <td className="py-2 px-4 border-b">Jobb Smith</td>
                <td className="py-2 px-4 border-b text-green-600">Out for Delivery</td>
                {/* Add more cells for each data */}
              </tr>
              {/* Add more rows for each order */}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
