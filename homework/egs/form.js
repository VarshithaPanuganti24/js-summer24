// import React, { useState } from "react";



// export default function  FeedbackForm()  {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     gender: "Male",
//     subscribe: false,
//     rating: "",
//     comments: "",
//   });
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Feedback Form</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-medium">Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Gender:</label>
//             <div className="flex gap-4">
//               {["Male", "Female", "Other"].map((gender) => (
//                 <label key={gender} className="flex items-center">
//                   <input
//                     type="radio"
//                     name="gender"
//                     value={gender}
//                     checked={formData.gender === gender}
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   {gender}
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="subscribe"
//                 checked={formData.subscribe}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               Subscribe to Newsletter
//             </label>
//           </div>
//           <div>
//             <label className="block font-medium">Rating:</label>
//             <div className="flex gap-2">
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <label key={num} className="flex items-center">
//                   <input
//                     type="radio"
//                     name="rating"
//                     value={num}
//                     checked={formData.rating === String(num)}
//                     onChange={handleChange}
//                     className="mr-1"
//                   />
//                   {num}
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div>
//             <label className="block font-medium">Additional Comments:</label>
//             <textarea
//               name="comments"
//               value={formData.comments}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-lg"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//       {submittedData && (
//         <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mt-6">
//           <h3 className="text-lg font-bold">Submitted Feedback</h3>
//           <p>
//             <strong>Name:</strong> {submittedData.name}
//           </p>
//           <p>
//             <strong>Email:</strong> {submittedData.email}
//           </p>
//           <p>
//             <strong>Gender:</strong> {submittedData.gender}
//           </p>
//           <p>
//             <strong>Subscribed:</strong>{" "}
//             {submittedData.subscribe ? "Yes" : "No"}
//           </p>
//           <p>
//             <strong>Rating:</strong> {submittedData.rating}
//           </p>
//           <p>
//             <strong>Comments:</strong> {submittedData.comments}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }



///////////
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!title || !deadline) return;
    const newTask = { id: uuidv4(), title, priority, deadline, completed: false };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDeadline("");
    setPriority("Medium");
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const filteredTasks = tasks
    .filter(task =>
      filter === "All" ||
      (filter === "Completed" && task.completed) ||
      (filter === "Pending" && !task.completed) ||
      (filter === "High" && task.priority === "High") ||
      (filter === "Medium" && task.priority === "Medium") ||
      (filter === "Low" && task.priority === "Low")
    )
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Task Manager</h1>
      <div className="space-y-2">
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" />
        <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <SelectItem value="Low">Low</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="High">High</SelectItem>
        </Select>
        <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        <Button onClick={addTask}>Add Task</Button>
      </div>
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
        {filteredTasks.map(task => (
          <Card key={task.id} className="p-2 flex justify-between items-center">
            <div>
              <h2 className={`font-medium ${task.completed ? "line-through" : ""}`}>{task.title}</h2>
              <p className="text-sm text-gray-500">Priority: {task.priority} | Deadline: {task.deadline}</p>
            </div>
            <Checkbox checked={task.completed} onCheckedChange={() => toggleCompletion(task.id)} />
          </Card>
        ))}
      </div>
    </div>
  );
}
