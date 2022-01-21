import "./index.css";

export default function Button({title, onClick, className}) {
  // once clicked,  the button will take the user to the SoC task list.
  return <button className={className} onClick={onClick}>{title}</button> 
}
