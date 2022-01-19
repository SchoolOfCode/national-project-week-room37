import "./App.css";
import DisplayList from "../List";
import Button from "../Button";
import { useState } from "react";

function App() {
  const workshops = [
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
  ];

  const [toggleIsCompleted, setToggleIsCompleted] = useState(workshops);

  function toggleButton(index) {
    console.log(`I am toggling ${index} in ${workshops}`);
    const newWorkshop = [
      ...toggleIsCompleted.slice(0, index),
      {
        ...toggleIsCompleted[index],
        isCompleted: !toggleIsCompleted[index].isCompleted,
      },
      ...toggleIsCompleted.slice(index + 1),
    ];
    setToggleIsCompleted(newWorkshop);
    console.log(newWorkshop);
  }

  return (
    <div className="App">
      <DisplayList workshops={workshops} onClick={toggleButton} />
      <Button title="Return" />
    </div>
  );
}

export default App;
