"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header
      className={`w-full transition-all duration-300 h-[10vh] z-50 ${
        isSticky ? "fixed top-0 left-0 bg-white shadow-md" : "relative"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="JITENDER Aluminium & Glass Work" className="h-16 w-16 mr-3" />
          <h1 className="text-xl md:text-2xl font-bold text-red-600">
            Jitender Aluminium & Glass Work
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link href="/" className="relative text-base font-medium w-fit block 
            after:block after:content-[''] after:absolute after:h-[3px] 
            after:bg-red-600 after:w-full after:scale-x-0 
            hover:after:scale-x-100 after:transition after:duration-300 
            after:origin-right">
            Home
          </Link>
          <Link href="/services" className="relative text-base font-medium w-fit block 
            after:block after:content-[''] after:absolute after:h-[3px] 
            after:bg-red-600 after:w-full after:scale-x-0 
            hover:after:scale-x-100 after:transition after:duration-300 
            after:origin-right">
            Services
          </Link>
          <Link href="/gallery" className="relative text-base font-medium w-fit block 
            after:block after:content-[''] after:absolute after:h-[3px] 
            after:bg-red-600 after:w-full after:scale-x-0 
            hover:after:scale-x-100 after:transition after:duration-300 
            after:origin-right">
            Gallery
          </Link>
          <Link href="/contact" className="relative text-base font-medium w-fit block 
            after:block after:content-[''] after:absolute after:h-[3px] 
            after:bg-red-600 after:w-full after:scale-x-0 
            hover:after:scale-x-100 after:transition after:duration-300 
            after:origin-right">
            Contact Us
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden md:block px-6 py-2 text-white font-semibold text-base bg-red-600 hover:bg-red-700 rounded-3xl transition duration-300"
          >
            Get a Free Quote
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-red-600 focus:outline-none"
          >
            {showMobileMenu ? <FaXmark size={32} /> : <FaBars size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden fixed inset-0 bg-red-600 z-40 mt-[10vh]">
          <div className="flex flex-col items-center py-10 space-y-8">

            <Link
              href="/"
              className="text-white text-xl font-medium hover:text-yellow-300 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white text-xl font-medium hover:text-yellow-300 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-white text-xl font-medium hover:text-yellow-300 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-white text-xl font-medium hover:text-yellow-300 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>

            <div className="flex space-x-4 pt-4">
              <a 
                href="tel:+918882836312" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300"
                aria-label="Call us"
              >
                <FaPhoneAlt size={20} />
              </a>
              <a 
                href="https://wa.me/918882836312" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp us"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3 text-red-600 font-semibold text-base bg-white rounded-3xl hover:bg-gray-100 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;