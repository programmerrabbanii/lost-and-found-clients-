import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto text-center">
        {/* Website Logo/Name */}
        <h2 className="text-2xl font-bold mb-4">WhereIsIt</h2>
        <p className="mb-4">
          A Lost and Found platform to connect people and recover lost belongings.
        </p>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/" className="hover:text-teal-400">Home</a>
          <a href="/allItems" className="hover:text-teal-400">Lost & Found Items</a>
          <a href="/addItems" className="hover:text-teal-400">Add Item</a>
          <a href="/contact" className="hover:text-teal-400">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-xl hover:text-blue-500"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-xl hover:text-blue-400"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-xl hover:text-pink-500"></i>
          </a>
        </div>

        {/* Copyright Information */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} WhereIsIt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
