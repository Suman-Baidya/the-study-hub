import React from 'react'
import { useRef } from 'react'

const UseRefForm = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 bg-gray-900 rounded p-5 w-80'>
        <h2 className='text-xl font-bold mb-3 text-blue-400 flex flex-col justify-center items-center'>Uncontrolled Form using <span className='text-white text-2xl'>useRef</span></h2>
        <input 
            type="text" 
            placeholder='Username' 
            ref={nameRef}
            className='px-3 py-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-blue-500'
        />
        <input 
            type="email" 
            placeholder='Email'
            ref={emailRef} 
            className='px-3 py-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-blue-500'
        />
        <input 
            type="password" 
            placeholder='Password'
            ref={passwordRef}
            className='px-3 py-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-blue-500' 
        />
        <button type="submit" className='bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700'>Login</button>
    </form>
  )
}

export default UseRefForm
