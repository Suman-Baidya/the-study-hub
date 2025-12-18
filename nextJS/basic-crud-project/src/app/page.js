"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  const fetchStudents = async () => {
    const res = await fetch("/api/students");
    setStudents(await res.json());
  };

  const addStudent = async () => {
    await fetch("/api/students", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    setName("");
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await fetch(`/api/students/${id}`, { method: "DELETE" });
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Student CRUD</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
      />
      <button onClick={addStudent}>Add</button>

      <ul>
        {students.map((s) => (
          <li key={s._id}>
            {s.name}
            <button onClick={() => deleteStudent(s._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
