import React from 'react'
import { useState } from 'react'

const SelectAll = () => {
    // const [allSelect, setAllSelect] = useState(false)
    const [languages, setLanguages] = useState({
        javascript: true,
        python: true,
        cPlusPluss: false,
        java: false,
        php: true,
        goLang: false,
        cSharp: false
    })

    function checkHandle(e){
        let key = e.target.name
        let value = e.target.checked

        setLanguages({
            ...languages,
            [key]: value
        })

    }

    function checkLanguageComponent(name){
        return (
            <label htmlFor={name} className='flex items-center gap-2 cursor-pointer text-white'>
                <input 
                    type="checkbox" 
                    name={name}
                    id={name}
                    checked={languages[name]}
                    className='w-5 h-5'
                    onChange={checkHandle}
                />
                {name.toUpperCase()}
            </label>
        )
    }

    const selectedLanguageKey = []
    for (let key in languages){
        if(languages[key]) selectedLanguageKey.push(key);
    }

    let isAllSelect = Object.values(languages).every(item => item===true)

    function handleSelectAll(e){
        setLanguages({
            javascript: e.target.checked,
            python: e.target.checked,
            cPlusPluss: e.target.checked,
            java: e.target.checked,
            php: e.target.checked,
            goLang: e.target.checked,
            cSharp: e.target.checked
        })
    }
    

  return (
    <div className='flex gap-20 items-center'>

      <div className='flex flex-col gap-2'>
        <label htmlFor="selectall"className='flex items-center gap-2 cursor-pointer text-white text-lg font-semibold'>
            Select All
            <input 
                type="checkbox" 
                name='selectall'
                id='selectall'
                className='w-6 h-6'
                checked={isAllSelect}
                onChange={handleSelectAll}
            />
        </label>
        {/* {checkLanguageComponent("java")}
        {checkLanguageComponent("javascript")} */}

        {Object.keys(languages).map(key=>(
            checkLanguageComponent(key)
        ))}
      </div>

      <div className='flex flex-col bg-gray-700 p-4 rounded-lg'>
        <h3 className='font-bold text-lg text-yellow-400 mb-2'>Your known language are: </h3>
        {selectedLanguageKey.map((lang, index)=>(
            <p key={index}><span className='text-yellow-300'>{index+1}.</span> {lang.toLocaleUpperCase()}</p>
        ))}
      </div>
    </div>
  )
}

export default SelectAll
