import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'


const Navigation = () => {
  return (
    <>
      <ul className="nav-links sm:p">
        <li>
        <NavLink to="/">Home</NavLink>   
        </li>
        <li>
        <NavLink to="/createtask">Create Task</NavLink>   
        </li>
        <li>
        <NavLink to="/createdtask">Task Created</NavLink>   
        </li>
      </ul>
      </>
  );
};

export default Navigation;
