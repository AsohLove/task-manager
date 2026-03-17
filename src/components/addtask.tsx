import { useState } from "react";

type Task = {
  id: number;
  text: string;
};


export default function TaskApp() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] =  useState<Task[]>([]);
  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskInput
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  return (
    <div>
      <h2>Task List</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}