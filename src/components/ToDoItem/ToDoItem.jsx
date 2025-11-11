import './ToDoItem.css'
export default function ToDoItem({id, title, taskStatus, setAsDone, deleteTask}){
const backgroundColor = taskStatus === true ? "green" : "red";


    return(
        <div className='task' style={{backgroundColor}}>  
        <p className='title'>Title: {title}</p>
        <p className='status'>status: {taskStatus ? "done" : "not done"}</p>
        {!taskStatus &&  <button onClick={() => setAsDone(id)}>Done</button>}
        <button onClick={()=> deleteTask(id)}>Delete</button>
        </div>
    )
}