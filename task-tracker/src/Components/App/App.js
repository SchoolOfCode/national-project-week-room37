import "./App.css";
import DisplayList from "../List";

import { MainBoard } from "../MainBoard";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  async function getData() {
    console.log("fetch is working");
    const response = await fetch("http://localhost:5000/");
    const data = response.json();
    console.log(data);
  }
  useEffect(() => {
    getData();
  }, []);

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

  //let navigate = useNavigate();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainBoard />} />

          <Route
            path="/soctasks"
            element={
              <DisplayList
                workshops={toggleIsCompleted}
                onClick={toggleButton}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//export default App;
