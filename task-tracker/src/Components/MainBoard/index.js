import Button from "../Button";
import { useNavigate } from "react-router-dom";
import "./index.css";

export function MainBoard() {
  let navigate = useNavigate();
  return (
    <div>
      <h1 className="title">Task Tracker</h1>
      <h2 className="subtitle">Keep track of your tasks</h2>
      <span></span>
      <ul>
        <li className="allTasks">
          School of Code Tasks
          <Button 
            title="View"
            onClick={() => {
              navigate("/soctasks");
            }}
          />
        </li>
        <li className="myTasks">
          My Tasks <Button title="View" />
        </li>
        <li className="newTask">
          Create a New Task <Button title="Add Task" />
        </li>
      </ul>
    </div>
  );
}
