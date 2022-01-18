import "./index.css";

export default function Button({title, onClick}) {
  // once clicked,  the button will take the user to the SoC task list.
  return <button onClick={onClick}>{title}</button> 
}
