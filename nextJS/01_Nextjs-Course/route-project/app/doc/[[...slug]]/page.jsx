import React from 'react'

const page = async ({params}) => {
    const {slug} = await params
    console.log(slug)
  return (
    <div>
      <h1>Documentation</h1>
      <p>{slug?.join('-')}</p>
    </div>
  )
}

export default page
