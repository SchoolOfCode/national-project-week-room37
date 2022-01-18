import React from "react";
import "./index.css";
import { ListItem } from "../List-Item";

export default function DisplayList({ workshops, onClick}) {
  return (
    <main>
      <h1>SoC Tasks</h1>
      <ul>
      {workshops.map(function(item,index) {
        return (<ListItem 
                  id={item.id}
                  title={item.title} 
                  date={item.date}
                  status={item.isCompleted}
                  key={index}
                  index={index}
                  onClick={onClick}
                />)
      })}
      </ul>
    </main>
  );
}
