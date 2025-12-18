import React, { useRef, useState } from 'react'

const ExpenseForm = ({addExpenseData}) => {
    let [title, setTitle] = useState("")
    let [amount, setAmount] = useState("")
    const titleRef = useRef()


    function handleSubmit(e){        
        e.preventDefault()
        if(!title || !amount) {return alert("Give a Valid Information")}

        const newData = {
            title,
            amount: Number(amount)
        }
        
        addExpenseData(newData)

        setTitle("")
        setAmount("")
        titleRef.current.focus()
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-wrap gap-2'>
        <input 
            type="text" 
            placeholder='Expense Title'
            name='title'
            value={title}
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
            className='border bg-black p-1 px-2 rounded' 
            ref={titleRef}           
        />

        <input 
            type="number" 
            placeholder='Amount ₹'
            name='amount'
            value={amount}
            onChange={(e)=>{
                setAmount(e.target.value)
            }}
            className='border bg-black p-1 px-2 rounded'            
        />

        <button type='submit' className='border rounded p-1 bg-black hover:bg-gray-800 active:bg-white active:text-gray-900'>Add Expense</button>
    </form>
  )
}

export default ExpenseForm
