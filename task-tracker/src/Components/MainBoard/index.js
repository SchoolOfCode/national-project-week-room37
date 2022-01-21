import Button from "../Button";
import { useNavigate } from "react-router-dom";
import "./index.css";

export function MainBoard() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Task Tracker</h1>
      <h2>Keep track of your tasks</h2>
      <ul className="main-board">
        <li>
          School of Code Tasks
          <Button
            className="board-button"
            title="View"
            onClick={() => {
              navigate("/soctasks");
            }}
          />
        </li>
        <li>
          My Tasks <Button className="my-task-btn" title="View" />
        </li>
        <li>
          Create a New Task <Button className="board-button" title="Add Task" />
        </li>
      </ul>
    </div>
  );
}
