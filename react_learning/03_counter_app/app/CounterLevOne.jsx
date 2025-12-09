import React, { useState } from 'react'

const CounterLevOne = () => {
    let [counterNum, setCounterNum] = useState(0)
    let [inputValue, setInputValue] = useState(0)

    function increaseHandle(){
        setCounterNum(counterNum + 1)
    }
    
    function decreaseHandle(){
        setCounterNum((prev)=> Math.max(prev-1, 0))
    }

    function resetHandle(){
        setCounterNum(counterNum = 0)
    }

    function inputBtnHandle(){
        setCounterNum(counterNum = inputValue)
        setInputValue(0)
    }

    function inputChangeHandler(e){
        setInputValue(Number(e.target.value))
    }

    

  return (
    
    <>
        <div className='w- flex flex-col gap-3 mt-5 border border-green-400 rounded-xl p-4'>
            <p className='text-sm -mb-4 text-gray-500'>Level: 02</p>
            <span className='text-green-400 text-4xl font-bold mb-4'>React for Next JS</span>
            <h2>Counter Value: <span className='text-2xl font-bold text-yellow-400'> {counterNum} </span></h2>
            <p className='text-red-400'>{"hello"}</p>

            <div className='flex gap-2'>
                <button onClick={increaseHandle}>Increase +</button>
                <button onClick={decreaseHandle}>Decrease -</button>
                <button onClick={resetHandle}>Reset ~</button>
            </div>
            <div className='flex justify-center item-center gap-2'>
                <input type="text" className='border rounded p-1 px-2' value={inputValue} onChange={inputChangeHandler} />
                <button onClick={inputBtnHandle}>Set to {inputValue}</button>
            </div>
        </div>
    </>
  )
}

export default CounterLevOne
