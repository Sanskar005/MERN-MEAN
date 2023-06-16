import React from 'react';
import './card.css';


const Card = ({ image, title, id, onDelete, onPatch, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="button-container">
        <button onClick={onPatch}>Update</button>
        <button onClick={onDelete}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
