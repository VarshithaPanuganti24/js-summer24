import { useState } from "react";

import "./App.css";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  //const [ editid, setEditId ] =useState<number |null>(null);

  const handleAdd = () => {
    if (!input.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggle = (id: number) => {
    console.log("Toggling task", id);
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-20 bg-white rounnded-xl shadow-md ">
      <h1 className="font-bold text-2xl mb-4 text-center"> To-Do List</h1>

      <div className="flex gap-2 p-20 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="flew-grow px-4 py-20 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className=" space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center bg-gray-100 p-3 rounded-md shadow-sm"
          >
            {/* <span className="text-lg">•</span> */}
            <span
              onClick={() => handleToggle(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "red" : "green",
              }}
              className={"flex-1 cursor-pointer "}
            >
              {task.text}
            </span>
            <button
              onClick={() => handleDelete(task.id)}
              className="text-red-500 hover:underline ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
