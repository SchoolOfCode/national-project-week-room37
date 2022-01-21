import "./App.css";
import DisplayList from "../List";
import { MainBoard } from "../MainBoard";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  async function getData() {
    console.log("fetch is working");
    const response = await fetch("https://tasktrackernew.herokuapp.com/");
    const data = await response.json();
    setToggleIsCompleted(data);
  }
  //const response = await fetch("https://tasktrackernew.herokuapp.com/");

  useEffect(() => {
    getData();
  }, []);

  const [toggleIsCompleted, setToggleIsCompleted] = useState([]);

  function toggleButton(index) {
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
