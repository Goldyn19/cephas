'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-5 px-10 bg-white/10 backdrop-blur-md border-b border-[#A084DC]/30 shadow-lg fixed top-0 left-0 z-50">
      <div className="flex items-center space-x-2 text-2xl font-extrabold tracking-wide">
        <span className="text-white drop-shadow">Cephas Artworld</span>
        <span className="bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Studios</span>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-10 text-lg font-medium">
        <li><Link href="/" className="hover:text-[#A084DC] transition">Home</Link></li>
        <li><a href="/about-us" className="hover:text-[#A084DC] transition">About</a></li>
        <li className="relative group">
          <a href="#" className="hover:text-[#A084DC] transition">Services <span className="ml-1">+</span></a>
          {/* Dropdown can be implemented here if needed */}
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-[#A084DC] transition">Portfolio <span className="ml-1">+</span></a>
          {/* Dropdown can be implemented here if needed */}
        </li>
        <li><a href="/contact-us" className="hover:text-[#A084DC] transition">Contact Us</a></li>
      </ul>
      <a href="#" className="ml-6 px-6 py-2 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform hidden md:block">Book a Consultation</a>
      {/* Hamburger Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2 z-50 relative"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <span className={`block w-7 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          {/* Sidebar */}
          <aside
            className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-[#A084DC] to-[#F6C6EA] shadow-2xl z-50 flex flex-col p-8 transition-transform duration-300 md:hidden"
            style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)' }}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="flex flex-col space-y-8 text-xl font-bold text-white mt-12">
              <li><Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#A084DC] transition">Home</Link></li>
              <li><a href="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-[#A084DC] transition">About</a></li>
              <li><a href="/services" onClick={() => setMenuOpen(false)} className="hover:text-[#A084DC] transition">Services</a></li>
              <li><a href="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-[#A084DC] transition">Portfolio</a></li>
              <li><a href="/contact-us" onClick={() => setMenuOpen(false)} className="hover:text-[#A084DC] transition">Contact Us</a></li>
              <li>
                <a href="#" onClick={() => setMenuOpen(false)} className="mt-4 px-6 py-2 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform block text-center">Book a Consultation</a>
              </li>
            </ul>
          </aside>
        </>
      )}
    </nav>
  );
};

export default Navbar; 