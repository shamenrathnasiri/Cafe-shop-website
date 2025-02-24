import React from 'react';
import logo from '../component images/logo.png'; // Ensure the correct path

function Footer() {
  return (
    <footer className="py-8 mt-8 text-white bg-black">
      <div className="container flex flex-col items-center justify-between px-8 mx-auto md:flex-row md:px-32 lg:px-64">
       
        {/* Left Section - Logo & Cafe Info */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-12 md:items-start">
          <img src={logo} alt="Logo" className="w-24 h-24" />
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Cozy Bean Cafe</h2>
            <p>No 128/1, Main Road,</p>
            <p>Kaduruwewa, Polonnaruwa</p>
            <p className="font-bold">Tel: 027 569 89 ## / 021 819 63 ##</p>
            <p>Email: cozybeancafe.pl@gmail.com</p>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="mt-6 space-y-2 text-center md:mt-0 md:text-right">
          <a href="/" className="block hover:underline">Home</a>
          <a href="/about" className="block hover:underline">About Us</a>
          <a href="/menu" className="block hover:underline">Menu</a>
          <a href="/contact" className="block hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
