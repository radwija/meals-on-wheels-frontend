import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Layout from "../../components/Layout";
import { FaSearch } from "react-icons/fa";
import { useAuthUser } from "react-auth-kit";
import ForbiddenPage from "../ForbiddenPage";

const Partners = () => {
  const [partnersData, setPartnersData] = useState([]);
  const [partnershipRequestData, setPartnershipRequestData] = useState([]);
  const [registeredPartnersData, setRegisteredPartnersData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const auth = useAuthUser();
  const isAdmin = auth()?.role?.[0] === "ROLE_ADMIN";
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterPartners = (partner) => {
    return partner.partnerNo.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredPartners = partnersData.filter(filterPartners);

  // Simulating API/database call to fetch data
  useEffect(() => {
    // Fetch partners data
    // const fetchPartnersData = async () => {
    //   const response = await fetch('api/partners');
    //   const data = await response.json();
    //   setPartnersData(data);
    // };
    // fetchPartnersData();

    // Fetch partnership request data
    // const fetchPartnershipRequestData = async () => {
    //   const response = await fetch('api/partnershipRequests');
    //   const data = await response.json();
    //   setPartnershipRequestData(data);
    // };
    // fetchPartnershipRequestData();

    // Fetch registered partners data
    // const fetchRegisteredPartnersData = async () => {
    //   const response = await fetch('api/registeredPartners');
    //   const data = await response.json();
    //   setRegisteredPartnersData(data);
    // };
    // fetchRegisteredPartnersData();

    // Simulated data for demonstration
    setPartnersData([
      {
        partnerNo: "Partner 1",
        requestedMeal: "Meal Package 1",
        orderStatus: "Preparing",
        assignedPartner: "XYZ Catering",
        choosePartner: "Choose",
      },
      {
        partnerNo: "Partner 2",
        requestedMeal: "Meal Package 2",
        orderStatus: "Pending",
        assignedPartner: "ABC Catering",
        choosePartner: "Choose",
      },
    ]);

    setPartnershipRequestData([
      {
        companyName: "We Eats",
        image: "",
        address: "009, 4th St. Tenejero",
        action: "Accept",
      },
      {
        companyName: "PaBliss",
        image: "",
        address: "121, Milan St.",
        action: "Decline",
      },
    ]);

    setRegisteredPartnersData([
      {
        companyName: "ABC Catering",
        image: "",
        address: "364, 4th St. London",
        email: "abcfood@gmail.com",
      },
      {
        companyName: "XYZ Catering",
        image: "",
        address: "100, Milan St.",
        email: "xyzmeal@gmail.com",
      },
    ]);
  }, []);

  const handleAssignedPartnerChange = (index, value) => {
    setPartnersData((prevData) => {
      const newData = [...prevData];
      newData[index].assignedPartner = value;
      return newData;
    });
  };

  const handleChoosePartnerChange = (index, value) => {
    setPartnersData((prevData) => {
      const newData = [...prevData];
      newData[index].choosePartner = value;
      return newData;
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
          {/* Search bar */}
          <div className="mb-4 flex justify-end">
            <div className="relative">
              <input
                type="text"
                placeholder="Search partner by name or email"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-64 py-2 px-4 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-5 mt-10 text-center">
            Partners
          </h1>
          <h2 className="text-2xl font-bold mb-4">Partners</h2>
          <table className="min-w-full bg-white border border-gray-300 mb-8">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b font-medium">Partner No.</th>
                <th className="py-2 px-4 border-b font-medium">
                  Requested Meal
                </th>
                <th className="py-2 px-4 border-b font-medium">Order Status</th>
                <th className="py-2 px-4 border-b font-medium">
                  Assigned Partner
                </th>
                <th className="py-2 px-4 border-b font-medium">
                  Choose Partner
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {partnersData.map((partner, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{partner.partnerNo}</td>
                  <td className="py-2 px-4 border-b">
                    {partner.requestedMeal}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`inline-block px-3 py-1 rounded-full ${
                        partner.orderStatus === "Preparing"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {partner.orderStatus}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">
                    {partner.assignedPartner}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <select
                      value={partner.choosePartner}
                      onChange={(e) =>
                        handleChoosePartnerChange(index, e.target.value)
                      }
                      className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="ABC Catering">ABC Catering</option>
                      <option value="XYZ Catering">XYZ Catering</option>
                      <option value="Choose">Choose</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-2xl font-bold mb-4">Partnership Request</h2>
          <table className="min-w-full bg-white border border-gray-300 mb-8">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b font-medium">Company Name</th>
                <th className="py-2 px-4 border-b font-medium">Image</th>
                <th className="py-2 px-4 border-b font-medium">Address</th>
                <th className="py-2 px-4 border-b font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {partnershipRequestData.map((request, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{request.companyName}</td>
                  <td className="py-2 px-4 border-b">{request.image}</td>
                  <td className="py-2 px-4 border-b">{request.address}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`inline-block px-3 py-1 rounded-full ${
                        request.action === "Accept"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {request.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-2xl font-bold mb-4">Registered Partners</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b font-medium">Company Name</th>
                <th className="py-2 px-4 border-b font-medium">Image</th>
                <th className="py-2 px-4 border-b font-medium">Address</th>
                <th className="py-2 px-4 border-b font-medium">Email</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {registeredPartnersData.map((partner, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{partner.companyName}</td>
                  <td className="py-2 px-4 border-b">{partner.image}</td>
                  <td className="py-2 px-4 border-b">{partner.address}</td>
                  <td className="py-2 px-4 border-b">{partner.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
