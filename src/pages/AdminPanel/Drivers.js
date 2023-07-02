import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Layout from '../../components/Layout';

const Drivers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Sample data for demonstration
  const driversData = [
    { driverNo: 'Rider 1', name: 'Meal Package 1', status: 'Ready to Deliver' },
    { driverNo: 'Rider 2', name: 'Meal Package 2', status: 'Ready to Deliver' },
    { driverNo: 'Rider 3', name: 'Meal Package 3', status: 'Ready to Deliver' },
  ];

  const filterDrivers = (driver) => {
    return driver.driverNo.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredDrivers = driversData.filter(filterDrivers);

  // Generate data for Available Drivers table
  const availableDrivers = [
    { driverNo: '1', name: 'Jobb Vans', status: 'Available' },
    { driverNo: '2', name: 'Millie Bobby', status: 'Available' },
    { driverNo: '3', name: 'Brix Brown', status: 'Available' },
  ];

  const handleSelectRider = (driverNo, rider) => {
    // Logic for selecting a rider for a specific driver
    console.log(`Selected rider ${rider} for driver ${driverNo}`);
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
                placeholder="Search for driver"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-64 py-2 px-4 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-10 mt-10 text-center">Drivers</h1>

          {/* Drivers table */}
          <h2 className="text-xl font-bold mb-2">Drivers</h2>
          <table className="min-w-full bg-white border border-gray-300 mb-8">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b font-medium">No.</th>
                <th className="py-2 px-4 border-b font-medium">Ordered Meal Package</th>
                <th className="py-2 px-4 border-b font-medium">Order Status</th>
                <th className="py-2 px-4 border-b font-medium">Assigned Rider</th>
                <th className="py-2 px-4 border-b font-medium">Choose Rider</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredDrivers.map((driver, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{driver.driverNo}</td>
                  <td className="py-2 px-4 border-b">{driver.name}</td>
                  <td className={`py-2 px-4 border-b ${driver.status === 'Ready to Deliver' ? 'text-green-500' : 'text-red-500'}`}>{driver.status}</td>
                  <td className="py-2 px-4 border-b">Assigned Rider</td>
                  <td className="py-2 px-4 border-b">
                    <select
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      onChange={(event) => handleSelectRider(driver.driverNo, event.target.value)}
                    >
                      <option value="">Select Rider</option>
                      <option value="Rider 1">Rider 1</option>
                      <option value="Rider 2">Rider 2</option>
                      <option value="Rider 3">Rider 3</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Available drivers table */}
          <h3 className="text-xl font-bold mb-2">Available Drivers</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b font-medium">No.</th>
                <th className="py-2 px-4 border-b font-medium">Driver Name</th>
                <th className="py-2 px-4 border-b font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {availableDrivers.map((driver, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{driver.driverNo}</td>
                  <td className="py-2 px-4 border-b">{driver.name}</td>
                  <td className={`py-2 px-4 border-b ${driver.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>{driver.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Drivers;
