
interface TaskItemProps {
  title: string;
  status: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "#15803d";
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
      <li className="flex justify-between items-center p-4 border rounded shadow-sm hover:bg-gray-50grid w-full grid-cols-[auto_1fr] items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition duration-150 border-orange-700/20 bg-orange-100/10">
        <span>{title}</span>
        <span
          className="px-2 py-1 rounded-full text-white text-sm"
          style={{ backgroundColor: getStatusColor(status) }}
        >
          {status}
        </span>
      </li>
  );
}