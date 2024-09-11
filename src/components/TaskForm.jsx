import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-sm mx-auto sm:max-w-md md:max-w-lg">
      <form
        onSubmit={handleSubmit}
        className="bg-green-300 p-6 sm:p-8 md:p-10 mb-4 rounded-md"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 text-center">
          Crear Tarea
        </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-100 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Ecribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-100 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 sm:py-2 sm:px-4 text-white hover:bg-blue-300 rounded-md w-full sm:w-auto">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
