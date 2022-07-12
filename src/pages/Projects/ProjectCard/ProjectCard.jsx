import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
const LOCAL_URL = 'http://127.0.0.1:8080/projects/';

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
    <div className="ProjectCard">

      <div className={`project-body ${flip ? 'flip' : ''}`} onClick={flipCard}>

        <div className='front'>
          <div className='project-img'>
            <img src={`${LOCAL_URL}${cardData.photos[0]}`}/>
          </div>
          <h2 className='project-name'>{cardData.name}</h2>
          <p className='project-short'>{cardData.short}</p>
        </div>

        <div className='back'>
          <div className='project-data'>
            {`NAME: `}
            <span>
              {cardData.name}
            </span>
          </div>
          <div className='project-data'>
            {`FOR: `}
            <span>
              {cardData.group}
            </span>
          </div>
          <div className='project-data'>
            {`DATE: `}
            <span>
              {cardData.date}
            </span>
          </div>
          <div className='project-data project-tech-tags'>
            {`TECH:`}
            <span>
              {cardData.tech.map((tech, i) =>(<div key={i}>{tech[0]}</div>))}
            </span>
          </div>
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
