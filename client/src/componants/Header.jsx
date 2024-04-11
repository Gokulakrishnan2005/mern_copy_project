import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector(state => state.user);
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-2 m-0'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-green-500 '>M.G </span>
        <span className='text-slate-600'>okulakrishnan</span>
      </h1>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center '>
        <input type="text" placeholder='Search...' className='bg-transparent outline-none h-3 w-24 sm:w-64  '/>
        <FaSearch className='text-slate-600'/>
      </form>
      <ul className='flex gap-4'>
        <Link to='/' >
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/About'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link> 
        <Link to = '/profile'>
          {currentUser ? (
            <img src={currentUser.avatar}  className='rounded-full w-7 h-7 object-cover' alt="profile" />
          ) : (
            <li className='sm:inline text-slate-700 hover:underline'>sign-in</li>
        )}
        </Link>
      </ul>
    </div>
  </header>
  );
}
