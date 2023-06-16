import React from 'react';
import "./card.css"

const Card = ({name,email,mobile,gender, onDelete, onPatch, buttonText }) => {
//const Card = ({image, name,email,mobile,gender, onDelete, onPatch, buttonText }) => {
  return (
    <div className="card">
      {/* <img src={image} alt="User" /> */}
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{mobile}</h3>
      <h3>{gender}</h3>
      <div className="button-container">
        <button onClick={onPatch}>Update</button>
        <button onClick={onDelete}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;