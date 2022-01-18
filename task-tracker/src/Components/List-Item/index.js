import "./index.css";

export function ListItem({ title, date, status }) {
  return (
    <div className="SoC-List-Item">
      <li> {title} </li>
      <li> {date} </li>
      <button>Completed</button>
    </div>
  );
}
