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
          <ul className='flex space-x-4'>
            {/* All Routes */}
            <li>
              <Link to='/' className='hover:text-gray-200'>Home</Link>
            </li>
            <li>
              <Link to='/found' className='hover:text-gray-200'>Lost & Found Items</Link>
            </li>
            <li>
              <Link to='/add-lost' className='hover:text-gray-200'>Add Lost Item</Link>
            </li>
            <li>
              <Link to='/recovered' className='hover:text-gray-200'>Recovered Items</Link>
            </li>
            <li>
              <Link to='/my-manage' className='hover:text-gray-200'>Manage My Items</Link>
            </li>

            {!user ? (
              <li>
                <Link to='/login' className='hover:text-gray-200'>Login</Link>
              </li>
            ) : (
              <>
                {/* User Profile Image and Logout Button */}
                <div className='flex items-center space-x-4'>
                  <div className='flex items-center'>
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile'
                      src={user?.photoURL}
                      className='w-10 h-10 rounded-full'
                    />
                    <button
                      onClick={logOutUser}
                      className='bg-green-700 hover:bg-green-800 text-white py-1 px-4 rounded ml-2'
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
