import axios from 'axios'
import React from 'react'

const TestingApp = () => {

  // const fetchData = async ()=>{

    //********************* Using fetch() & async-await *********************/
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await response.json()
    // console.log(data)


    //********************* Using fetch() & then *********************/
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((respnse)=>respnse.json())
    // .then(data => console.log(data))

    
    //********************* Using axios *********************/
    // const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(data.data)


  //   console.log("proper running")
  // }


  const config = {
    url: '/todos',
    baseURL: 'https://jsonplaceholder.typicode.com'
    // headers:{
    //   Accept: 'application/json',
    //   Authority: 'Bearer token_value_here'
    // },
    // timeout: '100'
    // params:{
    //   name: 'Suman'
    // }
  }

  const fetchData = async () => {
    const response = await axios(config)




    console.log(response)
    console.log("running")
  }



  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col gap-4 items-center justify-center">
      
      <h1 className="text-2xl font-bold text-gray-200">Testing of Fetch & Axios</h1>
      <div>
        <button onClick={fetchData} className='border rounded px-4 py-2 hover:bg-gray-800 active:bg-gray-700'>Fetch Data</button>
      </div>

    </div>
  )
}

export default TestingApp
