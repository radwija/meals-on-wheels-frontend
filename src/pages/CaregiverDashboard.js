import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import redCircle from "../assets/images/red-circle.svg"
import { getAllMenu } from "../api/main-api";
import {
  getAdminOrderPendingAPI,
  getAdminOrderReadyToDeliverAPI,
  getAdminUserAPI,
  getAdminUserCountAPI,
  getPartnersAPI,
  getDriversAPI,
  postAdminOrderDeliverAPI,
  postAdminOrderPrepareAPI,
} from "../api/admin-api";
import { menu_type, order_type, user_count, user_type } from "../context/context-type";
import { useAuthUser } from "react-auth-kit";
import { getProfile } from "../api/profile-api";
import ForbiddenPage from "./ForbiddenPage";

const CaregiverDashboard = () => {
  const auth = useAuthUser();
  const token = auth()?.token;
  const [profile, setProfile] = useState({});
  const role = auth()?.role[0];
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([order_type]);
  const [deliverList, setDeliverList] = useState([order_type]);
  const [user, setUsers] = useState(user_type);
  const email = auth()?.email;
  const [msg, setMsg] = useState("");
  const [drivers, setDriver] = useState([user_type]);
  const [partners, setPartner] = useState([user_type]);
  const [userCount, setUserCount] = useState(user_count);
  const [menu, setMenu] = useState([menu_type]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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

  const isCaregiver = auth()?.role?.[0] === "ROLE_CAREGIVER";


  function handlePrepare(order, user) {
    postAdminOrderPrepareAPI(token, order, user)
      .then((resp) => setMsg(resp.data.message))
      .catch((err => console.log(err)))
  }

  function handleDeliver(order, user) {
    postAdminOrderDeliverAPI(token, order, user)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData()

    getAdminOrderPendingAPI(token)
      .then((resp) => setOrderList(resp.data))
      .catch((err) => console.log(err));

    getAdminOrderReadyToDeliverAPI(token)
      .then((resp) => setDeliverList(resp.data))
      .catch((err) => console.log(err));

    getPartnersAPI(token)
      .then((resp) => setPartner(resp.data))
      .catch((err) => console.log(err));

    getDriversAPI(token)
      .then((resp) => setDriver(resp.data))
      .catch((err) => console.log(err));

    getAdminUserCountAPI(token)
      .then((resp) => setUserCount(resp.data))
      .catch((err) => console.log(err));

    getAdminUserAPI(token)
      .then((resp) => {
        resp.data = resp.data
          .filter((item) => {
            return item.active === false;
          })
          .map((item) => {
            setUsers(item);
            return item;
          });
        setUsers(resp.data);
      })
      .catch((err) => console.log(err));

    getAllMenu()
      .then((resp) => {
        setMenu(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // if user not caregiver forbid access
  if (!isCaregiver) {
    return <ForbiddenPage />;
  }

  return (
    <Layout>
      <h1 className="mt-8 text-2xl font-bold text-center">Hello, {profile.name}!</h1>
      <Carousel></Carousel>
      <div className="md:flex ml-8">
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
                                      onClick={() => handlePrepare(order.id, partners.id)}
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

              {menu.slice(0, 7).map((data) =>
                <tbody key={data.id}>

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
            <h4 className="font-bold text-2xl">Assign driver Task</h4>
            <div className="card bg-gray-100 bg-opacity-25">
              <div className="container">
                <div className="task-header-div">
                  <table className="w-full table-auto text-white text-center driver my-3 task-header">
                    <thead className="bg-cyan-950">
                      <tr>
                        <th className="px-4 py-2 border-b font-normal">No</th>
                        <th className="px-4 py-2 border-b font-normal">
                          Meals Request List
                        </th>
                        <th className="px-4 py-2 border-b font-normal">
                          Status
                        </th>
                        <th className="px-4 py-2 border-b font-normal">
                          Assigned Driver
                        </th>
                        <th className="px-4 py-2 border-b font-normal">
                          Select Driver
                        </th>
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
                              <img
                                src={redCircle}
                                alt=""
                                className="status-icon"
                              />
                              <span className="font-bold ms-3">
                                {order.orderStatus}
                              </span>
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

                                      onClick={() => handleDeliver(order.id, drivers.id)}

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

export default CaregiverDashboard;
