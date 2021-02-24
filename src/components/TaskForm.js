import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("")
  

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeBody = (e) => {
    setBody(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title, body);
      setTitle("");
      setBody("")
    } else {
      editTask(title, body, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title, editItem.body);
    } else {
      setTitle("");
      setBody("")
    }
  }, [editItem]);

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Task Title:</label>
      <input
        onChange={handleChange}
        type="text"
        value={title}
        className="task-input task-upper mb-8"
        placeholder="Task Title..."
        required
      />
      </div>
      <div>
        <label>Description:</label>
      <textarea 
        onChange  ={handleChangeBody}
        type="text"
        value={body}
        className="task-input"
        placeholder="What to do ?"
        cols="4"
        rows="5"
        required
      />
      </div>
      
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
            {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button onClick={clearList} className="btn clear-btn">
          {" "}
           Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
