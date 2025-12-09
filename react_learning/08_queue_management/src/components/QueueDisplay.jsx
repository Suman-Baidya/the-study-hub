import React from 'react'

const QueueDisplay = ({queues, updateStatus, removeFromQueue}) => {
    const getStatusColor = (status) => {
        switch(status) {
            case "waiting":
                return "text-yellow-500";
            case "serving":
                return "text-blue-500";
            case "completed":
                return "text-green-500";
            default:
                return "text-gray-500";
        }
    }
  return (
    <div className="bg-slate-700 p-4 rounded-lg flex flex-col gap-3 min-w-full lg:min-w-[700px]">
      <h2 className="text-2xl font-bold text-blue-400">Queue Display</h2>
      {queues.length === 0 ? (
        <p className="text-center text-gray-400">No customers in the queue.</p>
      ) : (
        <div className="flex flex-col gap-2">
            {queues.map((queue) => (
                <div key={queue.id} className="flex justify-between items-center border-b border-gray-600 bg-black/80 px-4 rounded py-2">
                    <div>
                        <h3 className="text-lg font-semibold text-white">{queue.name}</h3>
                        <p className="text-gray-400">{queue.service}</p>
                        <span className={`${getStatusColor(queue.status)}`}>{queue.status}</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-2">
                            {queue.status == "waiting" && (
                                <button 
                                    className={`${getStatusColor(queue.status)} text-white px-3 py-1 rounded bg-blue-500 hover:bg-blue-600`}
                                    onClick={() => updateStatus(queue.id, "serving")}
                                >Serve</button>
                            
                            )}
                        </div>
                        <div className="flex gap-2">
                            {queue.status == "serving" && (
                                <button 
                                    className={`${getStatusColor(queue.status)} text-white px-3 py-1 rounded bg-green-800 hover:bg-green-600`}
                                    onClick={() => updateStatus(queue.id, "completed")}
                                >Complete</button>
                            
                            )}
                        </div>
                        <div className="flex gap-2">
                            <button 
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                onClick={() => removeFromQueue(queue.id)}
                            >Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      )}
        
    </div>
  )
}

export default QueueDisplay
