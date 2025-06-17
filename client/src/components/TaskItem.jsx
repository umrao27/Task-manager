function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task)} />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
export default TaskItem;
