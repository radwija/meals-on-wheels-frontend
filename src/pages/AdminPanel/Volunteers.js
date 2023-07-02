import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Layout from '../../components/Layout';

const Volunteers = () => {
  const volunteers = [
    { name: 'John Doe', role: 'Driver' },
    { name: 'Jane Smith', role: '' },
    { name: 'Michael Johnson', role: 'Driver' },
    { name: 'Sarah Williams', role: 'Caregiver' },
  ];

  const [selectedRoles, setSelectedRoles] = useState({});

  const assignRole = (volunteerName, newRole) => {
    setSelectedRoles((prevRoles) => ({
      ...prevRoles,
      [volunteerName]: newRole,
    }));
  };

  const handleRoleChange = (volunteerName, event) => {
    const newRole = event.target.value;
    assignRole(volunteerName, newRole);
  };

  return (
    <Layout>
      <div className="flex min-h-screen mr-5">
        <Sidebar />
        <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-10 mt-10 text-center">Volunteers</h1>
          {/* content for the volunteers page */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b font-medium">Name</th>
                <th className="py-2 px-4 border-b font-medium">Role</th>
                <th className="py-2 px-4 border-b font-medium">Assign Role</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {volunteers.map((volunteer, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{volunteer.name}</td>
                  <td className="py-2 px-4 border-b">{volunteer.role}</td>
                  <td className="py-2 px-4 border-b">
                    <select
                      value={selectedRoles[volunteer.name] || volunteer.role}
                      className="bg-white border border-gray-300 py-1 px-2 rounded-md"
                      onChange={(event) => handleRoleChange(volunteer.name, event)}
                    >
                      <option value="Caregiver">Caregiver</option>
                      <option value="Driver">Driver</option>
                      <option value="Choose">Choose</option>
                    </select>
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

export default Volunteers;
