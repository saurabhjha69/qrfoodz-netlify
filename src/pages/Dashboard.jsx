import { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import CreateMenuItem from "../components/CreateMenuItem";
import CreateMenu from "../components/CreateMenu";

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [menuItem, setMenuItem] = useState({});
  const [menuName, setMenuName] = useState("");
  const [isComplementary, setIsComplementary] = useState(false);
  const [items, setItems] = useState([]);
  const [menuItemsQuantity, setMenuItemsQuantity] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/menu-item");
        const data = await response.json();
        setItems(data.menuItems);
        setError("");
      } catch (error) {
        console.error(error);
        setError(error.message || "Failed to Fetch Existing MenuItems!");
      }
    };

    fetchMenuItems();
  }, []);

  const saveInputData = ({ name, value }) => {
    setMenuItem({ ...menuItem, [name]: value });
  };

  const handleItemCreate = async () => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const payload = { ...menuItem, isComplementary };

      const response = await fetch("http://localhost:8000/api/menu-item", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to create menu item. Please try again.");
      }

      const data = await response.json();
      setItems([...items, data.menuItem]);
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError(error.message || "An unexpected error occurred.");
    }
  };
  const handleMenuCreate = async () => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const payload = { name: menuName, menuItems: menuItemsQuantity };

      const response = await fetch("http://localhost:8000/api/menu", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to create menu. Please try again.");
      }
      setError(""); // Clear any previous errors
      navigate("/menus")
    } catch (error) {
      console.error(error);
      setError(error.message || "An unexpected error occurred.");
    }
  };

  const pushItemToMenu = (id,quantity) => {
    let menuItemsCopy = [...menuItemsQuantity]
    let itemAndQnty = { menuItem : id, quantity : parseInt(quantity) }
    menuItemsCopy.push(itemAndQnty);
    setMenuItemsQuantity(menuItemsCopy);
    console.log(menuItemsCopy);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Welcome, <span className="text-indigo-600">Admin!</span>
        </h1>

        {/* Create Menu */}
        <CreateMenu
          menuName={menuName}
          setMenuName={setMenuName}
          menuItems={items}
          pushItemToMenu={pushItemToMenu}
          handleMenuCreate={handleMenuCreate}
        />

        {/* Create Menu Item */}
        <CreateMenuItem
          saveInputData={saveInputData}
          isComplementary={isComplementary}
          setIsComplementary={setIsComplementary}
          handleItemCreate={handleItemCreate}
          error={error}
        />

        {/* Menu Items */}
        <div className="space-y-4">
          <MenuItem items={items} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
