import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar flex items-center justify-between p-4 shadow-md bg-black">
      <div className="logo text-2xl font-semibold text-blue-400">
        It'sCode
      </div>

      <nav className="navigation">
        <ul className="flex space-x-6 text-gray-300 font-medium">
          <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
        </ul>
      </nav>

      <div className="buttons space-x-3">
        <button className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-700 hover:text-white transition">Login</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
