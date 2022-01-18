import "./App.css";
import { ListItem } from "../List-Item";

function App() {
  const workshops = [
    { title: "Hackathon", date: "10/12/2021", isCompleted: false },
  ];

  return (
    <div className="App">
      {workshops.map((item, index) => {
        return (
          <ListItem
            title={item.title}
            date={item.date}
            status={item.isCompleted}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
