import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full h-16 px-6 bg-black md:px-16">
      <p className="text-xl font-bold text-white">Cozy Bean Cafe</p>
      
      {/* Hamburger Menu Button */}
      <button 
        className="block text-white xl:hidden" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>
      
      {/* Desktop Menu */}
      <ul className="items-center hidden gap-12 text-base font-semibold xl:flex">
        <li className="p-3 text-white rounded-2xl hover:bg-[#9A6900] hover:text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="p-3 text-white rounded-2xl hover:bg-[#9A6900] hover:text-black">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-3 text-white rounded-2xl hover:bg-[#9A6900] hover:text-black">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="p-3 text-white rounded-2xl hover:bg-[#9A6900] hover:text-black">
          <Link to="/order">Order</Link>
        </li>
        <li className="p-3 text-white rounded-2xl hover:bg-[#9A6900] hover:text-black">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute left-0 right-0 flex flex-col items-center gap-4 p-6 text-base font-semibold bg-black top-16 xl:hidden">
          <li onClick={() => setMenuOpen(false)} className="p-3 text-white hover:bg-[#9A6900] hover:text-black ">
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMenuOpen(false)} className="p-3 text-white hover:bg-[#9A6900] hover:text-black">
            <Link to="/about">About Us</Link>
          </li>
          <li onClick={() => setMenuOpen(false)} className="p-3 text-white hover:bg-[#9A6900] hover:text-black">
            <Link to="/menu">Menu</Link>
          </li>
          <li onClick={() => setMenuOpen(false)} className="p-3 text-white hover:bg-[#9A6900] hover:text-black">
            <Link to="/order">Order</Link>
          </li>
          <li onClick={() => setMenuOpen(false)} className="p-3 text-white hover:bg-[#9A6900] hover:text-black">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
