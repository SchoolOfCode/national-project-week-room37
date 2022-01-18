import "./App.css";
import DisplayList from "../List";
import Button from "../Button";

function App() {
  const workshops = [
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
    { title: "Hackathon", date: "10/12/2021", isCompleted: false }
  ];

  return (
    <div className="App">
      <DisplayList workshops={workshops} />
      <Button title='Return'/>
    </div>
  );
}

export default App;
