import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'
import DashboardLayout from '../layouts/DashboardLayout'
import Products from '../dashboard/Products'
import Settings from '../dashboard/Settings'
import DashboardPage from '../dashboard/DashboardPage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Route>

        <Route element={<DashboardLayout />}>
            <Route path='/dashboard/home' element={<DashboardPage />} />
            <Route path='/dashboard/products' element={<Products />} />
            <Route path='/dashboard/settings' element={<Settings />} />            
        </Route>
    </Routes>
  )
}

export default AppRoutes
