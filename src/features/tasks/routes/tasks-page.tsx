import { useState } from "react";
import TaskList from "../components/TaskList";

type Task = {
  id: number;
  title: string;
  status: "Completed" | "In Progress" | "Pending" | "Overdue";
};

const dummyTasks: Task[] = [
  { id: 1, title: "Learn JavaScript", status: "Completed" },
  { id: 2, title: "Build Task Manager", status: "In Progress" },
  { id: 3, title: "Apply GSOC", status: "Pending" },
  { id: 4, title: "Learn React", status: "In Progress" },
  { id: 5, title: "Cook Yams", status: "Pending" },
  { id: 6, title: "Bash Projects", status: "Overdue" },
];

export default function TasksPage() {
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);
  const [view, setView] = useState<"list" | "card">("list");
 

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  const deleteTasks = (id: number) => {
    setTasks((prevTasks: Task[]) => prevTasks.filter((task) => task.id !== id));
  };


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      <button
        onClick={() => setView("list")}
        className={`px-3 py-1 border rounded transition cursor-pointer mr-4 ${
          view === "list" ? "bg-blue-500 text-white border-blue-500" 
          : "bg-white text-gray-700 border-gray-300"
        }`}
      >
        List View
      </button>
      <button
        onClick={() => setView("card")}
        className={`px-3 py-1 border rounded transition cursor-pointer ${
          view === "card" ? "bg-blue-500 text-white border-blue-500" 
          : "bg-white text-gray-700 border-gray-300"
        }`}
      >
        Card View
      </button>

    

      <div className="flex gap-2 mb-6 mt-4">
        {["All", "Completed", "In Progress", "Pending", "Overdue"].map(
          (status) => (
            <button
              key={status}
              type="button"
              aria-pressed={filter === status}
              onClick={() => setFilter(status)}
              className={`px-4 py-1 rounded-full font-medium border cursor-pointer ${
                filter === status
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {status}
            </button>
          ),
        )}
      </div>

      <TaskList tasks={filteredTasks} onDelete={deleteTasks} view={view} />
    </div>
  );
}
