import React from 'react'

const Card = ({title, image, description}) => {

  return (
    <div>
      <div className="border-sm w-[400px] bg-amber-900 my-1 rounded-2xl flex flex-col justify-between items-center gap-2.5 p-2.5">
        <h1 className='font-bold'>{title}</h1>
        <div>
            <img className='overflow-hidden  h-[150px]' src={image} alt={title} />
        </div>
        <p className='font-sm'>{description}</p>
      </div>
    </div>
  )
}

export default Card
