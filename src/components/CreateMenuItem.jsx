import React from "react";

function CreateMenuItem({
  saveInputData,
  isComplementary,
  setIsComplementary,
  handleItemCreate,
  error,
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Create Menu Item</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => saveInputData(e.target)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-600">Description</label>
        <textarea
          id="description"
          name="description"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => saveInputData(e.target)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-600">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => saveInputData(e.target)}
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="isComplementary"
          checked={isComplementary}
          onChange={() => setIsComplementary(!isComplementary)}
          className="mr-2"
        />
        <label htmlFor="isComplementary" className="text-gray-600">Complementary</label>
      </div>
      <button
        onClick={handleItemCreate}
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
      >
        Create Item
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}

export default CreateMenuItem;
