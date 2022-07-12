import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard/ProjectCard.jsx';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel.jsx';
import ProjectInfo from './ProjectInfo/ProjectInfo.jsx';
import PropTypes from 'prop-types';
import './Projects.css';

const Projects = ({projectsData}) => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(projectsData['glory-stall']);
  const [view, setView] = useState('List');

  useEffect(() => {
    const projectkeys = Object.keys(projectsData);
    setProjects(projectkeys);
  }, [projectsData]);

  const showProject = (event) => {
    event.preventDefault();
    const target = event.target;
    const projectName = target.getAttribute('data-project-name');
    console.log(projectName);
    setView('Project');
    setProject(projectsData[projectName]);
  };

  const goBack = (event) => {
    event.preventDefault();
    console.log('go back');
    setView('List');
  };

  let currentView = <div></div>;

  switch (view) {
    case 'List':
      currentView =
        <div className='projects-list'>
          {projects.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                cardData={projectsData[project]}
                buttonHandler={showProject}
              />
            );
          })}
        </div>;
      break;

    case 'Project':
      currentView =
        <div className='projects-single'>
          <ProjectCarousel slides={project.photos}/>
          <ProjectInfo projectData={project}/>
        </div>;
      break;
  }

  return (
    <div className='Projects'>

      <div className='projects-header'>
        <h1>{`Projects`}</h1>
        <p>{`Things I've built, programmed or prototyped.`}</p>
      </div>

      <div className='projects-content'>
        {projectsData ? currentView : null}
        <button
          hidden={view === 'Project' ? false : true}
          onClick={goBack}>
          {`GO BACK`}
        </button>
      </div>
    </div>
  );
};

export default Projects;

Projects.propTypes = {
  projectsData: PropTypes.object,
};
