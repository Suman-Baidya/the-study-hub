import React from 'react'
import useMyStore from './store'
import Navbar from './components/Navbar'

const App = () => {

  // const state = useMyStore()
  

  // function handleNotify(){
  //   state.increment()
  // }
  // const handleCapitalize = () =>{
  //   state.capitalizeName()
  // }
  // const handleUpperCase = ()=>{
  //   state.upperCase()
  // }

  const count = useMyStore(state => state.count)
  const name = useMyStore(state => state.name)
  const increment = useMyStore(state => state.increment)
  const capitalize = useMyStore(state => state.capitalizeName)
  const upperCase = useMyStore(state => state.upperCase)

  return (
    <>
    <Navbar />
    <div className='flex flex-col gap-8 items-center h-screen bg-gray-900 text-white pt-8'>
      <h1 className='text-3xl font-bold'>Hello Zustand</h1>
      <div className='flex flex-col gap-2 items-center'>
        <p>{name}</p>
        <p>Notification: {count}</p>
        <div className='flex gap-2'>
            <button onClick={increment} className='border rounded px-3 py-1'>Notify One</button>
            <button onClick={capitalize} className='border rounded px-3 py-1'>Capitalize Name</button>
            <button onClick={upperCase} className='border rounded px-3 py-1'>Upper Case Name</button>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
