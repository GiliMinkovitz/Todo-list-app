import './ToDoItem.css'
export default function ToDoItem({id, title}){

    return(
        <div className='task'>
        <p className='taskId'>Task id: {id}</p>
        <p className='title'>Title: {title}</p>
        </div>
    )
}