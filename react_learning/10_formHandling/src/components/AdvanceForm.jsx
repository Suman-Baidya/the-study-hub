import { useState } from 'react'

const AdvanceForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        gender: "",
        country: "",
        terms: false
    })

    function handleSubmit(e){
        e.preventDefault()
        setFormData({
            username: "",
            gender: "",
            country: "",
            terms: false
        })

        console.log(formData)        
    }

    function handleInputValue(e){
        const {name, value, type, checked} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))

    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-start gap-2 bg-gray-800 p-5 rounded'>
        <h2 className='text-green-400 font-bold text-xl'>Form with Checkbox, Radio & Select</h2>
        <div className="flex mt-5 gap-2 items-center justify-center">
            <label htmlFor="username">Username: </label>
            <input 
                type="text" 
                id="username" 
                name="username" 
                className='border rounded'
                value={formData.username}
                onChange={handleInputValue}
            />
        </div>
        <div className="flex mt-5 gap-2 items-center justify-center">
            <label htmlFor="male">Male </label>
            <input 
                type="radio" 
                id="male" 
                value="Male"
                name="gender" 
                className='border rounded'
                checked={formData.gender === "Male"}
                onChange={handleInputValue}
            />
            <label htmlFor="female">Female </label>
            <input 
                type="radio" 
                id="female" 
                value="Female"
                name="gender" 
                className='border rounded'
                checked={formData.gender === "Female"}
                onChange={handleInputValue}
            />
        </div>
        <div className="flex mt-5 gap-2 items-center justify-center">
            <label htmlFor="country">Country: </label>
            <select 
                name="country" 
                value={formData.country} 
                onChange={handleInputValue} 
                className='border rounded bg-black text-white px-2'>
                    <option value="">Select a country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
            </select>
        </div>

        <div className="flex mt-5 gap-2 items-center justify-center">
            <input 
                type="checkbox" 
                id="terms" 
                name="terms" 
                className='border rounded'
                checked={formData.agree}
                onChange={handleInputValue}
            />
            <label htmlFor="terms"> I agree to terms and conditions </label>
        </div>

        <div>
            <button type='submit' className='border py-1 px-4 rounded mt-5'>Submit</button>
        </div>
        
    </form>
  )
}

export default AdvanceForm
