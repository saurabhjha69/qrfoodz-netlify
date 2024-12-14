import React, { useState } from "react";
import { useParams } from "react-router-dom";

function CheckOut() {
  const {menuId} = useParams()
  const [userData, setUserData] = useState({
      name: "",
      email: "",
      phoneno: "",
      address: "",
  });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name] : value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = { user: userData, menuId: menuId }
      const res = await fetch("http://localhost:8000/api/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to place the order. Please try again.");
      }

      const data = await res.json();
      setResponse(data);
      setLoading(false);
    } catch (err) {
      setError(err.message || "Soemthing Went Wrong!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-indigo-800 mb-6">Checkout Page</h1>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">User Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneno"
                value={userData.phoneno}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-700"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {response && (
          <div className="bg-green-50 shadow-md rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              {response.message}
            </h2>
            <h3 className="text-xl font-medium mb-2">Order Details</h3>
            <p className="mb-2">Name: {response.orderDetails.user.name}</p>
            <p className="mb-2">Email: {response.orderDetails.user.email}</p>
            <p className="mb-2">Phone: {response.orderDetails.user.phoneno}</p>
            <p className="mb-2">Address: {response.orderDetails.user.address}</p>
            <p className="mb-2">Menu ID: {response.orderDetails.menu}</p>
            <p className="mb-2">Total Amount: ${response.orderDetails.totalAmount.toFixed(2)}</p>
            <p className="mb-2">Status: {response.orderDetails.status}</p>
            <p className="mb-2">Payment Status: {response.orderDetails.paymentStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckOut;
