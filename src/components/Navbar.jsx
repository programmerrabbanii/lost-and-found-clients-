
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthProvider'
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext)
  return (
    <div className='navbar bg-gray-800 text-white text-lg shadow-sm container px-4 mx-auto sticky top-0 z-10'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <span className='font-bold text-4xl'>WhereIsIt</span>
        </Link>
      </div>
      <div className='flex-none'> 
        <ul className='menu menu-horizontal px-1'>
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

        {user && (
          <div className='  dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-900 rounded-box w-52'
            >
              <li>
                <Link to='/add-lost' className='justify-between'>
                Add Lost & Found Item
                </Link>
              </li>
              <li>
                <Link to='/recovered'>All Recovered Items </Link>
              </li>
              <li>
                <Link to='/my-manage'>Manage My Items</Link>
              </li>
              <li className='mt-2'>
                <button
                  onClick={logOutUser}
                  className='bg-green-900 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

