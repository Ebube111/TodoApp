import React, {useContext} from "react";
import Caard from "../Caard";
import "./CreatedTask.css";
import { TaskListContext } from "../../context/TaskListContext";

const CreatedTask = () => {
    const { tasks } = useContext(TaskListContext);
  return (
    <div className="container">
      <div className="appp-wrapper">
        <div className="app-wrap">
        <h1 className="header">My Tasks</h1>
          {tasks.length ? <ul className="listt">
            {tasks.map((task) => {
              return <Caard task={task} key={task.id} />;
            })}
          </ul> : <div className="no-tasks">No Task Created</div>}
        </div>
      </div>
    </div>
  );
};

export default CreatedTask;
