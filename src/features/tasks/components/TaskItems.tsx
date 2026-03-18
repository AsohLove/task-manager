
interface TaskItemProps {
  title: string;
  status: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "#22c55eb3";
    case "In Progress":
      return "#1d4ed8";
    case "Pending":
      return "#b45309";
    default:
      return "#475569";
  }
};

export default function TaskItem({ title, status }: TaskItemProps) {
  return (
    <li className="flex justify-between text-xl items-center my-3 p-4 gap-4 w-full rounded shadow-sm hover:bg-gray-50">
      <span>{title}</span>
      <span
        className="px-2 py-2 rounded-full text-white text-sm"
        style={{ backgroundColor: getStatusColor(status) }}
      >
        {status}
      </span>
    </li>
  );
}