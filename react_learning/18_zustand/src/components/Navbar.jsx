import React, { useEffect } from 'react'
import useMyStore from '../store'

const Navbar = () => {

    // const states = useMyStore()
    // console.log(states.count)

    const count = useMyStore((state=>state.count))
    useEffect(()=>{
        console.log("Rerender", count)
    })

  return (
    <nav className='flex justify-between items-center py-4 px-20 bg-black text-white border-b-2 border-gray-400'>
        <h1 className='font-bold text-lg'>Logo</h1>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div>
            <p>Notification: {count}</p>
        </div>
    </nav>
  )
}

export default Navbar
