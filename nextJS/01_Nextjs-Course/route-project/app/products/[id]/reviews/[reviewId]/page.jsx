import React from 'react'

const page = async ({params}) => {
    const {id, reviewId} = await params
  return (
    <div>
      <h1>Review Page </h1>
      <p>{id} : {reviewId}</p>
    </div>
  )
}

export default page
