import { useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import AddTask from "../AddTask/AddTask";
import Dialog from "../Dialog/Dialog";
import './TodoList.css';

export default function TodoList() {
  const [myTasks, setMyTasks] = useState([
    { id: 1, title: "hw", taskStatus: true },
    { id: 2, title: "learn for the test", taskStatus: true },
    { id: 3, title: "go sleep", taskStatus: false }
  ]);

  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // הוספת משימה
  function addTaskTitle(newTitle) {
    if (!newTitle.trim()) return;
    const exists = myTasks.some(task => task.title.toLowerCase() === newTitle.toLowerCase());
    if (exists) {
      alert("This task already exists!");
      return;
    }

    setMyTasks([...myTasks, { id: Date.now(), title: newTitle, taskStatus: false }]);
    setDialogContent(<p>Task "{newTitle}" added successfully!</p>);
    setShowDialog(true);
    setTimeout(() => setShowDialog(false), 2000);
  }

  // סימון משימה כ־done
  function setAsDone(taskId) {
    setMyTasks(prev => prev.map(task =>
      task.id === taskId ? { ...task, taskStatus: true } : task
    ));
  }

  // פתיחת דיאלוג אישור למחיקה
  function confirmDelete(task) {
    setTaskToDelete(task);
    setDialogContent(
      <div>
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete "{task.title}"?</p>
        <div className="dialog-buttons">
          <button onClick={handleDeleteConfirm}>Confirm</button>
          <button onClick={closeDialog}>Cancel</button>
        </div>
      </div>
    );
    setShowDialog(true);
  }

  // מחיקה בפועל
  function handleDeleteConfirm() {
    if (!taskToDelete) return;

    setMyTasks(prev => prev.filter(task => task.id !== taskToDelete.id));
    setTaskToDelete(null);
    setShowDialog(false);
  }

  function closeDialog() {
    setShowDialog(false);
    setTaskToDelete(null);
  }

  return (
    <>
      {showDialog && (
        <Dialog
          backgroundColor="lightcoral"
          onClose={closeDialog}
          content={dialogContent}
        />
      )}

      <h2>My Tasks List</h2>
      {myTasks.map(task => (
        <ToDoItem
          key={task.id}
          id={task.id}
          title={task.title}
          taskStatus={task.taskStatus}
          setAsDone={setAsDone}
          deleteTask={() => confirmDelete(task)}
        />
      ))}

      <AddTask addTaskTitle={addTaskTitle} />
    </>
  );
}
