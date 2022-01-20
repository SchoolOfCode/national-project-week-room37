import React from "react";
import "./index.css";
import { ListItem } from "../List-Item";
import Button from "../Button";
import { useNavigate } from "react-router";

export default function DisplayList({ workshops, onClick }) {
  console.log(workshops);
  let navigate = useNavigate();
  return (
    <main>
      <h1>SoC Tasks</h1>
      <ul>
        {workshops.map(function (item, index) {
          return (
            <ListItem
              id={item.id}
              title={item.title}
              date={item.date}
              status={item.isCompleted}
              key={index}
              index={index}
              onClick={onClick}
              repo={item.repo}
            />
          );
        })}
        <Button
          title="Return"
          onClick={() => {
            navigate("/");
          }}
        />
      </ul>
    </main>
  );
}
