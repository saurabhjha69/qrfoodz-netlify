import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';

function MenuDetails() {
  const { menuId } = useParams();
  const [menu, setMenu] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMenuDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8000/api/menu/${menuId}`);
        const data = await response.json();

        setMenu(data.menu);
        setLoading(false);
        setError("");
      } catch (error) {
        console.error(error.message);
        setError(error.message || "Something Went Wrong!");
        setLoading(false);
      }
    };
    fetchMenuDetails();
  }, [menuId]);

  

  return (
    <div className="min-h-screen bg-white text-indigo-900">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-indigo-500 pb-2">Menu Details</h1>

        {loading && <div className="text-center text-lg">Loading...</div>}

        {error && <p className="text-red-500 text-center">{error}</p>}

        {menu && (
          <div className="bg-indigo-50 shadow-md rounded-lg p-6">
            {/* Menu Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">{menu.name}</h2>
              <p className="text-lg font-medium mt-2">Total Cost: ${menu.cost?.toFixed(2)}</p>
            </div>

            {/* Menu Items */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold border-b-2 border-indigo-500 pb-2">Menu Items</h3>
              <ul className="mt-4 space-y-4">
                {menu.menuItems?.map((item) => (
                  <li
                    key={item._id}
                    className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <h4 className="text-lg font-semibold">{item.menuItem.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.menuItem.description}</p>
                      <p className="text-sm font-medium mt-2">
                        Price: ${item.menuItem.price?.toFixed(2)}
                        {item.menuItem.isComplementary && (
                          <span className="ml-2 text-green-500">(Complementary)</span>
                        )}
                      </p>
                    </div>
                    <p className="mt-4 md:mt-0 text-indigo-700 font-medium">Quantity: {item.quantity}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <button onClick={()=> navigate(`/checkout/${menu._id}`)} className='mt-4 px-4 bg-indigo-500 text-white rounded-md py-1 float-end'>Place Order</button>
      </div>
    </div>
  );
}

export default MenuDetails;
