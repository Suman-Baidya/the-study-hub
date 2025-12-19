import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className='bg-gray-800 text-white p-4 flex justify-center items-center'>
            <h1 className='text-2xl font-bold'>Movie Explorer</h1>
        </div>
        <ul className='bg-gray-700 text-white p-4 flex justify-center items-center'>
            <li className='mx-4'><Link to="/">Home</Link></li>
            <li className='mx-4'><Link to="/movies">Movies</Link></li>
            <li className='mx-4'><Link to="/tv-shows">TV Shows</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
