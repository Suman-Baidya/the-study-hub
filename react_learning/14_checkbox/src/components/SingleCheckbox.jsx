import React from 'react'
import { useState } from 'react'

const SingleCheckbox = () => {
    const [ischecked, setIshecked] = useState(true)
  return (
    <div>
        <label htmlFor="check" className='flex items-center gap-3 cursor-pointer'>
          <input 
            type="checkbox" 
            id='check' 
            className='w-5 h-5'
            checked={ischecked}
            onChange={(e)=>{
              setIshecked(e.target.checked)
            }}
          />
          Terms and Conditions
        </label>

        {ischecked && <h1 className='text-2xl text-green-400 font-bold '>Congrachulation, Now you are our member!</h1>}
    </div>
  )
}

export default SingleCheckbox
