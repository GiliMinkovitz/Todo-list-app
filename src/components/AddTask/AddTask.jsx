import './AddTask.css'
import { useState } from "react";

export default function AddTask({ AddTaskTitle }) {

    const [tempTaskTitle, setTempTaskTitle] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        AddTaskTitle(tempTaskTitle);
        setTempTaskTitle(''); // איפוס השדה
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' onChange={(ev) => setTempTaskTitle(ev.target.value)} value={tempTaskTitle} />
                <button type="submit">Add</button>
            </form>
        </>
    )

}