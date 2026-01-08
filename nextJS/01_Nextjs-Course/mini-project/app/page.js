import Features from '@/components/Features'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-12'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>WelCome to MyWebsite</h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-8'>This is simple, clean website built with Next.js and Tailwind CSS. Perfect for beginners learinig web development.</p>

        <div className='space-x-4'>
          <button className='bg-blue-600 text-white px-6  py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold'>Get Started</button>
          <button className='border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold'>Get Started</button>
        </div>

        <Features />
      </div>
    </div>
  )
}

export default page
