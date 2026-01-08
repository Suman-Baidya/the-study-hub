import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link href={"/dashboard/reports"}>Go to Reports</Link>
      <br />
      <Link href={"/profile"}>Go to Profile</Link>
    </div>
  )
}

export default page
