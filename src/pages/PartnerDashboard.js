import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import { useNavigate } from "react-router";
import redCircle from "../assets/images/red-circle.svg"
import { useAuthUser } from "react-auth-kit";
import {
  getPartnerOrderAPI,
  postPartnerOrderCompleteAPI,
  postPartnerOrderCreateAPI,
} from "../api/partner-api";
import { getProfile } from "../api/profile-api";
import { getAllMenu} from "../api/main-api";
import{
  order_type,
  menu_type,
  user_type,
} from "../context/context-type";

const PartnerDashboard = () => {
  const auth = useAuthUser();
  const token = auth()?.token;
  const [profile, setProfile] = useState({});
  const role = auth()?.role[0];
  const navigate = useNavigate();
  const email = auth()?.email;
  const [msg, setMsg] = useState("");
  const [orderList, setOrderList] = useState([order_type]);
  const [index, setIndex] = useState(0);
  const [menu, setMenu] = useState([menu_type]);

  function handlePrepare(id){
    postPartnerOrderCreateAPI(token, id)
    .then((resp) => setMsg(resp.data.message))
    .catch((err) => console.log(err.response));
  }

  function handleComplete(id){
    postPartnerOrderCompleteAPI(token, id)
    .then((resp) => setMsg(resp.data.message))
    .catch((err) => console.log(err.response));
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
    fetchData()

    getAllMenu()
    .then((resp) =>{
      setMenu(resp.data);
    })
    .catch((err)=>{
      console.log(err);
    });

    getPartnerOrderAPI(token)
    .then((resp) => setOrderList(resp.data))
    .catch((err) => console.log(err.response));
  }, []);

    return(
        <Layout>
        <h1 className="mt-8 text-2xl font-bold text-center">Hello, {profile.name}!</h1>
        <Carousel></Carousel>
        <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-9/12 md:pr-2 px-5">
            <div className="pb-5">
              <h4 className="font-bold text-2xl">Task</h4>
              <div className="card bg-gray-100 bg-opacity-25">
                <div className="container">
                  <div className="task-header-div">
                    <table className="w-full table-auto text-white text-center driver my-3 task-header">
                    <thead className="bg-cyan-950">
                    <tr>
                      <th className="px-4 py-2 border-b font-normal">No</th>
                      <th className="px-4 py-2 border-b font-normal">Meals Request List</th>
                      <th className="px-4 py-2 border-b font-normal">Status</th>
                      <th className="px-4 py-2 border-b font-normal">Order On</th>
                      <th className="px-4 py-2 border-b font-normal">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-black mt-5 bg-white">
                  {orderList.map((order, index) =>(
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
                      {new Date(order.orderOn)
                        .toLocaleString("en-GB", {
                          timeZone: "Asia/Singapore",
                          hour12: true,
                        })
                        .slice(11, 30)}
                      </td>
                      <td className="px-4 py-2 border-b">
                      {order.orderStatus === "READY_TO_DELIVER" ? (
                        <button
                         className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => {
                           handlePrepare(order.id);
                         }}
                          >
                           Prepare
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
          <div className="w-full md:w-3/12 md:pl-2 px-5">
            <div className="pb-3">
              <h4 className="text-center text-2xl font-bold">Meal Package List</h4>
              <div className="bg-white shadow-md rounded-md p-4 ml-8 mt-2">
                <table className="w-full table-auto text-gray-800 text-center">
                <thead className="bg-cyan-950">
                <tr>
                  <th className="px-4 py-2 text-white">Meal</th>
                </tr>
              </thead>
              {menu.slice(0,7).map((data) =>(
              <tbody key={data.id}>
                <tr>
                  <td className="px-4 py-2 border-b">{data.packageName}</td>
                </tr>
              </tbody>
              ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        </Layout>
    )
}

export default PartnerDashboard;