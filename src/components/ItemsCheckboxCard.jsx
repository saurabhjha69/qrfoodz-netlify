import React, { useState } from "react";

export default function ItemsCheckboxCard({ pushItemToMenu, item }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-lg shadow-md mb-4 hover:bg-gray-50 transition duration-300">
      {/* Item Name and Price */}
      <div className="flex flex-col justify-start">
        <div className="text-gray-700 font-medium text-lg">
          {item.name}
        </div>
        <div className="text-indigo-600 font-semibold text-lg mt-1">
          ${item.price}
        </div>
      </div>

      {/* Quantity Input */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Quantity:</span>
        <input
          type="number"
          value={quantity}
          min="0"
          onChange={(e) => setQuantity(e.target.value)}
          className="w-16 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Add Button */}
      <div>
        <button
          onClick={() => pushItemToMenu(item._id, quantity)}
          className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to Menu
        </button>
      </div>
    </div>
  );
}
