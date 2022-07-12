import React, {useState, useEffect, useRef} from "react";
import './Card.css';

const Card = ({cardData, buttonHandler}) => {
  // console.log(cardData);
  const [flip, setFlip] = useState(false);

  const flipCard = (event) => {
    event.preventDefault();
    setFlip(!flip);
    const target = event.target;
  }

  const showProject = (event) => {
    event.preventDefault();
    buttonHandler(event);
  };

  return (
    <div>
      <div className={`card ${flip ? 'flip' : ''}`} onClick={flipCard}>
        <div className="front">
          <div className="card-img">
            <img src={cardData.photos[0]}/>
          </div>
          <div className="card-body">
            <h2>{cardData.name}</h2>
            <p>{cardData.short}</p>
          </div>
        </div>
        <div className="back">
          <h4>NAME: <span className="project-data">{cardData.name}</span></h4>
          <h4>FOR: <span className="project-data">{cardData.group}</span></h4>
          <h4>DATE: <span className="project-data">{cardData.date}</span></h4>
          <h4>TECH:
            <span className="project-data">{cardData.tech.map((tech, i) =>(<h5 key={i}>{tech[0]}</h5>))}</span>
          </h4>
        </div>
      </div>
      <button data-project-name={cardData.link} onClick={showProject}>READ MORE</button>
    </div>
  )
};

export default Card;
