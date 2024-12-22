import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const link=<>
    <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? 'block px-4 py-2 text-yellow-400 font-bold border-b-2 border-yellow-400'
        : 'block px-4 py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200'
    }
  >
    Home
  </NavLink>
</li>
<li>
  <NavLink
    to="/found"
    className={({ isActive }) =>
      isActive
        ? 'block px-4 py-2 text-yellow-400 font-bold border-b-2 border-yellow-400'
        : 'block px-4 py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200'
    }
  >
    Lost & Found
  </NavLink>
</li>
    </>
  return (
    <div className=" bg-gray-800 text-gray-200 ">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul> 
          </div>
          <a className="btn btn-ghost text-4xl">WhereIsIt</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
