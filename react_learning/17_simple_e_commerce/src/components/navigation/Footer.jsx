import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white px-2 sm:px-4 md:px-12 lg:px-20 p-4 mt-8 border-t justify-center items-center'>
        <div className='flex flex-wrap justify-between mb-4'>
            <div>
                <h1>Logo</h1>
                <p>Simple E-Commerce Site</p>
            </div>
            <div>
                <h2>Menus</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div>
                <h2>Contact Info</h2>
                <p>Address: Chandpara, North 24 Parganas, 743245</p>
                <p>Phone: +91 123456789</p>
                <p>Email: abcd@example.com</p>
            </div>
        </div>
        <div className='text-center'>
            <p>© 2024 Simple E-Commerce Site. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
