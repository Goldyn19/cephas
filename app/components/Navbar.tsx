import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-5 px-10 bg-white/10 backdrop-blur-md border-b border-[#A084DC]/30 shadow-lg fixed top-0 left-0 z-50">
      <div className="flex items-center space-x-2 text-2xl font-extrabold tracking-wide">
        <span className="text-white drop-shadow">Cephas Artworld</span>
        <span className="bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Studios</span>
      </div>
      <ul className="hidden md:flex items-center space-x-10 text-lg font-medium">
        <li><a href="#" className="hover:text-[#A084DC] transition">Home</a></li>
        <li><a href="#" className="hover:text-[#A084DC] transition">About</a></li>
        <li className="relative group">
          <a href="#" className="hover:text-[#A084DC] transition">Services <span className="ml-1">+</span></a>
          {/* Dropdown can be implemented here if needed */}
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-[#A084DC] transition">Portfolio <span className="ml-1">+</span></a>
          {/* Dropdown can be implemented here if needed */}
        </li>
        <li><a href="#" className="hover:text-[#A084DC] transition">Contact Us</a></li>
      </ul>
      <a href="#" className="ml-6 px-6 py-2 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform hidden md:block">Book a Consultation</a>
    </nav>
  );
};

export default Navbar; 