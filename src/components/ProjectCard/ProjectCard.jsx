import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({cardData, buttonHandler}) => {
  const [flip, setFlip] = useState(false);

  const flipCard = (event) => {
    event.preventDefault();
    setFlip(!flip);
  };

  const showProject = (event) => {
    event.preventDefault();
    buttonHandler(event);
  };

  return (
    <div>
      <div className={`project-card ${flip ? 'flip' : ''}`} onClick={flipCard}>
        <div className='front'>
          <div className='project-card-img'>
            <img src={cardData.photos[0]}/>
          </div>
          <div className='project-card-body'>
            <h2>{cardData.name}</h2>
            <p>{cardData.short}</p>
          </div>
        </div>
        <div className='back'>
          <h4>
            {`NAME: `}
            <span className='project-card-data'>
              {cardData.name}
            </span>
          </h4>
          <h4>
            {`>FOR: `}
            <span className='project-card-data'>
              {cardData.group}
            </span>
          </h4>
          <h4>
            {`DATE: `}
            <span className='project-card-data'>
              {cardData.date}
            </span>
          </h4>
          <h4>{`TECH:`}
            <span className='project-card-data'>
              {cardData.tech.map((tech, i) =>(<h5 key={i}>{tech[0]}</h5>))}
            </span>
          </h4>
        </div>
      </div>
      <button
        data-project-name={cardData.link}
        onClick={showProject}>
        {`READ MORE`}
      </button>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  cardData: PropTypes.object,
  buttonHandler: PropTypes.func,
};
