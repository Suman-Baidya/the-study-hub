import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardMenu from '../components/dashboard/DashboardMenu'

const DashboardLayout = () => {
  return (
    <div className='flex h-screen'>
      <DashboardMenu />

      <main className='flex-1 p-4'>
        <Outlet />
      </main>

    </div>
  )
}

export default DashboardLayout
