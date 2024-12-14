import React from "react";
import  formatDateTime  from "../utils/helper";

function OrderCard({ order ,index}) {
    const {time,date} = formatDateTime(order.createdAt)
  return (
    <div className="max-w-sm mt-10 bg-white border rounded-lg shadow-md overflow-hidden  ">
        <div className="p-4">
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-sm font-semibold text-indigo-800">Order <span className="text-indigo-400">#{4000+index}</span></h2>
            <span className="text-sm  px-2 py-1 rounded-full" style={{ backgroundColor: order.status === "Pending" ? "#FFFAA0" : "#DFFF00" }}>
              {order.status}
            </span>
          </div>

          <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Order Date:</span>
            <span>{date}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Order Time:</span>
            <span>{time}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Total Amount:</span>
            <span className="font-semibold text-indigo-800">
              ${order.totalAmount}
            </span>
          </div>
        </div>

          <div class="mt-4 border-t pt-4">
            <h3 class="text-sm font-semibold text-gray-800">Menu:</h3>
            <ul class="mt-2 space-y-2">
              <li class="flex justify-between items-center text-lg text-indigo-600">
                <span>{order.menu.name}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <div class="p-4 bg-gray-50 border-t flex items-center justify-between">
          <button class="text-sm text-blue-600 hover:text-blue-800 focus:outline-none">
            View Details
          </button>
          <button class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
            Confirm Order
          </button>
        </div> */}
      </div>
  );
}

export default OrderCard;
