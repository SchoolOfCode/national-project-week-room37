import Button from "../Button";
import { useNavigate } from "react-router-dom";
import "./index.css";

export function MainBoard() {
  let navigate = useNavigate();
  return (
    <div className="landing_page">
      <h1>Task Tracker</h1>
      <article className="task_menu_container">
      <h2>Keep track of your tasks</h2>
      <span></span>
      <ul className="list_container">
        <li>
          School of Code Tasks
          <Button
            className="menu_btn"
            title="View"
            onClick={() => {
              navigate("/soctasks");
            }}
          />
        </li>
        <li>
          My Tasks <Button className="menu_btn" title="View" />
        </li>
        <li>
          Create a New Task <Button className="menu_btn" title="Add Task" />
        </li>
      </ul>
      </article>
    </div>
  );
}
