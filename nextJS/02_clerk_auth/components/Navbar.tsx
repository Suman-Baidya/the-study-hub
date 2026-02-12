import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white px-4 py-8 flex items-center justify-between max-w-7xl mx-auto absolute top-0 left-0 right-0'>
      <h1 className='text-xl font-bold'>My App</h1>
      <div className='space-x-4'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/company">Company</Link>
      </div>
      <div className="flex justify-end items-center p-4 gap-4 h-16">
            {/* Show the sign-in and sign-up buttons when the user is signed out */}
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            {/* Show the user button when the user is signed in */}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
    </div>
  )
}

export default Navbar
