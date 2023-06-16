import React from 'react';

const Card = ({ image, title, id, onDelete, onPatch, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt="User" />
      <h3>{title}</h3>
      <div className="button-container">
        <button onClick={onPatch}>Update</button>
        <button onClick={onDelete}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
