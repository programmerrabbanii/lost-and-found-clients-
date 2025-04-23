import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1D4ED8] text-gray-200 py-8">
      <div className="container mx-auto text-center">
        {/* Website Logo/Name */}
        <h2 className="text-2xl font-bold mb-4">WhereIsIt</h2>
        <p className="mb-4">
          A Lost and Found platform to connect people and recover lost belongings.
        </p>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" Link className="hover:text-teal-400">Home</Link>
          <Link to="/found" className="hover:text-teal-400">Lost & Found Items</Link>
          <Link Link="/add-lost" className="hover:text-teal-400">Add Item</Link>
          <Link to="/contact" Link className="hover:text-teal-400">Contact</Link>
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
          &copy; {new Date().getFullYear()} Rabbani Sarkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
