"use client";

import React, { useEffect, useState } from 'react'

const ClientPage = () => {
    const [count, setCount] = useState(0)
    const [userData, setUserData] = useState(null)
    const handleClick = () => {
        setCount((prev)=>prev+1)
    }

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("https://api.github.com/users/Suman-Baidya");
            const data = await res.json();
            setUserData(data)
        }
        fetchData()
    },[])
  return (
    <div className='flex items-center justify-center flex-col gap-2 py-4'>
      <h1 className='text-4xl font-semibold'>Client Page</h1>
      <h2>{count}</h2>
        <button onClick={handleClick} className='border px-4 py-2 rounded-2xl'>Increase +</button>
        <p>
            {JSON.stringify(userData)}
        </p>
    </div>
  )
}

export default ClientPage
