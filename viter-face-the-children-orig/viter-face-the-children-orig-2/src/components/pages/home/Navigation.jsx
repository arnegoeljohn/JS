import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "FAQ", to: "/faq" },
    { name: "Strategy", to: "/strategy" },
    { name: "Contact", to: "/contact" },
    { name: "Sponsor Child", to: "/sponsor-child" },
  ];

  const isActive = (path) => currentPath === path;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50 mt-9 py-2">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
       
        <img src="./src/assets/ftc_svg_logo.svg" alt="Logo" className="h-8" />

       
        <ul className="hidden md:flex space-x-6 text-sm text-gray-800 items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`hover:text-textyellow ${
                  isActive(link.to) ? "text-textyellow" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/donate"
              className="bg-primary text-white text-sm px-4 py-1 rounded hover:bg-hover"
            >
              Donate
            </Link>
          </li>
        </ul>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      
      <div
        className={`fixed top-30 left-0 right-0 h-[calc(100vh-4rem)] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 mt-8 text-sm text-gray-800">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`hover:text-textyellow ${
                  isActive(link.to) ? "text-textyellow" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/donate"
              className="bg-primary text-white text-sm px-4 py-1 rounded hover:bg-hover"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
