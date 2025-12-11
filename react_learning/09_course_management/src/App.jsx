import React from 'react'
import AddCourse from './components/AddCourse'
import AllCourses from './components/AllCourses'

const App = () => {
  const [courses, setCourses] = React.useState([
    {
      imageUrl: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto",
      courseName: "Learn JavaScript",
      courseDetails: "JavaScript (JS) is a high-level, interpreted programming language primarily known as the scripting language for web pages.",
      price: "2999"
    }
  ]);

  function createCourse(data){
    setCourses([...courses, {...data, id:Date.now()}])
  }

  function deleteCourse(id){
    setCourses(courses.filter(courseData => courseData.id !== id))
  }

  function updateCourse(id, updatedData){
    setCourses(courses.map(courseData => courseData.id === id ? {...courseData, ...updatedData} : courseData));
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4 px-20'>
      <header className='text-center'>
        <h1 className='text-6xl font-bold'>Our Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </header>
      <main className='flex flex-col gap-10 w-full items-center justify-center md:flex-row'>

        <div className='w-full min-w-[300px] border-r md:w-1/4 fixed top-0 left-0 h-full bg-gray-800 py-10 px flex flex-col gap-6 justify-center items-center'>
          <AddCourse createCourse={createCourse} />
        </div>

        <div className='w-full pl-[400px] p-4 rounded-md'>
          <AllCourses courses={courses} deleteCourse={deleteCourse} updateCourse={updateCourse} />
        </div>

      </main>      
    </div>
  )
}

export default App
