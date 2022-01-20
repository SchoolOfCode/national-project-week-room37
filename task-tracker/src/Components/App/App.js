import "./App.css";
import DisplayList from "../List";
import Button from "../Button";
import { MainBoard } from "../MainBoard";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainBoard />} />

          <Route
            path="/soctasks"
            element={
              <>
                <DisplayList
                  workshops={toggleIsCompleted}
                  onClick={toggleButton}
                />
                <Button title="Return" />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//export default App;
