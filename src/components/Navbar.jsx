import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "block px-4 py-2 uppercase text-lg text-white bg-yellow-400 font-bold border-b-2  rounded-md"
              : "block px-4 py-2 uppercase text-lg text-white hover:text-yellow-400 transition duration-200 ease-in-out"
          }
          aria-label="Home"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/found"
          className={({ isActive }) =>
            isActive
              ? "block px-4 py-2 uppercase text-lg bg-yellow-400 text-white font-bold border-b-2 rounded-md"
              : "block px-4 py-2 uppercase text-lg text-white hover:text-yellow-400 transition duration-200 ease-in-out"
          }
          aria-label="Lost & Found"
        >
          Lost & Found
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-green-900 sticky top-0 z-10">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-white p-2 shadow z-10"
            >
              {link}
            </ul>
          </div>
          <Link to="/" className="text-4xl font-bold text-yellow-400">
            WhereIsIt
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <Link
            to="/register"
            className="px-4 py-2 rounded-md bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 hover:text-white transition duration-300 ease-in-out"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-md bg-gray-700 text-white font-semibold hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
