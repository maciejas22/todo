import ContentCSS from "./Tasks.module.css";

import Task from "./Task.jsx";

const Tasks = ({ tasks }) => {
  return (
    <ul className={ContentCSS.hero}>
      {tasks.map((task) => (
        <Task key={task.relative_id} task={task} />
      ))}
    </ul>
  );
};

export default Tasks;
