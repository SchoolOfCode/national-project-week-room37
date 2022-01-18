import "./App.css";
import DisplayList from "../List";
import Button from "../Button";
import {useState} from 'react';

function App() {
  /* our initial state should be the value of isCompleted property in our workshops array
  we need to pull the isCompleted property 
  [...workshops,]
  */

  const workshops = [
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
    { title: "Hackathon", date: "10/12/2021", isCompleted: false }
  ];

  const [toggleIsCompleted, setToggleIsCompleted] = useState(workshops);

  function toggleButton(index){
    console.log(`I am toggling ${index} in ${workshops}`);
    const newWorkshop = [...workshops.slice(0,index), {...workshops[index], isCompleted: !(workshops[index].isCompleted)}, ...workshops(index + 1)];
    setToggleIsCompleted(newWorkshop);
    console.log(newWorkshop);
  }


  return (
    <div className="App">
      <DisplayList workshops={workshops} onClick={toggleButton} />
      <Button title='Return'/>
    </div>
  );
}

export default App;
