import { useEffect } from "react";

export let arr = [];

useEffect(() => {
  async function getData() {
    console.log("fetch is working");
    const response = await fetch("http://localhost:4000/");
    const data = await response.json();
    let arr = data;
    console.log(arr);
    return arr;
  }
}, arr);
