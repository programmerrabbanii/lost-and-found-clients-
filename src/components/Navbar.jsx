import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import navlogo from "../assets/img/logo-transparent.png";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className='navbar text-black text-lg shadow-sm sticky top-0 z-10 backdrop-blur bg-transparent '>
      <div className='container mx-auto px-4 flex items-center justify-between w-11/12 mx-auto '>
        {/* Logo */}
        <Link to='/' className='flex gap-2 items-center'>
          <img className='h-16 w-32 object-contain' src={navlogo} alt="Logo" />
        </Link>

        {/* Hamburger Menu */}
        <button
          className='md:hidden focus:outline-none text-black'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center space-x-4 md:space-x-8`}>
          <ul className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0'>
            <li>
              <Link
                to='/'
                className={`hover:text-gray-700 ${isActive('/') ? 'border-b-2 border-black' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/found'
                className={`hover:text-gray-700 ${isActive('/found') ? 'border-b-2 border-black' : ''}`}
              >
                Lost & Found Items
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link
                    to='/add-lost'
                    className={`hover:text-gray-700 ${isActive('/add-lost') ? 'border-b-2 border-black' : ''}`}
                  >
                    Add Lost Item
                  </Link>
                </li>
                <li>
                  <Link
                    to='/recovered'
                    className={`hover:text-gray-700 ${isActive('/recovered') ? 'border-b-2 border-black' : ''}`}
                  >
                    Recovered Items
                  </Link>
                </li>
                <li>
                  <Link
                    to='/my-manage'
                    className={`hover:text-gray-700 ${isActive('/my-manage') ? 'border-b-2 border-black' : ''}`}
                  >
                    Manage My Items
                  </Link>
                </li>
              </>
            )}
            {!user ? (
              <li>
                <Link
                  to='/login'
                  className={`hover:text-gray-700 ${isActive('/login') ? 'border-b-2 border-black' : ''}`}
                >
                  Login
                </Link>
              </li>
            ) : (
              <li className='flex items-center gap-2'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile'
                  src={user?.photoURL}
                  className='w-10 h-10 rounded-full border border-gray-400'
                />
                <button
                  onClick={logOutUser}
                  className='border text-black py-1 px-4 rounded hover:bg-gray-100 transition-all'
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
