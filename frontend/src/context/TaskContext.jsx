import { useState, createContext, useContext } from "react";
import jwt_decode from "jwt-decode";

import AuthContext from "./AuthContext";

const TaskContext = createContext();

export default TaskContext;

export const TaskProvider = ({ children }) => {
  let [tasks, setTasks] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  let getTasks = async () => {
    let response = await fetch("http://localhost:8000/api/tasks/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setTasks(data);
    } else if (response.statusTest === "Unauthorized") {
      logoutUser();
    }
  };

  let addTask = async (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      alert("Please enter a task");
      return;
    }

    let response = await fetch("http://localhost:8000/api/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
      body: JSON.stringify({
        task: e.target[0].value,
      }),
    });
    e.target[0].value = "";
    let data = await response.json();

    if (response.status === 201) {
      getTasks();
    } else if (response.statusTest === "Unauthorized") {
      logoutUser();
    }
  };

  let updateTask = async (id, title, completed) => {
    let response = await fetch(`http://localhost:8000/api/tasks/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
      body: JSON.stringify({
        task: title,
        completed: completed,
      }),
    });
    let data = await response.json();

    if (response.status === 200) {
      getTasks();
    } else if (response.statusTest === "Unauthorized") {
      logoutUser();
    }
  };

  let deleteTask = async (id) => {
    let response = await fetch(`http://localhost:8000/api/tasks/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
    });

    if (response.status === 204) {
      getTasks();
    } else if (response.statusTest === "Unauthorized") {
      logoutUser();
    }
  };

  let contextData = {
    tasks: tasks,
    getTasks: getTasks,
    addTask: addTask,
    updateTask: updateTask,
    deleteTask: deleteTask,
  };

  return (
    <TaskContext.Provider value={contextData}>{children}</TaskContext.Provider>
  );
};
