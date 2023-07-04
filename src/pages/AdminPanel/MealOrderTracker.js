import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Layout from '../../components/Layout';

const MealOrderTracker = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch meal orders from the backend API
    fetch('/api/meal-orders')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, []);

  // Generated example data
  // const exampleOrders = [
  //   {
  //     id: 1,
  //     orderNumber: '01',
  //     buyerName: 'John Doe',
  //     mealName: 'Meal Package 2',
  //     deliveryAddress: '123 Main St, City',
  //     orderDate: '2023-06-27',
  //     company: 'ABC Catering',
  //     deliverydriver: 'Anthony Smith',
  //     status: 'Out for Delivery',
  //   },
  //   {
  //     id: 2,
  //     orderNumber: '02',
  //     buyerName: 'Jane Smith',
  //     mealName: 'Meal Package 1',
  //     deliveryAddress: '456 Elm St, City',
  //     orderDate: '2023-06-26',
  //     company: 'XYZ Catering',
  //     deliverydriver: 'John Mill',
  //     status: 'Delivered',
  //   },
  //   {
  //     id: 3,
  //     orderNumber: '03',
  //     buyerName: 'James Lee',
  //     mealName: 'Meal Package 3',
  //     deliveryAddress: '003 Elm St, City',
  //     orderDate: '2023-06-26',
  //     company: 'EAT Catering',
  //     deliverydriver: 'Pio Chan',
  //     status: 'Ready to Deliver',
  //   },
  //   {
  //     id: 4,
  //     orderNumber: '04',
  //     buyerName: 'Rod Dion',
  //     mealName: 'Meal Package 1',
  //     deliveryAddress: '512 Elm St, City',
  //     orderDate: '2023-06-26',
  //     company: 'XYZ Catering',
  //     deliverydriver: 'Pio Chan',
  //     status: 'Pending',
  //   },
  // ];

  // Uncomment the line below and use `exampleOrders` instead of `orders` to see the generated data
  // const orders = exampleOrders;

  return (
    <Layout>
      <div className="flex flex-col min-h-screen mr-5">
        <div className="flex-1 flex">
          <Sidebar />
          <div className="flex-1 p-4">
            <h1 className="text-3xl font-bold mb-10 mt-10 text-center">Meal Order Tracker</h1>
            <h2 className="text-2xl font-bold mb-4 mt-10">Meal Order Tracker</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="px-4 py-2 font-medium">Order Number</th>
                    <th className="px-4 py-2 font-medium">Buyer Name</th>
                    <th className="px-4 py-2 font-medium">Ordered Meal</th>
                    <th className="px-4 py-2 font-medium">Delivery Address</th>
                    <th className="px-4 py-2 font-medium">Order Date</th>
                    <th className="px-4 py-2 font-medium">Company</th>
                    <th className="px-4 py-2 font-medium">Delivery Driver</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-4 py-2">{order.id}</td>
                      <td className="px-4 py-2">{order.orderedBy.name}</td>
                      <td className="px-4 py-2">{order.mealPackage.name}</td>
                      <td className="px-4 py-2">{order.deliveryAddress}</td>
                      <td className="px-4 py-2">{order.orderedOn}</td>
                      <td className="px-4 py-2">{order.company}</td>
                      <td className="px-4 py-2">{order.deliveredBy.name}</td>
                      <td className="px-4 py-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full ${order.status === 'PENDING'
                              ? 'bg-red-500 text-white'
                              : order.status === 'READY_TO_DELIVER'
                                ? 'bg-blue-500 text-white'
                                : order.status === 'PREPARING'
                                  ? 'bg-green-500 text-white'
                                  : order.status === 'ORDER_COMPLETE'
                                    ? 'bg-gray-500 text-white'
                                    : ''
                            }`}
                        >
                          {order.status}
                        </span>
                      </td>

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

export default MealOrderTracker;
