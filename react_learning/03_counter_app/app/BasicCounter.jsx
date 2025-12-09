import React, { useState } from 'react'


const BasicCounter = () => {

  let [counter, setCounter] = useState(5);
  let [message, setMessage] = useState("")

  const addValue = ()=>{
    if(counter<20){
      
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      

      setMessage(message = "")
    }else{
      setMessage(message = "Too long value")
    }
  }
  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter = counter-1)
      setMessage(setMessage = "")
    }else{
      setMessage(message = "Negetive value not accepted")
    }
  }

  return (
    <>
        <div className='w- flex flex-col gap-3 mt-5 border border-blue-400 rounded-xl p-4'>
            <p className='text-sm -mb-4 text-gray-500'>Level: 01</p>
            <span className='text-blue-400 text-4xl font-bold mb-4'>Chai Aur React</span>
            <h2>Counter Value: <span className='text-2xl font-bold text-yellow-400'> {counter} </span></h2>
            <p className='text-red-400'>{message}</p>

            <button onClick={addValue}>Increment: {counter}</button>
            <button onClick={removeValue}>Decrement: {counter}</button>
        </div>
    </>
  )
}

export default BasicCounter
