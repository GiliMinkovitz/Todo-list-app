import { useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import './TodoList.css'
import AddTask from "../AddTask/AddTask";

export default function TodoList() {

    const [myTasks, setMyTasks] = useState([{ id: 1, title: "hw", taskStatus: true }, { id: 2, title: "learn for the test", taskStatus:true }, { id: 3, title: "go sleep" , taskStatus:false}]);

    function AddTaskTitle(newTitle) {
        if (!newTitle.trim()) return; // optional: מונע משימות ריקות
        const exists = myTasks.some(task => task.title.toLowerCase() === newTitle.toLowerCase());
        if (exists) {
            alert("This task already exists!");
            return;
        }

        setMyTasks([...myTasks, { id: Date.now(), title: newTitle, taskStatus: false }])
    }

      function setAsDone(taskid) {
    // מעדכן רק את המשימה הספציפית בלחיצה
    setMyTasks(
      myTasks.map((task) =>
        task.id === taskid ? { ...task, taskStatus: true } : task
      )
    );
  }

function deleteTask(taskId) {
  setMyTasks(myTasks.filter(task => task.id !== taskId));
}


    return (
        <>
            <h2>My Tasks List</h2>
            {myTasks.map((task) => (
                <ToDoItem key={task.id} id={task.id} title={task.title} taskStatus={task.taskStatus} setAsDone={setAsDone} deleteTask={deleteTask}></ToDoItem>
            ))}
            <AddTask AddTaskTitle={AddTaskTitle}></AddTask>
        </>
    )
}