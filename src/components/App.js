import React from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import TaskListContextProvider from "../context/TaskListContext";
import AppContainer from "./pages/AppContainer";
import Navigation from "./Navigation";
import CreateTask from "./pages/CreateTask";
import CreatedTask from "./pages/CreatedTask"



const App = () => {
  return (
    <TaskListContextProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <AppContainer />
          </Route>
          <Route path="/createtask">
            <CreateTask />
          </Route>
          <Route path="/createdtask">
            <CreatedTask />
          </Route>
        </Switch>
      </Router>
    </TaskListContextProvider>
  );
};

export default App;
