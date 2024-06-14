import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/api';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order #{order.id} - {order.payment_status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
