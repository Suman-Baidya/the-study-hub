
import React from 'react'

const page = async ({params}) => {

    const {id} = await params
  return (
    <div>
      Product Page {id}
    </div>
  )
}

export default page
