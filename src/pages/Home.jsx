// src/pages/Home.jsx
import React from "react";
import FloatingButtons from "@/components/FloatingButtons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BannerLogo from '../assets/banner.jpg';


export default function Home() {
  return (
    <>
<section
  className="relative w-full bg-cover bg-center bg-no-repeat py-32"
  style={{ backgroundImage: `url(${BannerLogo})` }}
>
  {/* Optional: Overlay */}
  <div className="absolute inset-0 bg-black/30 z-0" />

  {/* Konten utama - diatur ke kiri */}
  <div className="relative z-10 container mx-auto px-6 md:px-10 text-white text-left max-w-3xl">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tagline SG</h2>
    <p className="text-base md:text-lg mb-6">
      <span className="font-bold">Short description about SG Group.</span> Lorem ipsum odor amet, consectetur adipiscing elit.
      Dis a nam rutrum venenatis; conubia velit ipsum consequat. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat.
    </p>
    <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] hover:text-white transition">
      Inside SG Group
    </button>
  </div>
</section>
{/* Floating Buttons */}


      {/* Top Product */}
<section className="p-10 bg-white">
  <h2 className="text-center text-sm font-semibold text-blue-700 mb-2 uppercase">Our Top Products</h2>
  <h3 className="text-3xl text-center font-bold mb-8">
    Innovative Solutions, <br /> Exceptional Performance
  </h3>
  <div className="bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
    {/* Product Logo */}
    <div className="bg-white rounded-xl p-6 h-48 w-48 flex justify-center items-center text-center text-black text-sm font-semibold">
      2. Logo Product
    </div>

    {/* Product Content */}
    <div className="flex-1">
      <h4 className="text-2xl font-bold mb-2">SG C-1</h4>
      <p className="text-sm mb-4 leading-relaxed">
        Lorem ipsum dolor amet, consectetur adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat. 
        Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat.
      </p>
      <button className="bg-white text-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition">
        Explore Our Products
      </button>
    </div>

    {/* Right Arrow Circle */}
    <div className="hidden md:flex items-center justify-center">
      <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
        <span className="text-blue-800 text-xl cursor-pointer">&#8594;</span>
      </div>
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="p-10 bg-white">
  <h4 className="text-sm font-semibold text-blue-700 uppercase mb-2">Testimonials</h4>
  <h2 className="text-2xl font-bold mb-8">
    What Our Clients Say, <br className="md:hidden" />
    Defines Who We Are
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-lg p-6 shadow bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] text-white">
  <div className="flex justify-between items-center mb-4">
    <span className="text-sm font-semibold">1. Company Name</span>
    <span className="text-xl cursor-pointer">&#8599;</span>
  </div>
  <p className="text-sm mb-4 leading-relaxed">
    Lorem ipsum odor amet, consectetuer adipiscing elit. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi.
  </p>
  <p className="font-semibold">Full Name</p>
  <p className="text-sm">Job title</p>
</div>

<div className="rounded-lg p-6 shadow bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] text-white">
  <div className="flex justify-between items-center mb-4">
    <span className="text-sm font-semibold">2. Company Name</span>
    <span className="text-xl cursor-pointer">&#8599;</span>
  </div>
  <p className="text-sm mb-4 leading-relaxed">
    Lorem ipsum odor amet, consectetuer adipiscing elit. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi.
  </p>
  <p className="font-semibold">Full Name</p>
  <p className="text-sm">Job title</p>
</div>

<div className="rounded-lg p-6 shadow bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] text-white">
  <div className="flex justify-between items-center mb-4">
    <span className="text-sm font-semibold">3. Company Name</span>
    <span className="text-xl cursor-pointer">&#8599;</span>
  </div>
  <p className="text-sm mb-4 leading-relaxed">
    Lorem ipsum odor amet, consectetuer adipiscing elit. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi.
  </p>
  <p className="font-semibold">Full Name</p>
  <p className="text-sm">Job title</p>
</div>
  </div>

  <div className="flex justify-center mt-8">
    <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] hover:text-white transition">
      Explore Our Projects
    </button>
  </div>
</section>

<section className="py-20 bg-white">
  <div className="text-center mb-12">
    <p className="text-sm text-blue-600 font-semibold tracking-wide">LATEST ACTIVITIES</p>
    <h2 className="text-2xl md:text-3xl font-semibold mt-2">
      Exploring New<br />Horizons, Together
    </h2>
  </div>

  {/* Card Activities */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
    {[1, 2, 3].map((item, idx) => (
      <div key={idx} className="bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] rounded-2xl p-6 text-center">
        {/* Mockup Image Placeholder */}
        <div className="bg-white rounded-xl h-40 flex items-center justify-center text-gray-700 text-sm font-semibold mb-4">
          4. Foto Activity
        </div>

        {/* Activity Info */}
        <h3 className="font-bold text-sm">Activity’s Name</h3>
        <p className="text-xs text-gray-600">Date/Month/Year</p>

        {/* Read More */}
        <a href="#" className="text-blue-600 text-xs mt-2 inline-block hover:underline">
          Read More
        </a>
      </div>
    ))}
  </div>

  {/* Explore More Button */}
  <div className="text-center mt-10">
    <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] hover:text-white transition">
      Explore Our Activities
    </button>
  </div>
</section>

    
    </>
  );
}




