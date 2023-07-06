import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import Layout from "../../components/Layout";
import { FaSearch } from "react-icons/fa";
import { useAuthUser } from "react-auth-kit";
import ForbiddenPage from "../ForbiddenPage";
import { getProfile } from '../../api/profile-api';
import { getAdminPartnerAPI, getAdminPartnerActiveAPI } from '../../api/admin-api';
import { user_type } from "../../context/context-type";

const Partners = () => {
  const auth = useAuthUser();
  const token = auth()?.token;
  const [profile, setProfile] = useState({});
  const role = auth()?.role[0];
  const navigate = useNavigate();
  const isAdmin = auth()?.role?.[0] === "ROLE_ADMIN";
  const [partner, setPartner] = useState([user_type])
  const [inactivePartner, setInactivePartner] = useState([user_type])
  const [msg, setMsg] = useState("")

  function handleAccept(id) {
    getAdminPartnerActiveAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err))
  }

  const fetchData = async () => {
    if (!auth()) {
      // User is not authenticated and cookies are expired
      navigate("/login");
    }
    const userEmail = auth()?.email;
    const res = await getProfile(userEmail, role);
    setProfile(res);
    // Rest of your code here
  };

  useEffect(() => {
    fetchData()

    getAdminPartnerAPI(token)
      .then((resp) => {
        resp.data = resp.data
          .filter((item) => {
            return item.active === true
          })
          .map((item) => {
            setPartner(item)
            return item
          })
          setPartner(resp.data)
      })
      .catch((err) => console.log(err))

    getAdminPartnerAPI(token)
      .then((resp) => {
        resp.data = resp.data
          .filter((item) => {
            return item.active === false
          })
          .map((item) => {
            setInactivePartner(item)
            return item
          })
          setInactivePartner(resp.data)
      })
      .catch((err) => console.log(err))
  }, [token, msg])

  if (!isAdmin) {
    return <ForbiddenPage />;
  }
  
  return (
    <Layout>
    <div className="flex min-h-screen mr-5">
    <Sidebar />
    <div className="mx-auto max-w-5xl">
  <h1 className="text-center py-5 font-bold">Manage Partner</h1>
  <div className="mb-3">
      <h1>Partnership Request</h1>
  </div>
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="py-2 px-4">Company Name</th>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Address</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
  {inactivePartner.length > 0 ? (
    inactivePartner.map((data) => (
      <tr key={data.id} className="border-b">
        <td className="py-2 px-4">{data.name}</td>
        <td className="py-2 px-4">
          <img
            className="h-16 w-16 object-contain"
            src={`data:image/jpeg;base64,${data?.profilePicture}`}
            alt=""
          />
        </td>
        <td className="py-2 px-4">{data.address}</td>
        <td className="py-2 px-4">{data.email}</td>
        <td className="py-2 px-4">
          <button
            className="button font-bold"
            onClick={() => handleAccept(data.id)}
          >
            Accept Partnership
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="py-2 px-4">
        No partnership requests found.
      </td>
    </tr>
  )}
</tbody>
      </table>
    </div>
  </div>
  <div id="registered-partner" className="py-5">
  <h1> Registered Partner</h1> 
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="py-2 px-4">Company Name</th>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Address</th>
            <th className="py-2 px-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {partner.map((data) => (
            <tr key={data.id} className="border-b">
              <td className="py-2 px-4">{data.name}</td>
              <td className="py-2 px-4">
                <img
                  className="h-16 w-16 object-contain"
                  src={`data:image/jpeg;base64,${data?.profilePicture}`}
                  alt=""
                />
              </td>
              <td className="py-2 px-4">{data.address}</td>
              <td className="py-2 px-4">{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </Layout>
  );
};

export default Partners;
