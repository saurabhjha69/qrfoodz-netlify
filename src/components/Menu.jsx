import React from "react";

export default function Menu({menu}) {
  return (
    <div className=" font-bold flex flex-col items-center p-4 border border-black rounded-md w-[300px]">
      <img src={`http://localhost:8000/codes/${menu._id}.png`} className=" w-[200px] " alt="" />
      <div className="specs flex justify-center pt-5 gap-2 w-full">
        <p className="font-bold text-lg text-gray-800">{menu.name}</p>
        <p className="text-lg bg-indigo-600 rounded-md w-fit px-2 text-white">
          ${(menu.cost).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
