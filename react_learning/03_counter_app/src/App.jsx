import { useState } from 'react'
import './App.css'
import BasicCounter from '../app/basicCounter'
import CounterLevOne from '../app/CounterLevOne'

function App() {
  let [counterOneBtn, setCounterOneBtn] = useState(false)
  let [counterTwoBtn, setCounterTwoBtn] = useState(false)

  function toggleFunctionOne(){
    setCounterOneBtn(prev=>!prev)
  }
  function toggleFunctionTwo(){
    setCounterTwoBtn(prev=>!prev)
  }

  let counterOneDisplay;
  let counterTwoDisplay;

  if (counterOneBtn) {
    counterOneDisplay = <BasicCounter />
  }
  
  if(counterTwoBtn){
    counterTwoDisplay = <CounterLevOne />
  }

  return(
    <>
      <h1 className='font-bold'>Counter App</h1>
      <div className='flex gap-4 mt-6 justify-center item-center'>
        <button onClick={toggleFunctionOne}>Counter Level 1</button>
        <button onClick={toggleFunctionTwo}>Counter Level 2</button>
      </div>
      
      <div className='flex gap-3 flex-wrap justify-center item-center'>
        {counterOneDisplay}
        {counterTwoDisplay}
      </div>

    </>
  )
}

export default App
