import React from "react";
import { useNavigate } from "react-router-dom";

const Consult = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/consult-summary");
  };

  return (
    <div className="min-h-screen px-4 py-12 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
        Consult Our Team
      </h2>
      <p className="text-center text-sm text-gray-700 mb-8">
        Any questions about the product? We’re Here to Help – Anytime, Anywhere
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-blue-700 rounded-lg px-4 py-2 mt-1 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-blue-700 rounded-lg px-4 py-2 mt-1 placeholder-gray-400"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-blue-700 rounded-lg px-4 py-2 mt-1 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-blue-700 rounded-lg px-4 py-2 mt-1 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea
            rows="5"
            placeholder="Leave us a message..."
            className="w-full border border-blue-700 rounded-lg px-4 py-2 mt-1 placeholder-gray-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full border border-blue-700 hover:bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] px-5 py-3 mt-1 rounded-full font-medium text-black"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Consult;

