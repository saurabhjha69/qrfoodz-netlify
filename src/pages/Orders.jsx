import React, { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";

function Orders() {
  const [orders, setOrders] = useState([]); // To store fetched orders
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    fetch("http://localhost:8000/api/orders")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setOrders(data.orders))
      .catch((err) => setError(err.message));
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className=" p-5 grid grid-cols-4 gap-5  ">
      {orders.map((obj,index) => (
            <OrderCard key={obj._id} order={obj} index={index} />
          ))}
    </div>
  );
}

export default Orders;
