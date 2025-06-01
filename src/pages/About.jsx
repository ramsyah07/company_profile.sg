// File: src/pages/About.jsx
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <div className="text-center text-gray-800">
    {/* Banner Section */}
      <section className="bg-gray-200 py-20 relative">
        <h2 className="text-center text-2xl mb-12"> Banner Teams</h2>
        <div className="container mx-auto px-6 md:px-10 text-center">
          <div className="md:w-1/2 mx-auto">
            <p className="text-gray-900 text-2xl md:text-3xl font-medium">Innovating for Progress, Delivering Excellence</p>
          </div>
        </div>
  {/* Konten utama */}
  <div className="container mx-auto px-6 md:px-10 text-center">
    <div className="md:w-1/2">

    </div>
  </div>
  </section>
  {/* Logo Section */}
  <div className="bg-white py-10">
  <img
    src="/src/assets/Logo.svg"
    alt="SG Group Logo"
    className="mx-auto w-40 md:w-48 h-auto cursor-pointer"
  />
  </div>

    {/* Vision Section */}
  <section className=" bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] text-white py-10 px-4">
        <h2 className="text-lg font-bold tracking-wider mb-2">OUR VISION</h2>
        <p className="max-w-2xl mx-auto text-sm">
          To be a holding company that gives and inspires goodness for the whole earth.
        </p>
  </section>

    {/* Mission Section */}
      <section className="py-12 px-4">
        <h2 className="text-blue-700 text-sm font-semibold mb-8">OUR MISSIONS</h2>
        <div className="space-y-12 max-w-md mx-auto">
          <div>
            <div className="text-3xl mb-2">⚕️</div>
            <p className="text-sm">
              Bringing together great people from all aspects of the professional world to unite in realizing a sustainable, harmonious and blessed earth.
            </p>
          </div>
          <div>
            <div className="text-3xl mb-2">🌐</div>
            <p className="text-sm">
              Conducting good business activities as a way of sustenance to expand its impact to all people on earth.
            </p>
          </div>
          <div>
            <div className="text-3xl mb-2">❤️</div>
            <p className="text-sm">
              Participate in supporting or being a bulwark in every movement of goodness for the whole earth and humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className=" bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] text-white py-12 px-4">
        <h2 className="text-sm font-semibold mb-8">OUR CORE VALUES</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-sm">
          <div>
            <p className="font-bold mb-1">1. Loyalty</p>
            <p>
              Participate in supporting or being a bulwark in every movement of goodness for the whole earth and humanity.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">2. Honesty</p>
            <p>
              Participate in supporting or being a bulwark in every movement of goodness for the whole earth and humanity.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">3. Trustworthy</p>
            <p>
              Participate in supporting or being a bulwark in every movement of goodness for the whole earth and humanity.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">4. Humanist</p>
            <p>
              Participate in supporting or being a bulwark in every movement of goodness for the whole earth and humanity.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">5. Fairness</p>
            <p>
              Participate in supporting or being a bulwark in every movement of goodness for the whole earth and humanity.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">6. Gratefully</p>
            <p>
              Participate in supporting or being a bulwark in every movement of goodness for the whole earth and humanity.
            </p>
          </div>
        </div>
      </section>
    {/* History Section */}
<section className="py-16 px-4 text-center">
  <h3 className="text-sm text-blue-700 font-semibold mb-2">HISTORY</h3>
  <h2 className="text-xl sm:text-2xl font-bold mb-8">Unveiling Our Journey, <br className="hidden sm:block" /> Building the Future</h2>

  <div className="relative max-w-6xl mx-auto">
    <button
      onClick={() => (document.getElementById('history-scroll').scrollLeft -= 300)}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 z-10"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
    <div id="history-scroll" className="overflow-x-auto scroll-smooth">
      <div className="flex gap-4 w-fit px-10">
        {[2021, 2022, 2023, 2024, 2025].map((year, index) => (
          <div
            key={year}
            className={`min-w-[250px] flex-shrink-0 text-center p-4 rounded-md ${index === 3 ? "bg-blue-900 text-white" : "bg-gray-200 text-black"}`}
          >
            <h4 className="font-bold text-lg mb-2">{year}</h4>
            <Link to="/detail-history">
            <div className="bg-white text-black rounded-xl py-8 px-4 mb-4">2. Foto History</div>
            <p className="font-semibold">History's Name</p>
            <p className="text-sm">Date/Month/Year</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <button
      onClick={() => (document.getElementById('history-scroll').scrollLeft += 300)}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 z-10"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>

  <button
  onClick={() => navigate("/history-detail")}
  
  className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] hover:text-white transition"
>
  Explore Our History
</button>
</section>
    </div>
    
  );
}

