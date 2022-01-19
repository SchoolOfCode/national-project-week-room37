import Button from "../Button";

export function MainBoard({ onClick }) {
  return (
    <div>
      <h1>Task Tracker</h1>
      <h2>Keep track of your tasks</h2>
      <span></span>
      <ul>
        <li>
          School of Code Tasks
          <Button title="View" onClick={onClick} />
        </li>
        <li>
          My Tasks <Button title="View" />
        </li>
        <li>
          Create a New Task <Button title="Add Task" />
        </li>
      </ul>
    </div>
  );
}
