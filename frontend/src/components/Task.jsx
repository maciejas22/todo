import { useState, useContext } from "react";

import TaskContext from "../context/TaskContext";
import ContentCSS from "./Task.module.css";

import ModifyIcon from "../assets/ModifyIcon.svg";
import DeleteIcon from "../assets/DeleteIcon.svg";

const Task = ({ task }) => {
  const [isPTag, setIsPTag] = useState(true);
  const [taskState, setTaskState] = useState(task.task);
  let { updateTask, deleteTask } = useContext(TaskContext);

  return (
    <li key={task.relative_id} className={ContentCSS.taskli}>
      <div className={ContentCSS.taskContainer}>
        <input
          type="checkbox"
          className={ContentCSS.checkbox}
          id={"task_id_" + task.relative_id}
          defaultChecked={task.completed}
          onClick={() =>
            updateTask(task.relative_id, task.task, !task.completed)
          }
        />
        <label htmlFor={"task_id_" + task.relative_id} className={ContentCSS.customCheckbox}></label>
        {isPTag ? (
          <p className={ContentCSS.taskTitle}>{task.task}</p>

        ) : (
          <form
            className={ContentCSS.form}
            onSubmit={(e) => {
              e.preventDefault();
              updateTask(task.relative_id, taskState, task.completed);
              setIsPTag(true);
            }}
          >
            <input
              type="text"
              className={ContentCSS.input}
              value={taskState}
              onChange={(e) => {
                setTaskState(e.target.value);
              }}
            />
          </form>
        )}
      </div>
      <div>
        <img src={ModifyIcon} onClick={() => setIsPTag(false)} />
        <img src={DeleteIcon} onClick={() => deleteTask(task.relative_id)} />
      </div>
    </li>
  );
};

export default Task;
