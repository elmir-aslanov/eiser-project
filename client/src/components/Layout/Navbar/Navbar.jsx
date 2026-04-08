import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#222222]">EISER</div>
        <ul className="flex space-x-6 text-[#222222] font-medium uppercase text-sm">
          <li><Link to="/" className="hover:text-[#71cd14] transition-colors">Home</Link></li>
          <li><Link to="/add" className="hover:text-[#71cd14] transition-colors">Add</Link></li>
          <li><Link to="/basket" className="hover:text-[#71cd14] transition-colors">Basket</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
