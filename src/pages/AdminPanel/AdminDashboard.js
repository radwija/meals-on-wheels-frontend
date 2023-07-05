import { useContext, useEffect, useState } from "react";
import React from "react";
import { FaUsers, FaCar, FaHandsHelping, FaHandshake } from 'react-icons/fa';
import { getMenu } from "../../api/main-api";
import { 
  addMenu, 
  getAdminUserCountAPI, 
  getPartnersAPI, 
  getDriversAPI, 
  postAdminOrderDeliverAPI, 
  postAdminOrderPrepareAPI, 
  getAdminUserAPI, 
  assignVolunteerAPI,
  getAdminUserActiveAPI,
  getAdminOrderPendingAPI,
  getAdminOrderReadyToDeliverAPI,
  getTotalVolunteerCount,
  getTotalDriverCount,
  getTotalPartnerCount
} from "../../api/admin-api";
import redCircle from "../../assets/images/red-circle.svg";
import Layout from "../../components/Layout";
import Sidebar from "./Sidebar";
import { menu_type, order_type, user_count, user_type } from "../../context/context-type";
import { useAuthUser } from "react-auth-kit";
import { getProfile } from '../../api/profile-api';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const auth = useAuthUser();
  const token = auth()?.token;
  const [profile, setProfile] = useState({});
  const role = auth()?.role[0];
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [orderList, setOrderList] = useState([order_type]);
  const [deliverList, setDeliverList] = useState([order_type]);
  const [users, setUsers] = useState([user_type]);
  const [volunteers, setVolunteers] = useState([user_type]);
  const [msg, setMsg] = useState("");
  const [drivers, setDriver] = useState([user_type]);
  const [partners, setPartner] = useState([user_type]);
  const [userCount, setUserCount] = useState(user_count);
  const [menu, setMenu] = useState([menu_type]);
  const [packageName, setPackageName] = useState("");
  const [mainCourse, setMainCourse] = useState("");
  const [salad, setSalad] = useState("");
  const [soup, setSoup] = useState("");
  const [dessert, setDessert] = useState("");
  const [drink, setDrink] = useState("");
  const [frozen, setFrozen] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [totalVolunteer, setTotalVolunteer] = useState(null);
  const [totalPartner, setTotalPartner] = useState(null);
  const [totalDriver, setTotalDriver] = useState(null);

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
    getAdminUserAPI(token)
      .then((resp) => setUsers(resp.data))
      .catch((err) => console.log(err));
  }, [token]);

  useEffect(() => {
    // Make API call to get total volunteer count
    getTotalVolunteerCount()
      .then((response) => {
        // Set the total volunteer count in state
        setTotalVolunteer(response.data.count);
      })
      .catch((error) => {
        console.error('Error fetching total volunteer count:', error);
      });
  }, []);
  
  // Fetch total partner count
  useEffect(() => {
    // Make API call to get total partner count
    getTotalPartnerCount()
      .then((response) => {
        // Set the total partner count in state
        setTotalPartner(response.data.count);
      })
      .catch((error) => {
        console.error('Error fetching total partner count:', error);
      });
  }, []);
  
  // Fetch total driver count
  useEffect(() => {
    // Make API call to get total driver count
    getTotalDriverCount()
      .then((response) => {
        // Set the total driver count in state
        setTotalDriver(response.data.count);
      })
      .catch((error) => {
        console.error('Error fetching total driver count:', error);
      });
  }, []);
  

  const handleSubmit = async (event) => {
    setStatus(""); // Reset status
    const formData = new FormData();
    formData.append("packageName", packageName);
    formData.append("mainCourse", mainCourse);
    formData.append("salad", salad);
    formData.append("soup", soup);
    formData.append("dessert", dessert);
    formData.append("drink", drink);
    formData.append("frozen", frozen);
    formData.append("packageImage", image);
    addMenu(token, formData);
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handlePrepare(order, user) {
    postAdminOrderPrepareAPI(token, order, user)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  function handleDeliver(order, user) {
    postAdminOrderDeliverAPI(token, order, user)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  function handleActive(id) {
    getAdminUserActiveAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  function handleAssignRole(id, rolecode) {
    assignVolunteerAPI(token, id, rolecode)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    // Fetch order lists
    getAdminOrderPendingAPI(token)
      .then((resp) => setOrderList(resp.data.orders))
      .catch((err) => console.log(err));

    getAdminOrderReadyToDeliverAPI(token)
      .then((resp) => setDeliverList(resp.data.orders))
      .catch((err) => console.log(err));

    // Fetch user lists
    getAdminUserAPI(token)
      .then((resp) => setUsers(resp.data.users))
      .catch((err) => console.log(err));

    getAdminUserCountAPI(token)
      .then((resp) => setUserCount(resp.data.counts))
      .catch((err) => console.log(err));

    // Fetch volunteers and partners
    getDriversAPI(token)
      .then((resp) => setVolunteers(resp.data.users))
      .catch((err) => console.log(err));

    getPartnersAPI(token)
      .then((resp) => setPartner(resp.data.users))
      .catch((err) => console.log(err));

    // Fetch menu
    getMenu(token)
      .then((resp) => setMenu(resp.data.menu))
      .catch((err) => console.log(err));
  }, []);



  return (
    <Layout>
      <div className="flex min-h-screen mr-10">
        <Sidebar />
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-20 mt-20 text-center">Admin Dashboard</h1>
          <div className="grid grid-cols-4 gap-4 mb-2">
            {/* Members Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-blue-700 font-bold mb-4 flex items-center">
                <FaUsers className="mr-2" /> Users
              </h3>
              <p className="text-3xl font-bold">{userCount.totalUser}</p>
            </div>
            {/* Volunteers Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-blue-700 font-bold mb-4 flex items-center">
                <FaHandsHelping className="mr-2" /> Volunteers
              </h3>
              <p className="text-3xl font-bold">{userCount.totalVolunteer}</p>
            </div>
            {/* Partners Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-blue-700 font-bold mb-4 flex items-center">
                <FaHandshake className="mr-2" /> Partners
              </h3>
              <p className="text-3xl font-bold">{userCount.totalPartner}</p>
            </div>
            {/* Drivers Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-blue-700 font-bold mb-4 flex items-center">
                <FaCar className="mr-2" /> Drivers
              </h3>
              <p className="text-3xl font-bold">{userCount.totalDriver}</p>
            </div>
          </div>
        </div>
        </div>

      <div className="md:flex ml-8 mt-2">
      {/* Assign Partner Task */}
      <div className="md:w-9/12 mr-4">
        <div className="pb-5">
          <h4 className="font-bold text-2xl">Assign Partner Task</h4>
          <div className="card bg-gray-100 bg-opacity-25">
            <div className="container">
              <div className="task-header-div">
                <table className="w-full table-auto text-white text-center driver my-3 task-header">
                  <thead className="bg-cyan-950">
                    <tr>
                      <th className="px-4 py-2 border-b font-normal">No</th>
                      <th className="px-4 py-2 border-b font-normal">Meals Request List</th>
                      <th className="px-4 py-2 border-b font-normal">Status</th>
                      <th className="px-4 py-2 border-b font-normal">Assigned Partner</th>
                      <th className="px-4 py-2 border-b font-normal">Select Partner</th>
                    </tr>
                  </thead>
                  <tbody className="text-black mt-5 bg-white">
                    {orderList.map((order, index) => (
                      <tr key={order.id}>
                        <td className="px-4 py-2 border-b">{index + 1}</td>
                        <td className="px-4 py-2 border-b">
                          {order.mealPackage.packageName}
                        </td>
                        <td className="px-4 py-2 border-b">
                          <div className="status flex justify-center">
                            <img src={redCircle} alt="" className="status-icon" />
                            <span className="font-bold ms-3">
                              {order.orderStatus}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-2 border-b">
                          {order.preparedBy?.name}
                        </td>
                        <td className="px-4 py-2 border-b">
                          <div className="relative inline-block text-center">
                            <div>
                              <button
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                id="dropdown-menu-button"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-haspopup="true"
                                aria-expanded={isOpen}
                              >
                                Select
                              </button>
                            </div>
                            {isOpen && (
                              <div
                                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="dropdown-menu-button"
                              >
                                {partners.map((partners) => (
                                  <a
                                    href="#/action1"
                                    key={partners.id}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  // onClick={() => handlePrepare(order.id, partners.id)}
                                  >
                                    {partners.name} {partners.status}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="task-tbl-div">
                <table className="w-full table-auto text-white text-center driver my-3 task-tbl">
                  <tbody className="text-white">
                    {/* Add table rows here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Card Meal Package List */}
        <div className="md:w-3/12 mr-2">
          <h4 className="text-center text-2xl font-bold">Meal Package List</h4>
          <div className="bg-white shadow-md rounded-md p-4 mt-2">
            <table className="w-full table-auto text-gray-800 text-center">
              <thead className="bg-cyan-950">
                <tr>
                  <th className="px-4 py-2 text-white">Meal</th>
                </tr>
              </thead>
              {menu.slice(0, 6).map((data) =>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b">{data.packageName}</td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>

      <div className="md:flex ml-8 mt-4">
        {/* Assign driver Task */}
        <div className="md:w-9/12 mr-4">
          <div className="pb-5">
            <h4 className="font-bold text-2xl">Assign Driver Task</h4>
            <div className="card bg-gray-100 bg-opacity-25">
              <div className="container">
                <div className="task-header-div">
                  <table className="w-full table-auto text-white text-center driver my-3 task-header">
                    <thead className="bg-cyan-950">
                      <tr>
                        <th className="px-4 py-2 border-b font-normal">No</th>
                        <th className="px-4 py-2 border-b font-normal">Meals Request List</th>
                        <th className="px-4 py-2 border-b font-normal">Status</th>
                        <th className="px-4 py-2 border-b font-normal">Assigned Driver</th>
                        <th className="px-4 py-2 border-b font-normal">Select Driver</th>
                      </tr>
                    </thead>
                    <tbody className="text-black mt-5 bg-white">
                      {deliverList.map((order, index) => (
                        <tr key={order.id}>
                          <td className="px-4 py-2 border-b">{index + 1}</td>
                          <td className="px-4 py-2 border-b">
                            {order.mealPackage.packageName}
                          </td>
                          <td className="px-4 py-2 border-b">
                            <div className="status flex justify-center">
                              <img src={redCircle} alt="" className="status-icon" />
                              <span className="font-bold ms-3">{order.orderStatus}</span>
                            </div>
                          </td>
                          <td className="px-4 py-2 border-b">
                            {order.deliveredBy?.name}
                          </td>
                          <td className="px-4 py-2 border-b">
                            <div className="relative inline-block text-center">
                              <div>
                                <button
                                  type="button"
                                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  id="dropdown-menu-button"
                                  onClick={() => setIsOpen(!isOpen)}
                                  aria-haspopup="true"
                                  aria-expanded={isOpen}
                                >
                                  Select
                                </button>
                              </div>
                              {isOpen && (
                                <div
                                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                                  role="menu"
                                  aria-orientation="vertical"
                                  aria-labelledby="dropdown-menu-button"
                                >
                                  {drivers.map((drivers) => (
                                    <a
                                      href="#/action1"
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    // onClick={() => handleDeliver(order.id, drivers.id)}
                                    >
                                      {drivers.name} {drivers.status}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Avability */}
        <div className="md:w-3/12 mr-2">
          <div className="pb-5">
            <h4 className="text-center text-2xl font-bold">
              Driver Availability
            </h4>
            <table className="w-full table-auto text-white text-center driver mt-3">
              <thead className="bg-cyan-950">
                <tr>
                  <th className="px-4 py-2 border-b font-normal">No</th>
                  <th className="px-4 py-2 border-b font-normal">Name</th>
                  <th className="px-4 py-2 border-b font-normal">Status</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {drivers.slice(0, 6).map((drivers, index) => (
                  <tr key={drivers.id}>
                    <td className="text-black border-b">{index + 1}</td>
                    <td className="text-black border-b">{drivers.name}</td>
                    <td className="text-black border-b">{drivers.status}</td>
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

export default AdminDashboard;

