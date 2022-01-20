import "./index.css";
import Button from "../Button";

export function ListItem({ title, date, status, onClick, index }) {
  function getStatus(status) {
    if (status) {
      return "your task is completed 🎉";
    } else {
      return "click to complete task";
    }
  }

  return (
    <div className="SoC-List-Item">
      <li> {title} </li>
      <li> {date} </li>
      <Button
        onClick={() => {
          onClick(index);
        }}
        title={getStatus(status)}
      />
    </div>
  );
}
