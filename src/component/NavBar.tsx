import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../Constant";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-green-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <i className="fa-solid fa-bolt text-white text-xl"></i>
          </div>
          <span className="text-2xl font-bold font-heading tracking-tight">
            ALIEUS<span className="text-green-500">COIN</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide hover:text-green-400 transition-colors ${
                location.pathname === item.path
                  ? "text-green-500"
                  : "text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-black font-bold rounded-full transition-all transform hover:scale-105 active:scale-95">
            Buy Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/95 transition-transform duration-500 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-2xl font-bold font-heading ${
                location.pathname === item.path
                  ? "text-green-500"
                  : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="px-10 py-4 bg-green-500 text-black font-bold rounded-full text-xl">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
