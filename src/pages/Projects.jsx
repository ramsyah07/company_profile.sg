// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="bg-gray-200 py-20 relative">
        <h2 className="text-center text-2xl mb-12">Banner Project</h2>
        <div className="container mx-auto px-6 md:px-10 text-center">
          <div className="md:w-1/2 mx-auto">
            <p className="text-gray-900 text-2xl md:text-3xl font-medium">Innovation in Every Detail</p>
          </div>
        </div>
      </section>

      {/* 2. Company Orders Heading */}
      <section className="relative text-center py-8">
        <h3 className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Company Orders</h3>
        <h2 className="text-2xl font-bold mt-1">Made for Your Needs</h2>
      </section>

      {/* 3. Foto Company Profile */}
      <section className="px-4 md:px-10 py-8">
        <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
          <p className="text-center text-lg text-gray-600">2. Foto Company Profile</p>
        </div>
      </section>

      {/* 4. Company Info */}
      <section className="text-center py-8 px-4 md:px-10">
        <h3 className="font-bold text-lg mb-2">Company Name</h3>
        <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
          Lorem ipsum odor amet, consectetur adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat.
          Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas
          magnis facilisis morbi ultrices iaculis varius.
        </p>
      </section>

        {/* 3. Foto Company Profile */}
      <section className="px-4 md:px-10 py-8">
        <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
          <p className="text-center text-lg text-gray-600">Opsi 2 Portofolio SG</p>
        </div>
      </section>

        {/* 4. Company Info */}
      <section className="text-center py-8 px-4 md:px-10">
        <h3 className="font-bold text-lg mb-2">Company Name</h3>
        <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
          Lorem ipsum odor amet, consectetur adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat.
          Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas
          magnis facilisis morbi ultrices iaculis varius.
        </p>
      </section>
        {/* Centered Button */}
      <div className="text-center">
        <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] hover:text-white transition">
          Create Order
        </button>
      </div>
      

    </>
  );
};

export default Projects;