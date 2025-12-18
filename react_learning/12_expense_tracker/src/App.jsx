import React, { useEffect, useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpensesData from './components/ExpensesData'

const App = () => {
  const [expenseData, setExpenseData] = useState(()=>{
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
  })
  
  useEffect(()=>{
    localStorage.setItem("expenses", JSON.stringify(expenseData))
  }, [expenseData])

  const total = expenseData.reduce((sum, item) => sum + item.amount, 0);

  function addExpenseData(data){
    setExpenseData([...expenseData, {...data, id:Date.now()}] )
  }

  function deleteExpenseData(id){
    setExpenseData(expenseData.filter(data=>data.id !== id))
  }



  return (
    <div className='bg-black text-white min-h-screen flex flex-col gap-5 justify-center items-center'>

      <div className='bg-gray-800 w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4 p-6 rounded-lg items-center'>

        <h1 className='text-4xl font-bold'>Expense Tracker</h1>

        <div>
          <ExpenseForm addExpenseData={addExpenseData} />
        </div>

        <div>
          <h4>Total ₹{total}</h4> 
        </div>

        <div>
          <ExpensesData expenseData={expenseData} deleteExpenseData={deleteExpenseData} />
        </div>

      </div>      
    </div>
  )
}

export default App
