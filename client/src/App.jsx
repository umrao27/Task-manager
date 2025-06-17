import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import * as taskService from "./services/taskService";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    taskService.getTasks().then((res) => setTasks(res.data));
  }, []);

const handleAdd = async (task) => {
  try {
    const res = await taskService.addTask(task); 
    setTasks((prev) => [...prev, res.data]);
  } catch {
    setError("Failed to add task please try again.");
  }
};

  const handleDelete = async (id) => {
    await taskService.deleteTask(id);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggle = async (task) => {
    const updated = { ...task, completed: !task.completed };
    const res = await taskService.updateTask(updated);
    setTasks(tasks.map((t) => (t.id === task.id ? res.data : t)));
  };
  return (
    <div className="container">
      <h1>Task Manager</h1>
      {error && <div className="error">{error}</div>}
      <TaskForm onSubmit={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}
export default App;
