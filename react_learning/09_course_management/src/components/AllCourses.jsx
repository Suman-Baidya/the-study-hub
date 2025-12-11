import React from 'react'
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const AllCourses = ({courses, deleteCourse, updateCourse}) => {

  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <h2 className='text-4xl text-green-400 font-bold'>All Courses</h2>
      <div className='flex gap-3 flex-wrap justify-center items-center'>
        {courses.map((course, index)=>(
            <div key={index} className='flex flex-col gap-3 w-[300px] p-4 bg-gray-700 rounded-md shadow hover:shadow-yellow-200'>
                <img src={course.imageUrl} alt={course.courseName} className='w-fit' />
                <h4 className='text-yellow-500 font-semibold text-lg'>{course.courseName}</h4>
                <p className='text-sm text-gray-300'>{course.courseDetails}</p>
                <div className='flex justify-between items-center'>
                    <span className='text-[18px] text-blue-300 font-semibold'>₹ {course.price}</span>
                    <div className='flex gap-2 items-center'>
                        <button onClick={()=>updateCourse(course.id, {price: Number(course.price) + 1000})}><FaEdit /></button>
                        <button onClick={()=> deleteCourse(course.id)}><FaTrashAlt /></button>
                    </div>
                </div>
                
            </div>
        ))}
      </div>

    </div>
  )
}

export default AllCourses
