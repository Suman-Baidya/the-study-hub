import { FaTrash } from "react-icons/fa";


const ExpenseItem = ({expenceItem, deleteExpenseData}) => {
  return (
    <div key={expenceItem.id} className='bg-purple-900 flex gap-4 p-1 px-3 rounded justify-between'>
      <h2 className='min-w-75 font-semibold'>{expenceItem.title}</h2>
      <h3 className='font-semibold text-green-400'>₹ {expenceItem.amount}</h3>
      <button 
        onClick={() => deleteExpenseData(expenceItem.id)} 
        className='text-red-400 active:text-red-600'>
            <FaTrash />
        </button>
    </div>
  )
}

export default ExpenseItem
