import React, { useState } from "react";

const modules = [
  { id: 1, name: "Finance Management", description: "Description about Finance Management.", price: 20000000, preview: "1. Modul Preview" },
  { id: 2, name: "Human Resource & Operational Management", description: "Description about Human Resource Management.", price: 20000000 },
  { id: 3, name: "Information Technology Management", description: "Description about IT Management.", price: 20000000 },
  { id: 4, name: "Sales and Marketing", description: "Description about sales and marketing.", price: 20000000 }
];

const addOns = [
  { id: 1, name: "Customization", description: "Description about sales and marketing.", price: 2000000 },
  { id: 2, name: "Training", description: "Description about sales and marketing.", price: 2000000 },
  { id: 3, name: "Integration", description: "Description about sales and marketing.", price: 2000000 },
  { id: 4, name: "Maintenance & Support", description: "Description about sales and marketing.", price: 2000000 }
];

const OrderModules = () => {
  const [selectedModule, setSelectedModule] = useState(modules[0].id);
  const [selectedAddOns, setSelectedAddOns] = useState([1, 4]); // default selected

  const toggleAddOn = (id) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isSelected = (id) => selectedAddOns.includes(id);

  const subtotal = modules.find(m => m.id === selectedModule)?.price || 0
    + selectedAddOns.reduce((sum, id) => {
        const item = addOns.find(add => add.id === id);
        return sum + (item ? item.price : 0);
      }, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-blue-600 text-center text-lg font-bold mb-2">ORDER</h2>
      <p className="text-center font-semibold mb-10">Your perfect moment to order? Right now!</p>

      {/* MODULE SELECTION */}
      <h3 className="text-left font-bold mb-4">Modul Selection</h3>
      {modules.map((modul) => (
        <div
          key={modul.id}
          className={`p-4 rounded-xl mb-6 cursor-pointer ${
            selectedModule === modul.id ? "bg-gray-300" : "bg-gray-100"
          }`}
          onClick={() => setSelectedModule(modul.id)}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="module"
                checked={selectedModule === modul.id}
                onChange={() => setSelectedModule(modul.id)}
              />
              <span className="font-medium">{modul.name}</span>
            </div>
            <span className="font-medium text-blue-600">IDR {modul.price.toLocaleString("id-ID")}</span>
          </div>
          <p className="text-sm text-gray-700">{modul.description}</p>
          <p className="text-blue-600 text-sm mt-2 underline cursor-pointer">Preview</p>
          {selectedModule === modul.id && (
            <div className="bg-white p-6 mt-4 text-center text-black border rounded-lg">
              {modul.preview || "Preview content goes here..."}
            </div>
          )}
        </div>
      ))}

      {/* ADD-ON SERVICES */}
      <h3 className="text-left font-bold mt-10 mb-4">Add-On Services</h3>
      {addOns.map((addon) => (
        <div
          key={addon.id}
          className={`p-4 rounded-xl mb-4 flex justify-between items-start ${
            isSelected(addon.id) ? "bg-gray-300" : "bg-gray-100"
          }`}
        >
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={isSelected(addon.id)}
              onChange={() => toggleAddOn(addon.id)}
            />
            <div>
              <p className="font-medium">{addon.name}</p>
              <p className="text-sm text-gray-700">{addon.description}</p>
            </div>
          </div>
          <span className="text-blue-600 font-medium">IDR {addon.price.toLocaleString("id-ID")}</span>
        </div>
      ))}

      {/* SUBTOTAL + ACTIONS */}
      <div className="bg-gray-100 mt-10 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-1 text-sm">
            <input type="checkbox" disabled /> Select All
          </label>
          <button className="text-red-500 text-sm hover:underline">Delete All</button>
        </div>
        <div className="text-right">
          <p className="font-semibold">
            Subtotal:{" "}
            <span className="text-blue-600">
              IDR {subtotal.toLocaleString("id-ID")}
            </span>
          </p>
          <p className="text-xs text-gray-500">*Final price shown at create order</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700">
          Create Order
        </button>
      </div>
    </div>
  );
};

export default OrderModules;


