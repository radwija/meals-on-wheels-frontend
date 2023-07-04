import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import redCircle from "../assets/images/red-circle.svg"
import greenCircle from "../assets/images/green-circle.svg"
import yellowCircle from "../assets/images/yellow-circle.svg"
import { order_type, user_type } from "../context/context-type";
import { useAuthUser } from "react-auth-kit";
import { getProfile } from "../api/profile-api";
import {
  getDriverOrderAPI,
  postDriverOrderCompleteAPI,
  postDriverOrderCreateAPI,
  setStatusAPI,
} from "../api/driver-api";

const DriverDashboard = () =>{
  const auth = useAuthUser();
  const token = auth()?.token;
  const [user, setUsers] = useState(user_type);
  const [orderList, setOrderList] = useState([order_type]);
  const [profile, setProfile] = useState({});
  const role = auth()?.role[0];
  const navigate = useNavigate();
  const[msg, setMsg] = useState("");
  const [index, setIndex] = useState(0);

  function handlePickUp(id){
    postDriverOrderCreateAPI(token, id)
    .then((resp) => setMsg("msg"))
    .catch((err) => console.log(err.response));
  }

  function handleComplete(id){
    postDriverOrderCompleteAPI(token,id)
    .then((resp) => setMsg(resp.data.message))
    .catch((err) => console.log(err.response));
    window.location.reload();
  }

  function handleStatusUpdate(statusCode){
    setStatusAPI(token, statusCode)
    .then((resp) => setMsg(resp.data.message))
    .catch((err) => console.log(err.response));
    window.location.reload();
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

  useEffect(() =>{
    fetchData();

    getDriverOrderAPI(token)
    .then((resp) => setOrderList(resp.data))
    .catch((err) => console.log(err));
  }, []);

    return(
        <Layout>
        <h1 className="mt-8 text-2xl font-bold text-center">Hello, {profile.name}!</h1>
        <Carousel></Carousel>
        <div className="md:flex ml-8 mt-4">
  {/* Assign Driver Task */}
  <div className="md:w-9/12 mr-4">
    <div className="pb-5">
      <h4 className="font-bold text-2xl">Delivery Schedule</h4>
      <div className="card bg-gray-100 bg-opacity-25">
        <div className="container">
          <div className="task-header-div">
            <table className="w-full table-auto text-white text-center driver my-3 task-header">
              <thead className="bg-cyan-950">
                <tr>
                  <th className="px-4 py-2 border-b font-normal">No</th>
                  <th className="px-4 py-2 border-b font-normal">Pick Up</th>
                  <th className="px-4 py-2 border-b font-normal">Drop Off</th>
                  <th className="px-4 py-2 border-b font-normal">Status</th>
                  <th className="px-4 py-2 border-b font-normal">Action</th>
                </tr>
              </thead>
              <tbody className="text-black mt-5 bg-white">
              {orderList.map((order, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{order.preparedBy.address}</td>
                  <td className="px-4 py-2 border-b">{order.orderBy.address}</td>
                  <td className="px-4 py-2 border-b">
                    <div className="status flex justify-center">
                      <img src={greenCircle} alt="status" className="status-icon" />
                      <span className="font-bold ms-3">{order.orderStatus}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b">
        {order.orderStatus === "READY_TO_DELIVER" ? (
          <button
           className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
             handlePickUp(order.id);
           }}
            >
             Pickup
               </button>
                  ) : (
                  <button
                  className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                   onClick={() => {
                  handleComplete(order.id);
                     }}
                    >
                     Complete
                     </button>
                    )}
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
  <div className="md:w-3/12  ml-2 mr-2 px-5">
  <div className="card">
  <div className="bg-white shadow-md rounded-md p-4 mt-2">
    <div className="text-center">
      <h4 className="text-2xl text-white font-bold mb-2 bg-cyan-950 rounded">Profile Card</h4>
    </div>
    <div className="flex flex-col items-center">
      <img
        src={`data:image/jpeg;base64,${profile?.picture}`}
        alt="profile pic"
        className="w-20 h-20 rounded-full object-cover mt-4 mb-2"
      />
      <div className="text-black">
        <span className="font-normal">{profile.name}</span>
      </div>
      <div className="relative">
  <select
    className="bg-blue-500 text-white py-2 px-4 rounded dropbtn"
    value={user?.status}
    onChange={(event) => {
      const selectedStatus = event.target.value;
      handleStatusUpdate(selectedStatus);
    }}
  >
    <option value="1">
      <img src={greenCircle} alt="" className="status-icon" />
      <span className="font-bold ms-3">Available</span>
    </option>
    <option value="2">
      <img src={yellowCircle} alt="" className="status-icon" />
      <span className="font-bold ms-3">Busy</span>
    </option>
    <option value="3">
      <img src={redCircle} alt="" className="status-icon" />
      <span className="font-bold ms-3">Not Available</span>
    </option>
  </select>
</div>
    </div>
  </div>
</div>
  </div>
</div>
        </Layout>
    )
}

export default DriverDashboard;