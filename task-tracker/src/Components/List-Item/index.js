import "./index.css";
import Button from "../Button";

export function ListItem({ title, date, status }) {
  return (
    <div className="SoC-List-Item">
      <li> {title} </li>
      <li> {date} </li>
      <Button title='complete'/>
    </div>
  );
}
