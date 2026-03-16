import TaskItem from "./TaskItems";



interface Task {
  id: number;
  title: string;
  status: string;
}

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="mt-4 text-gray-500">No tasks to show.</p>;
  }

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.title} status={task.status} />
      ))}
    </ul>
  );
}