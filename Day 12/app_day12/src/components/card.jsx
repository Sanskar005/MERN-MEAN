import React from "react";

function Card({ id, body, title }) {
  return (
    <div>
      <h1>{id}</h1>
      {/* <img src={logo} alt="err" /> */}
      <h3>{title}</h3>
      {/* <h3>{country}</h3> */}
      <p>{body}</p>
    </div>
  );
}
export default Card;
