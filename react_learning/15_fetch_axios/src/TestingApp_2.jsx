import React, { useState } from 'react'
import axios from 'axios'

const TestingApp_2 = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState({
        name: '',
        age: ''
    })

    const handleInput = (e)=>{
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }
    
    const fetchData = async () => {
        const response = await axios({
            url: 'https://694a1f901282f890d2d7abba.mockapi.io/users'
        })

        setUsers(response.data)

        console.log('running')
    }

    const postData = async () => {
        if(!userDetails.name || !userDetails.age){
            alert("Fill all details")
            return
        }
        await axios({
            url: 'https://694a1f901282f890d2d7abba.mockapi.io/users',
            method: 'post',
            data: userDetails
        })

        setUserDetails({
            name: '',
            age: ''
        })

        fetchData()
    }

    const editData = async (user) =>{
        setUserDetails({...user, editMode: true})
    }

    const saveData = async ()=>{
        await axios({
            url: `https://694a1f901282f890d2d7abba.mockapi.io/users/${userDetails.id}`,
            method: 'put',
            data: userDetails
        })

        setUserDetails({
            name: '',
            age: ''
        })

        fetchData()
    }


    const deleteData = async (id) => {
        await axios({
            url: `https://694a1f901282f890d2d7abba.mockapi.io/users/${id}`,
            method: 'delete'
        })
        fetchData()
    }


  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold">Second Testing App</h1>
      <div>
        <div className='flex flex-col gap-2 mb-4'>
            <input
                type="text" 
                placeholder='Name'
                name='name'
                value={userDetails.name}
                onChange={handleInput}
                className='border rounded p-1'
            />
            <input
                type="number" 
                placeholder='Age'
                name='age'
                value={userDetails.age}
                onChange={handleInput}
                className='border rounded p-1'
            />
        </div>
        <div className="flex gap-4">
            {/* <button onClick={fetchData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Fetch Data
            </button> */}

            {userDetails.editMode ?
                <button onClick={saveData} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Save Data
                </button>
            :
                <button onClick={postData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Post Data
                </button>
            }
            
        </div>
        <div className="mt-4 w-96 border border-gray-700 flex flex gap-2 flex-wrap p-4 justify-center">
          {users.map(user => (
            <div key={user.id} className="border border-gray-700 py-2 flex flex-col gap-1 px-4 mb-2 justify-center">
              <p><span className="font-semibold">ID:</span> {user.id}</p>
              <p><span className="font-semibold">Name:</span> {user.name}</p>
              <p><span className="font-semibold">Age:</span> {user.age}</p>
              <div className='flex justify-between gap-2'>
                <button 
                    onClick={()=>{editData(user)}}                
                    className='border border-green-400 text-green-400 px-2 rounded active:text-green-800 active:border-green-800'
                >
                    Edit
                </button>
                <button 
                    onClick={()=>{deleteData(user.id)}}
                    className='border border-red-400 text-red-400 px-2 rounded active:text-red-800 active:border-red-800'
                >
                    Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestingApp_2
