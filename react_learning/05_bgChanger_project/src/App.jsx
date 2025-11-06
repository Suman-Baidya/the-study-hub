import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  const [bgColor, setBgColor] = useState("olive")


  return (
    <>
      <div className='w-full h-screen flex justify-between items-center flex-col p-20'
      style={{backgroundColor: bgColor}}
      >
        <h1 className='text-4xl font-bold'>Background Color Change</h1>

        <h2 className='font-bold text-6xl'>Color is : {bgColor}</h2>

        <div className='flex gap-1 bg-amber-50 p-3 rounded-2xl'>
          {/* <Button btnName="Red" />
          <Button  btnName="Orange" textColor="black" />
          <Button btnName='Black' /> */}

          <button
            style={{backgroundColor: "red", color: "white"}}
            className='min-w-22 py-1.5 rounded-xl font-semibold cursor-pointer'
            onClick={() => setBgColor("red")}
            >
              Red
            </button>
          <button
            style={{backgroundColor: "black", color: "white"}}
            className='min-w-22 py-1.5 rounded-xl font-semibold cursor-pointer'
            onClick={() => setBgColor("black")}
            >
              Black
            </button>
          <button
            style={{backgroundColor: "green", color: "white"}}
            className='min-w-22 py-1.5 rounded-xl font-semibold cursor-pointer'
            onClick={() => setBgColor("green")}
            >
              Green
            </button>
          <button
            style={{backgroundColor: "yellow", color: "black"}}
            className='min-w-22 py-1.5 rounded-xl font-semibold cursor-pointer'
            onClick={() => setBgColor("yellow")}
            >
              Yellow
            </button>
          <button
            style={{backgroundColor: "blue", color: "white"}}
            className='min-w-22 py-1.5 rounded-xl font-semibold cursor-pointer'
            onClick={() => setBgColor("blue")}
            >
              Blue
            </button>
        </div>
      </div>
    </>
  )
}

export default App
