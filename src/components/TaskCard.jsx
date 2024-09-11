import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-green-200 text-black p-4 rounded-md max-w-sm mx-auto sm:max-w-full md:max-w-md">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold capitalize">
        {task.title}
      </h1>
      <p className="text-gray-500 text-xs sm:text-sm md:text-base">
        {task.description}
      </p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300 w-full sm:w-auto"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
