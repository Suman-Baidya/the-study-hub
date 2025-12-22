import React from 'react'
import { useState } from 'react'

const MultipleCheckbox = () => {
    const [ischecked, setIshecked] = useState({
        html: false,
        tailwind: false,
        javaScript: false,
        react: false
    })
    function isCheckedHandle(e){
        let key = e.target.name
        setIshecked({...ischecked, [key] : e.target.checked })
    }
  return (
    <div>
        <div className='flex gap-10'>
        <label htmlFor="html" className='flex justify-center items-center gap-1 cursor-pointer'>
            <input 
                name='html'
                id='html'
                type="checkbox" 
                checked={ischecked.html}
                className='w-5 h-5'
                onChange={isCheckedHandle}
            />
            HTML
        </label>
        <label htmlFor="tailwind" className='flex justify-center items-center gap-1 cursor-pointer'>
            <input 
                name='tailwind'
                id='tailwind'
                type="checkbox" 
                checked={ischecked.tailwind}
                className='w-5 h-5'
                onChange={isCheckedHandle}
            />
            Tailwind
        </label>
        <label htmlFor="javaScript" className='flex justify-center items-center gap-1 cursor-pointer'>
            <input 
                name='javaScript'
                id='javaScript'
                type="checkbox" 
                checked={ischecked.javaScript}
                className='w-5 h-5'
                onChange={isCheckedHandle}
            />
            JavaScript
        </label>
        <label htmlFor="react" className='flex justify-center items-center gap-1 cursor-pointer'>
            <input 
                name='react'
                id='react'
                type="checkbox" 
                checked={ischecked.react}
                className='w-5 h-5'
                onChange={isCheckedHandle}
            />
            React
        </label>

        </div>
        <div>
            <h1 className='text-2xl text-yellow-300 font-bold'>You Choose: </h1>
            <ol>
                {ischecked.html && <li>HTML</li>}
                {ischecked.tailwind && <li>Tailwind</li>}
                {ischecked.javaScript && <li>JavaScript</li>}
                {ischecked.react && <li>React</li>}
            </ol>
        </div>
    </div>
  )
}

export default MultipleCheckbox
