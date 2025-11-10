import { useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import './TodoList.css'
import AddTask from "../AddTask/AddTask";

export default function TodoList() {

    const [myTasks, setMyTasks] = useState([{ id: 1, title: "hw" }, { id: 2, title: "learn for the test" }, { id: 3, title: "go sleep" }]);

    function AddTaskTitle(newTitle) {
        if (!newTitle.trim()) return; // optional: מונע משימות ריקות
        const exists = myTasks.some(task => task.title.toLowerCase() === newTitle.toLowerCase());
        if (exists) {
            alert("This task already exists!");
            return;
        }

        setMyTasks([...myTasks, { id: Date.now(), title: newTitle }])
    }
    return (
        <>
            <h2>My Tasks List</h2>
            {myTasks.map((task) => (
                <ToDoItem key={task.id} id={task.id} title={task.title} ></ToDoItem>
            ))}
            <AddTask AddTaskTitle={AddTaskTitle}></AddTask>
        </>
    )
}