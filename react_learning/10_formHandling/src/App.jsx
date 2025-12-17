import React from 'react'
import UseRefForm from './components/UseRefForm'
// import AdvanceForm from './components/AdvanceForm'


const App = () => {
  return (
    <div className='flex flex-wrap justify-center items-center flex-col gap-5'>
      <h1 className='text-3xl font-bold'>Form Handling</h1>
      {/* <AdvanceForm /> */}
      <UseRefForm />
    </div>
  )
}

export default App
