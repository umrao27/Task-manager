function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task)} />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
export default TaskItem;
