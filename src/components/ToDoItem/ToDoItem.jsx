import './ToDoItem.css';

export default function ToDoItem({ id, title, taskStatus, setAsDone, deleteTask }) {
  const backgroundColor = taskStatus ? "lightgreen" : "lightpink";

  return (
    <div className="task" style={{ backgroundColor }}>
      <p className="taskId">Task id: {id}</p>
      <p className="title">Title: {title}</p>
      <p className="status">Status: {taskStatus ? "done" : "not done"}</p>
      {!taskStatus && <button onClick={() => setAsDone(id)}>Done</button>}
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}
