import { useState } from "react";
import {FaUserPlus} from "react-icons/fa";

export default function QueueForm({onAdd}) {
    const [name, setName] = useState("");
    const [service, setService] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //validation
        if(!name.trim() || !service.trim()) return;

        onAdd({name, service});
        setName("");
        setService("");
    }

  return (
    <>
        <form className="bg-slate-700 p-4 rounded-lg flex flex-col gap-3 min-w-[350px]" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-blue-400">Add to Queue</h2>
            <div className="flex flex-col gap-1 border rounded p-2 bg-black/80">
                <input
                    className="border-none outline-none"
                    placeholder="Customer Name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    type="text" />
            </div>
            <div className="flex flex-col gap-1 border rounded p-2 bg-black/80">
                <select
                    className="border-none outline-none bg-black/80"
                    value={service} 
                    onChange={(e) => setService(e.target.value)}>
                    <option value="">Select Service</option>
                    <option value="consultation">Consultation</option>
                    <option value="payment">Payment</option>
                    <option value="support">Support</option>
                </select>
            </div>
            <div className="bg-blue-500 p-2 rounded hover:bg-blue-600 transition-colors flex justify-center">
                <button className="flex items-center justify-center gap-1 font-semibold w-full" type="submit">
                    <FaUserPlus /> Add to Queue
                </button>
            </div>
        </form>
    </>
  );
}