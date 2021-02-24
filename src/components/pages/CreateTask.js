import React from "react";
import TaskForm from "../TaskForm";

import './CreateTask.css'

const CreateTask = () => {
  return (
    <div className="container">
      <div className="form-task">
        <h1 className="header">Create a New Task</h1>
        <div className="main">
          <TaskForm />
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
