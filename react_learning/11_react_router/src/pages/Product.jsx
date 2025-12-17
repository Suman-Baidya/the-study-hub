import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
        <h1>Product</h1>

        <div>
            <nav className='flex gap-4'>
                <Link to='/product/mobile'>Mobile</Link>
                <Link to='/product/laptop'>Laptop</Link>
            </nav>
        </div>

        <Outlet />
      
    </div>
  )
}

export default Product
