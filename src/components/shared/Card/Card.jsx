import React from 'react';
import './Card.css';

const Card = ({project}) => {
  console.log(project.name)
  return (
    <div className="card-div">
      <div className="card-header">
        <h4>{project.name}</h4>
      </div>
      <div className="card-img-div">
        <img className="card-img" src={project.photos[0]}/>
      </div>
      <div className="card-body">
        <h5>{project.short}</h5>
      </div>
    </div>
  )
};

export default Card;
