import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';
import { useState, useEffect, useRef } from "react";
import { Globe, Check, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();

  const languages = [
    {
      code: 'id',
      name: 'Indonesian',
      nativeName: 'Bahasa Indonesia',
      flag: '🇮🇩'
    },
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸'
    },
    {
      code: 'ar',
      name: 'Arabic',
      nativeName: 'العربية',
      flag: '🇸🇦'
    }
  ];

  const changeLanguage = (lng) => {
    setCurrentLanguage(lng);
    setLanguageOpen(false);
    console.log('Language changed to:', lng);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50 bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src={Logo}
          alt="SG Group Logo"
          className="max-w-[150px] h-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-5 font-medium text-gray-700">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/products", label: "Products" },
          { to: "/projects", label: "Projects" },
          { to: "/activities", label: "Activities" },
          { to: "/partnerships", label: "Partnerships" },
          { to: "/support", label: "Support" },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="relative group transition duration-300 hover:text-blue-600"
          >
            {label}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}

        {/* Language Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600"
          >
            <Globe size={18} />
            Language
            <ChevronDown size={16} />
          </button>

          {languageOpen && (
            <ul className="absolute right-0 mt-2 w-44 bg-white border rounded shadow z-50">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    {lang.nativeName}
                  </span>
                  {currentLanguage === lang.code && <Check size={16} />}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Button */}
      <button className="bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] text-white px-5 py-2 rounded-xl font-medium shadow-md hover:scale-105 transition duration-300">
        Consult for Order
      </button>
    </header>
  );
}



