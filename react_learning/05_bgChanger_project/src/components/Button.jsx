import React from 'react'

const Button = ({btnName = "Black", textColor = "white"}) => {
  return (
    <div>
      <button
        style={{backgroundColor: btnName, color: textColor}}
        className='min-w-22 py-1.5 rounded-xl font-semibold cursor-pointer'
      >{btnName}</button>
    </div>
  )
}

export default Button
