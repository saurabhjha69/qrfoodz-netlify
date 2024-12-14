function MenuItem({items}) {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Created Items</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-indigo-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Description:</strong> {item.description || "N/A"}
              </p>
              <p className="text-sm text-indigo-600 mt-1">
                <strong>Price:</strong> ${item.price}
              </p>
              <div className="mt-2">
                {item.isComplementary ? (
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Complementary
                  </span>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No items created yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
