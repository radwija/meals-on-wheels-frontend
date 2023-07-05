import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Layout from "../../components/Layout";
import axios from "axios";
import ForbiddenPage from "../ForbiddenPage";
import { useAuthUser } from "react-auth-kit";

const Volunteers = () => {
  const auth = useAuthUser();
  const isAdmin = auth()?.role?.[0] === "ROLE_ADMIN";

  const volunteers = [
    { id: 1, name: "John Doe", role: "Driver" },
    { id: 2, name: "Jane Smith", role: "" },
    { id: 3, name: "Michael Johnson", role: "Driver" },
    { id: 4, name: "Sarah Williams", role: "Caregiver" },
  ];

  const [selectedRoles, setSelectedRoles] = useState({});

  const assignRole = (volunteerId, newRole) => {
    setSelectedRoles((prevRoles) => ({
      ...prevRoles,
      [volunteerId]: newRole,
    }));
  };

  const handleRoleChange = (volunteerId, event) => {
    const newRole = event.target.value;
    assignRole(volunteerId, newRole);

    // Send the data to the backend endpoint
    axios
      .get(`/admin/customer/${volunteerId}/${newRole}`)
      .then((response) => {
        console.log(response.data); // Handle success
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
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
          <h1 className="text-3xl font-bold mb-10 mt-10 text-center">
            Volunteers
          </h1>
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
              {volunteers.map((volunteer) => (
                <tr key={volunteer.id}>
                  <td className="py-2 px-4 border-b">{volunteer.name}</td>
                  <td className="py-2 px-4 border-b">{volunteer.role}</td>
                  <td className="py-2 px-4 border-b">
                    <select
                      value={selectedRoles[volunteer.id] || volunteer.role}
                      className="bg-white border border-gray-300 py-1 px-2 rounded-md"
                      onChange={(event) =>
                        handleRoleChange(volunteer.id, event)
                      }
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
