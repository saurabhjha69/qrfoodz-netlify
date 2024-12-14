import React, { useState } from "react";
import ItemsCheckboxCard from "./ItemsCheckboxCard";

export default function CreateMenu({menuName,setMenuName,handleMenuCreate, menuItems, pushItemToMenu }) {

  return (
    <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Create Menu</h2>
      {/* Menu Name Input */}
      <div className="mb-6">
        <label
          htmlFor="menuName"
          className="block text-gray-600 mb-2"
        >
          Menu Name:
        </label>
        <input
          type="text"
          id="menuName"
          value={menuName}
          placeholder="Enter A Menu Name..."
          onChange={(e) => setMenuName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Menu Items */}
      <div className="mb-5" >
        <label className="block text-gray-600 mb-2">
          Menu Items:
        </label>
        <div className="space-y-4">
          {menuItems.map((item) => (
            <ItemsCheckboxCard
              key={item._id}
              pushItemToMenu={pushItemToMenu}
              item={item}
            />
          ))}
        </div>
      </div>
      <button onClick={handleMenuCreate} className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
        Create Menu
      </button>
    </div>
  );
}
