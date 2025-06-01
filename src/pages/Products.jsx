// src/pages/Products.jsx
import React, { useState } from 'react';
import ProductSlider from "@/components/ProductSlider";
import ProductSpecification from "@/components/ProductSpecification";
import OrderDetail from "@/components/OrderModules";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBuilding,
  faBriefcase,
  faPeopleGroup,
  faFileAlt,
  faUser,
  faCompass
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
  "Finance Management",
  "HR Management",
  "IT Management",
  "Sales & Marketing"
];

const featuresData = {
  "Finance Management": [
    { icon: faCompass, title: "Biro", desc: "Description about function of the biro feature." },
    { icon: faBuilding, title: "Subsidiaries", desc: "Description about function of the subsidiaries feature." },
    { icon: faBriefcase, title: "Projects", desc: "Description about function of the projects feature." },
    { icon: faPeopleGroup, title: "Partners", desc: "Description about function of the partners feature." },
    { icon: faFileAlt, title: "Document Types", desc: "Description about function of the document types feature." },
    { icon: faUser, title: "Employees", desc: "Description about function of the employees feature." }
  ],
  "HR Management": [],
  "IT Management": [],
  "Sales & Marketing": []
};

const Products = () => {
   const [activeTab, setActiveTab] = useState("Finance Management");
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      
      {/* 1. Banner Top Product */}
      <section className="w-full h-72 bg-gray-200 flex flex-col items-center justify-center text-center">
        <h2 className="text-xl text-gray-600 md:text-2xl font-medium">1. Banner Top Product</h2>
        <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
          Order
        </button>
      </section>
        {/* Core Features */}
      <section className="px-4 md:px-20 py-14 bg-white">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Core Features</p>
          <h3 className="text-2xl text-gray-600 md:text-3xl font-bold mt-1">
            Designed for Efficiency, Built for You
          </h3>
        </div>

        {/* Mockup Feature Section */}
        <div className="bg-gray-300 h-64 rounded-xl flex items-center justify-center">
          <p className="text-lg font-medium">2. Mockup Core Features</p>
        </div>

        {/* Pagination / Slider Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2, 3, 4, 5].map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === 0 ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </section>

      {/* Product Excellence */}
      <section className="px-4 md:px-20 py-16 bg-white">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Product Excellence</p>
        <h3 className="text-2xl text-gray-600 md:text-3xl font-bold mt-2 mb-8">Why Choose the Product?</h3>

        {/* Box Layout for Visual Designs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl mb-8">
          {[
            "Visual Design Operational",
            "Visual Design Finance",
            "Visual Design Administrator",
            "Visual Design Sales"
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-6 border text-center font-medium text-gray-700 shadow-sm">
              3. {item}
            </div>
          ))}
        </div>

        {/* General Description */}
        <p className="text-sm text-gray-600 mb-10">
          Description about SG C-1 and its advantages (including operational management,
          finance management, administrator management, sales and marketing).
        </p>

        {/* Detail Features */}
        <div className="space-y-6 text-sm md:text-base">
          <div>
            <h4 className="font-bold text-gray-800">Operational Management</h4>
            <p className="text-gray-600">
              Description about the features in operational management (biro, subsidiaries, projects, partners, document types, employees).
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Finance Management</h4>
            <p className="text-gray-600">
              Description about the features in finance management (transaction, invoices, expense categories, expenses, revenues, budgets, taxes).
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Administrator Management</h4>
            <p className="text-gray-600">
              Description about the features in administrator management (roles, permissions).
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Sales and Marketing</h4>
            <p className="text-gray-600">
              Description about the features in sales and marketing (departements, leads, campaigns, customers, incentives, service usage, contacts).
            </p>
          </div>
        </div>
      </section>
        <section className="px-4 md:px-20 py-16 bg-white">
      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide text-center">Product Details</p>
      <h3 className="text-2xl md:text-3xl font-bold mt-2 text-center mb-10">
        Explore the Details,<br className="hidden md:block" /> Experience the Excellence
      </h3>

      <div className="bg-gray-200 rounded-2xl h-56 flex items-center justify-center text-center text-gray-700 text-lg font-medium mb-6">
        4. Mockup Features in {activeTab}
      </div>

      <div className="flex justify-center gap-2 mb-10">
        {[0, 1, 2, 3, 4, 5].map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === 2 ? "bg-blue-600" : "bg-gray-300"}`}
          ></span>
        ))}
      </div>

      <div className="flex justify-center gap-6 border-b mb-10 text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${activeTab === tab ? "border-b-2 border-black font-bold" : "text-gray-500"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-6 text-sm text-gray-700">
        {featuresData[activeTab].length > 0 ? featuresData[activeTab].map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <FontAwesomeIcon icon={item.icon} className="text-xl mt-1 text-gray-700" />
            <div>
              <p><strong>{item.title}.</strong> {item.desc}</p>
            </div>
          </div>
        )) : (
          <p className="text-center text-gray-500">Feature list for "{activeTab}" is coming soon.</p>
        )}
      </div>
    </section>
     <div>
      <section>
        <ProductSpecification
          product={{
            name: "SG C-1",
            description: "...",
            language: "PHP 8.4",
            framework: "Laravel 12",
            database: "MySQL"
          }}
        />
      </section>
    </div>
    </div>
    
  );
};
export default Products;
