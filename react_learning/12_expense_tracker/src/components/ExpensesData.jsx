import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesData = ({expenseData, deleteExpenseData}) => {
  if(expenseData.length === 0){
    return <h2 className='text-center'>No Expenses Found</h2>
  }

  return (
    <div className='flex flex-col gap-2'>
      {expenseData.map((value)=>(
        <ExpenseItem expenceItem={value} deleteExpenseData={deleteExpenseData} />
      ))}
    </div>
  )
}

export default ExpensesData
