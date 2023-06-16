import React from "react";
import { useState } from "react";
function Card1() {
  // const change=0;
  const [obj, setObj] = useState([]);
  const handleclick = () => {
    setObj([1, 2, 3, 4]);
  };
  console.log(obj);
  return (
    <div>
      {obj != [] ? <h1>Card</h1> : <h1>Card changed</h1>}
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}
export default Card1;
