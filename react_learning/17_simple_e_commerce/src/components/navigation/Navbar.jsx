import React from 'react'
import Navlink from './Navlink'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-2 sm:px-4 md:px-12 lg:px-20 p-4 border-b shadow-md fixed top-0 left-0 right-0 bg-white z-10 bg-opacity-90'>
        <div>Logo</div>
        <div className='flex gap-4'>
            <Navlink navText="Home" navLink="/" />
            <Navlink navText="Shop" navLink="/shop" />
            <Navlink navText="About" navLink="/about" />
            <Navlink navText="Contact" navLink="/contact" />
        </div>
        <div className='flex gap-4'>
            <button>Cart</button>
            <button>
              <Link to={'/dashboard/products'}>Dashboard</Link>
            </button>
        </div>
    </nav>
  )
}

export default Navbar
