
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);
  let [message, setMessage] = useState("")

  const addValue = ()=>{
    if(counter<20){
      setCounter(counter = counter+1)
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
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <p>{message}</p>

      <button onClick={addValue}>Increment: {counter}</button>
      <p></p>
      <button onClick={removeValue}>Decrement: {counter}</button>
    </>
  )
}

export default App
