import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import  Button  from "../component/Button";
import { Input } from "../component/Input1";
import { Select, SelectItem} from "../component/Select";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");
  const [filter,setFilter] = useState("All");

  const addTask = (e) => {
    e.preventDefault();
    if (!title || !deadline) return;
    const newTask = { id: uuidv4(), title, priority, deadline };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDeadline("");
    setPriority("Medium");
  };
  // const filterTasks=tasks.filter(task => filter ==="All" || task.priority === filter);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Task Manager</h1>

      <form onSubmit={addTask} className="space-y-2">
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" />
        <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <SelectItem value="Low">Low</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="High">High</SelectItem>
        </Select>
        <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        
        <Button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Add Task</Button>
        </form>

      <div className="mt-4">
              <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="High">High Priority</SelectItem>
                <SelectItem value="Medium">Medium Priority</SelectItem>
                <SelectItem value="Low">Low Priority</SelectItem>
              </Select>
        </div>
      
      <div className="mt-4 space-y-2">
        {tasks.map(task => (
          <div key={task.id} className="p-2 border rounded-md">
            <h2 className="font-medium">{task.title}</h2>
            <p className="text-sm text-gray-500">Priority: {task.priority} | Deadline: {task.deadline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}