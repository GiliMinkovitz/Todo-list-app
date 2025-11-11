import { useState } from "react";
import './AddTask.css';

export default function AddTask({ addTaskTitle }) {
  const [tempTaskTitle, setTempTaskTitle] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addTaskTitle(tempTaskTitle);
    setTempTaskTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={(ev) => setTempTaskTitle(ev.target.value)}
        value={tempTaskTitle}
      />
      <button type="submit">Add</button>
    </form>
  );
}
