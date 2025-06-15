import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import * as taskService from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleAdd = async (task) => {
    const res = await taskService.addTask({ ...task, completed: false });
    setTasks([...tasks, res.data]);
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
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}
export default App;
