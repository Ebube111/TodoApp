import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import { useHistory } from "react-router-dom";


import "./Caard.css";

const Caard = ({ task }) => {
  const { removeTask, editTask } = useContext(TaskListContext);
  const history = useHistory()

  const handleComplete = (id) => {
    removeTask(task.id) 
    alert("Congratulations on finishing a task!")
  }

  function handleEdit() {
    history.push('/createtask')
    editTask(task.title, task.body, task.id)
    removeTask(task.id)
  }
  return (
    <div className="cardd">
      <div>
  <h2 style={{textAlign: "center", fontSize: '20px'}}><strong>{task.title}</strong></h2>
        <span>
          {task.body}
        </span>
      </div>
      <div className="card-button">
          <button type='submit' onClick={() => handleComplete()} className="complete-button">
          <i class="fas fa-check"></i>
          </button >
          <button onClick={() => handleEdit()} className="edit-button">
            <i class="far fa-edit"></i>
          </button>
          <button className="delete-button">
          <i class="fas fa-trash"></i>
          </button>
      </div>
    </div>
  );
};

export default Caard;
