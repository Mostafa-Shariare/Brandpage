import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">LOGO</h2>
          <p className="text-gray-300">Bringing you quality and innovation, one step at a time. Stay connected with us!</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact</h3>
          <p className="text-gray-300">Email: support@example.com</p>
          <p className="text-gray-300">Phone: +123 456 7890</p>
          <p className="text-gray-300">Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 text-2xl">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook hover:text-blue-500 transition"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter hover:text-sky-400 transition"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram hover:text-pink-500 transition"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin hover:text-blue-700 transition"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} <span className="text-blue-400">YourCompany</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
