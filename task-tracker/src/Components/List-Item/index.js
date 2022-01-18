import "./index.css";
import Button from "../Button";

export function ListItem({ title, date, status, onClick, index}) {
  return (
    <div className="SoC-List-Item">
      <li> {title} </li>
      <li> {date} </li>
      <Button onClick={() => {onClick(index)}} title='complete'/>
    </div>
  );
}
