import { useState, useEffect } from "react";
import {
  getMemberOrderAllAPI,
  postMemberOrderCompleteAPI,
} from "../api/member-api";
import { order_type } from "../context/context-type";
import Layout from "../components/Layout";
import { useAuthUser } from "react-auth-kit";
import ForbiddenPage from "./ForbiddenPage";

const MemberOrderHistory = () => {
  const auth = useAuthUser();
  const token = auth()?.token;
  const [order, setOrder] = useState([order_type]);
  const [msg, setMsg] = useState("");
  const isMember = auth()?.role?.[0] === "ROLE_MEMBER";

  function handleComplete(id) {
    postMemberOrderCompleteAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getMemberOrderAllAPI(token)
    .then((resp) => setOrder(resp.data.sort((a, b) => a.id - b.id)))
    .catch((err) => console.log(err));
    console.log(order)

    return () => {};
  }, [token]);

  // if user not member forbid access
  if (!isMember) {
    return <ForbiddenPage />;
  }

  return (
    <Layout>
      <div>
        <h1 className="text-center py-8 text-2xl font-bold">Order History</h1>

        <div className="task-header-div px-8">
          {msg}
          <table className="table-auto w-full text-center mb-5">
            <thead className="bg-cyan-950 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold">No</th>
                <th className="px-4 py-2 font-semibold">Meal Package</th>
                <th className="px-4 py-2 font-semibold">Prepared by</th>
                <th className="px-4 py-2 font-semibold">Ordered on</th>
                <th className="px-4 py-2 font-semibold">Delivery Address</th>
                <th className="px-4 py-2 font-semibold">Deliver by</th>
                <th className="px-4 py-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="text-black mt-5 bg-white">
              {order.map((x, i) => (
                <tr key={x.id} className="border-b">
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{x.mealPackage.packageName}</td>
                  <td className="px-4 py-2">{x.preparedBy?.name}</td>
                  <td className="px-4 py-2">
                    {new Date(x.orderOn).toLocaleString("en-GB", {
                      timeZone: "Asia/Singapore",
                      hour12: true,
                    })}
                  </td>
                  <td className="px-4 py-2">{x.orderBy.address}</td>
                  <td className="px-4 py-2">{x.deliveredBy?.name}</td>
                  <td className="px-4 py-2">{x.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default MemberOrderHistory;
