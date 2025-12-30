import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <main className='min-h-screen py-16'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
