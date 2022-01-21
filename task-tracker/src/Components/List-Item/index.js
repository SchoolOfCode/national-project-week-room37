import "./index.css";
import Button from "../Button";
import "./index.css";

export function ListItem({ title, date, status, onClick, index, repo }) {
  function getStatus(status) {
    if (status) {
      return "your task is completed";
    } else {
      return "click to complete task";
    }
  }

  return (
    <div className="SoC-List-Item">
      <li>
        <span>
          <a href={repo} target="_blank" rel="noreferrer">
            {title}
          </a>
        </span>
        <span> {date} </span>
      </li>
      <Button
        className="complete-task-btn"
        onClick={() => {
          onClick(index);
        }}
        title={getStatus(status)}
      />
    </div>
  );
}
