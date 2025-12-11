import { useState } from 'react'

const AddCourse = ({createCourse}) => {
  const [formData, setFormData] = useState({
    courseName: "",
    imageUrl: "",
    courseDetails: "",
    price: ""
  })

  function onchangeHandle(e){
    const {name, value} = e.target
    setFormData((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  function formHandle(e){
    e.preventDefault()
    createCourse(formData)
    setFormData({
      courseName: "",
      imageUrl: "",
      courseDetails: "",
      price: ""
    });

  }
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <h2 className='text-4xl text-green-400 font-bold'>Add a New Course</h2>
      <form className='flex flex-col gap-3' onSubmit={formHandle}>
        <input
            type="text"
            value={formData.courseName}
            placeholder='Course Name'
            name="courseName"
            className='border rounded p-2'
            onChange={onchangeHandle}
        />
        <input 
            type="text"
            value={formData.imageUrl}
            placeholder='Image Url'
            name="imageUrl"
            className='border rounded p-2'
            onChange={onchangeHandle}
        />
        <textarea 
            name="courseDetails" id="courseDetails" cols="30" rows="5" placeholder='Course Details'
            value={formData.courseDetails}
            className='border rounded p-2'
            onChange={onchangeHandle}
        ></textarea>
        <input 
            type="number"
            value={formData.price}
            placeholder='Price ₹'
            name="price"
            className='border rounded p-2'
            onChange={onchangeHandle}
        />
        <button className='bg-green-400 text-black font-semibold p-2 rounded hover:bg-green-600 hover:text-white' type="submit">Add Course</button>
      </form>
    </div>
  )
}

export default AddCourse
