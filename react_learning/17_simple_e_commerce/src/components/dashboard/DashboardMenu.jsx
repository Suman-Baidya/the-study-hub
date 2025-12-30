import React from 'react'
import { NavLink } from 'react-router-dom'

const DashboardMenu = () => {
  return (
    <nav className='flex flex-col gap-4 p-4 border-r shadow-md text-black'>
        <NavLink
            to={'/dashboard/home'}
            className={({ isActive })=>(
                isActive ? "text-red-500" : "text-black"
            )}
        >
            Dashboard
        </NavLink>
        <NavLink
            to={'/dashboard/products'}
            className={({ isActive })=>(

                isActive ? "text-red-500" : "text-black"
            )}
        >
            Products
        </NavLink>
        <NavLink
            to={'/dashboard/settings'}
            className={({ isActive })=>(
                isActive ? "text-red-500" : "text-black"
            )}
        >
            Settings
        </NavLink>
    </nav>
  )
}

export default DashboardMenu
