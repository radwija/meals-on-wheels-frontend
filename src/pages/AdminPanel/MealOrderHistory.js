import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Layout from '../../components/Layout';
import {
  getAdminOrderAllAPI,
} from "../../api/admin-api";
import { order_type } from "../../context/context-type";
import { useAuthUser } from "react-auth-kit";
import ForbiddenPage from "../ForbiddenPage";

const MealOrderHistory = () => {
  const auth = useAuthUser();
  const token = auth()?.token;
  const [order, setOrder] = useState([order_type]);
  const [msg, setMsg] = useState("");
  const isAdmin = auth()?.role?.[0] === "ROLE_ADMIN";

  

  useEffect(() => {
    getAdminOrderAllAPI(token)
      .then((resp) => setOrder(resp.data.sort((a, b) => a.id - b.id)))
      .catch((err) => console.log(err));
    console.log(order)

    return () => { };
  }, [token]);

  // if user not admin forbid access
  if (!isAdmin) {
    return <ForbiddenPage />;
  }

  return (
    <Layout>
      <div className="flex flex-col min-h-screen mr-5">
        <div className="flex-1 flex">
          <Sidebar />
          <div className="flex-1 p-4">
            <h1 className="text-3xl font-bold mb-10 mt-10 text-center">Meal Order History</h1>
            <h2 className="text-2xl font-bold mb-4 mt-10">Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="px-4 py-2 font-medium">No</th>
                    <th className="px-4 py-2 font-medium">Name</th>
                    <th className="px-4 py-2 font-medium">Meal Package</th>
                    <th className="px-4 py-2 font-medium">Delivery Address</th>
                    <th className="px-4 py-2 font-medium">Order Date</th>
                    <th className="px-4 py-2 font-medium">Prepared By</th>
                    <th className="px-4 py-2 font-medium">Delivered By</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {order.map((x, i) => (
                    <tr key={x.id}>
                      <td className="px-4 py-2">{i + 1}</td>
                      <td className="px-4 py-2">{x.orderBy.name}</td>
                      <td className="px-4 py-2">{x.mealPackage.packageName}</td>
                      <td className="px-4 py-2">{x.orderBy.address}</td>
                      <td className="px-4 py-2">
                        {new Date(x.orderOn).toLocaleString("en-GB", {
                          timeZone: "Asia/Singapore",
                          hour12: true,
                        })}
                      </td>
                      <td className="px-4 py-2">{x.preparedBy?.name}</td>
                      <td className="px-4 py-2">{x.deliveredBy?.name}</td>
                      <td className="px-4 py-2">{x.orderStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MealOrderHistory;
