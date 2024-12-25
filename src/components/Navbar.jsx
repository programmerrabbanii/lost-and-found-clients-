import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <nav className='navbar bg-[#1D4ED8] text-white text-lg shadow-sm sticky top-0 z-10'>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        {/* Logo */}
        <Link to='/' className='flex gap-2 items-center'>
          <span className='font-bold text-2xl md:text-4xl'>WhereIsIt</span>
        </Link>

        {/* Navigation Links */}
        <div className='flex items-center space-x-4'>
          <ul className='hidden md:flex space-x-4'>
            <li>
              <Link to='/' className='hover:text-gray-200'>Home</Link>
            </li>
            <li>
              <Link to='/found' className='hover:text-gray-200'>Lost & Found Items</Link>
            </li>

            {!user && (
              <li>
                <Link to='/login' className='hover:text-gray-200'>Login</Link>
              </li>
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className='dropdown dropdown-end md:hidden'>
            <label tabIndex={0} className='btn btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black'
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/found'>Lost & Found Items</Link>
              </li>
              {!user && (
                <li>
                  <Link to='/login'>Login</Link>
                </li>
              )}
            </ul>
          </div>

          {/* User Profile */}
          {user && (
            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar tooltip tooltip-bottom'
                data-tip={user?.displayName || 'User'}
              >
                <div className='w-10 rounded-full'>
                  <img
                    referrerPolicy='no-referrer'
                    alt='User Profile'
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-green-900 rounded-box w-52'
              >
                <li>
                  <Link to='/add-lost'>Add Lost & Found Item</Link>
                </li>
                <li>
                  <Link to='/recovered'>All Recovered Items</Link>
                </li>
                <li>
                  <Link to='/my-manage'>Manage My Items</Link>
                </li>
                <li>
                  <button
                    onClick={logOutUser}
                    className='bg-green-700 hover:bg-green-800 text-white py-1 px-4 rounded'
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
