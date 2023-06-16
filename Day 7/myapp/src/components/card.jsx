import React from "react";
import "./card.css";

// import { AiOutLineHeart } from "react-icons/ai";

function Card(props) {
  // function Card(username,image){
  const {title, image, desc }=props;
  return (
      <div className="img-container">
        <img src={image} alt="" className="image"/>
        <div id="title">{title}</div>
        <div id="desc">{desc}</div>
      </div>
  );
}

export default Card;

// style={{width:'400px',height:'200px'}}
//can also write props.username