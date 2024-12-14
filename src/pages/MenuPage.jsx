import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";

function MenuPage() {
  const [menus, setMenus] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/api/menu");

        const data = await response.json();
        setMenus(data.menus);
        setError("");
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setError(error.message || "Failed to Fetch Menus");
      }
    };
    fetchMenus();
  }, []);
  return (
    <div className="p-5">
      <h1 className=" font-bold text-xl mb-5 " >Menu</h1>
      {loading && <div>Loading....</div>}
      {error && <p className="text-red-500">{error}</p>}
      {menus && menus.length !== 0 ? (
        <div className=" grid grid-cols-4 gap-4 ">
          {menus.map((menu) => {
            return <Menu menu={menu} />;
          })}
        </div>
      ) : (
        <div>You Havent Created Any menu Yet</div>
      )}
    </div>
  );
}

export default MenuPage;
