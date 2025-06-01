// pages/ConsultSummary.jsx
import React from 'react';

export default function ConsultSummary() {
  return (
    <div className="px-6 py-12">
      <h2 className="text-center text-2xl font-bold text-blue-600 mb-2">
        ORDER SUMMARY
      </h2>
      <p className="text-center font-medium mb-8">
        Make Sure Everything's Right
      </p>

      {/* Table Header */}
      <div className="grid grid-cols-4 bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] text-white font-semibold px-4 py-2">
        <div>Item Names</div>
        <div>Unit Price</div>
        <div>Qnt</div>
        <div>Total</div>
      </div>

      {/* Dummy List Items */}
      {[1, 2, 3, 4].map((_, i) => (
        <div key={i} className="border-b px-4 py-3 grid grid-cols-4 text-sm">
          <div>
            <div className="font-semibold">Item Names</div>
            <div className="text-gray-600 text-xs">
              Lorem ipsum odor amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="font-semibold">IDR 20.000.000</div>
          <div>1</div>
          <div className="font-semibold">IDR 20.000.000</div>
        </div>
      ))}

      {/* Summary */}
      <div className="text-right px-4 py-6 space-y-2">
        <div>
          <span className="font-semibold">SUBTOTAL : </span>
          <span className="text-blue-600 font-bold">IDR 24.000.000</span>
        </div>
        <div>
          <span className="font-semibold">Tax 12% : </span>
          <span className="text-gray-600">IDR ....</span>
        </div>
        <div className="mt-2 inline-block bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] text-white px-6 py-2 font-semibold rounded">
          TOTAL DUE : IDR 24.000.000
        </div>
      </div>

      {/* Special Price Form */}
      <div className="mt-12">
        <h2 className="text-center text-xl font-bold text-blue-600 mb-1">
          SPECIAL PRICE
        </h2>
        <p className="text-center text-sm mb-8">
          If you want to get a special price, fill in your identity here
        </p>

        <form className="space-y-5 max-w-3xl mx-auto">
          <div>
            <label className="block font-medium text-sm mb-1">Company Name</label>
            <input
              type="text"
              placeholder="e.g., PT Salam Generasi Group"
              className="w-full border border-blue-700 rounded-md px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">
              PIC (Person in Charge) Name
            </label>
            <input
              type="text"
              placeholder="e.g., Rachmah Amalia"
              className="w-full border border-blue-700 rounded-md px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">PIC Position</label>
            <input
              type="text"
              placeholder="e.g., Operations Manager / IT Supervisor / Director"
              className="w-full border border-blue-700 rounded-md px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Company Address</label>
            <input
              type="text"
              placeholder="Full office address for billing or site visit purposes"
              className="w-full border border-blue-700 rounded-md px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">
              Active Phone Number / WhatsApp
            </label>
            <input
              type="tel"
              placeholder="For direct communication"
              className="w-full border border-blue-700 rounded-md px-4 py-2 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">
              Official Email Address
            </label>
            <input
              type="email"
              placeholder="To receive official documents or quotations"
              className="w-full border border-blue-700 rounded-md px-4 py-2 placeholder-gray-400"
            />
          </div>
           <div>
            <label className="block font-medium text-sm mb-1">
              Type of Business
            </label>
            <input
              type="text"
              placeholder="e.g., Retail, Manufacturing, Services, Education, etc"
              className="w-full border border-blue-700 rounded-md px-4 py-2 placeholder-gray-400"
            />
          </div>
        </form>
         <div>
            <label className="block font-medium text-sm mb-2">Required ERP Modules</label>
            <div className="border border-blue-700 rounded-md px-4 py-4 space-y-3">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="finance" className="accent-blue-700" />
                <label htmlFor="finance">Finance Management</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="hr" className="accent-blue-700" />
                <label htmlFor="hr">Human Resource & Operational Management</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="it" className="accent-blue-700" />
                <label htmlFor="it">Information Technology Management</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="sales" className="accent-blue-700" />
                <label htmlFor="sales">Sales and Marketing</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="others" className="accent-blue-700" />
                <label htmlFor="others">Lainnya <span className="ml-1">_____</span></label>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center">
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold px-12 py-3 rounded-full hover:bg-blue-800 transition-all duration-200"
            >
              Send Message
            </button>
          </div>
      </div>

    </div>
    
  );
}
