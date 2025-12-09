import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {
  const [queues, setQueues] = useState([]);

  const addToQueue = (customer)=>{
    setQueues([...queues, {...customer, id: Date.now(), status: "waiting"}]);
  }

  const updateStatus = (id, newStatus)=>{
    setQueues(queues.map(queue => queue.id === id ? {...queue, status: newStatus} : queue
    ));
  }

  const removeFromQueue = (id)=>{
    setQueues(queues.filter(queue => queue.id !== id));
  }

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <header className="text-center flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-blue-500">Queue Management System</h1>
        <p>Manage your queues efficiently and effectively.</p>
      </header>
      <main className="flex flex-wrap items-center gap-6 w-full justify-center">
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay queues={queues} updateStatus={updateStatus} removeFromQueue={removeFromQueue} />
      </main>
    </div>
  );
}