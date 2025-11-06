import React, { useState, useCallback, useEffect, useRef } from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charcterAllowed, setCharcterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charcterAllowed) str+= "!@#$%^&*()_-+={}[]?/~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charcterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charcterAllowed, passwordGenerator])

  return (
    <div className='bg-black w-full h-screen flex justify-center items-center flex-col'>
      <h1 className='text-amber-400 text-3xl font-bold'>Password Generator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 px-6 my-4 text-white bg-gray-700 text-center">
        <div className="flex shadow-amber-50 shadow-2xs rounded-lg overflow-hidden mb-4 border-2">
          <input
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3 text-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}    
            />
            <button
            onClick={copyPasswordToClipboard}
            className='bg-red-800 px-2.5 cursor-pointer hover:bg-red-700'>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2 justify-between">
            <div className="flex items-center gap-x-1">
                <input
                 type="range" 
                 min={6}
                 max={100}
                 className='cursor-pointer'
                 value={length}
                 onChange={(e)=>{setLength(e.target.value)}}                 
                 />
                 <label htmlFor="">Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox" 
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=>{
                  setNumberAllowed(prev => !prev)
                }}
                />
                <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox" 
                defaultChecked={charcterAllowed}
                id="characterInput"
                onChange={()=>{
                  setCharcterAllowed(prev => !prev)
                }}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
