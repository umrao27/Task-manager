import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ul>
  );
}
export default TaskList;
