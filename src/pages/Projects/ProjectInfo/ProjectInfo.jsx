import React from 'react';
import PropTypes from 'prop-types';
import './ProjectInfo.css';

// rename component to ProjectData?
const ProjectInfo = ({projectData, buttonHandler}) => {
  return (
    <div className='project-data'>
      <h2 className='project-name'>{projectData.name}</h2>
      <h3 className='project-date'>{projectData.date}</h3>
      <h3 className='project-group'>{projectData.group}</h3>
      <div className='project-tech'>
        {projectData.tech.map((tag, i) => {
          return (
            <a
              className='project-tech-tag'
              key={i}
              href={tag[1]}
              target='_blank'
              rel="noreferrer">
              {tag[0]}
            </a>
          );
        },
        )}
      </div>
      <p className='project-info'>{projectData.info}</p>
    </div>
  );
};

export default ProjectInfo;

ProjectInfo.propTypes = {
  projectData: PropTypes.object,
  buttonHandler: PropTypes.func,
};
