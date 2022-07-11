import React, {useState, useEffect} from "react";
import ProjectCarousel from './ProjectCarousel/ProjectCarousel';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import '../styles/Projects.css';

const Projects = ({projectData, defaultView}) => {

  const [projects, setProjects] = useState([]);
  const [view, setView] = useState('Project');
  const [currentProject, setCurrentProject] = useState(projectData['glory-stall']);

  useEffect(() => {
    const projectkeys = Object.keys(projectData);
    setProjects(projectkeys);
  }, [projectData]);

  const showProject = (event) => {
    event.preventDefault();
    const target = event.target;
    const projectName = target.getAttribute('data-project-name');
    console.log(projectName);
    setView('Project')
    setCurrentProject(projectData[projectName])
  };

  const goBack = (event) => {
    event.preventDefault();
    console.log('go back');
    setView('List')
  };

  let currentView = <div></div>;
  switch(view) {
    case 'List':
      currentView =
        <div className="projects-list">
        {projects.map((project, i) => {
          return (
            <ProjectCard
            key={i}
            cardData={projectData[project]}
            buttonHandler={showProject}/>
            )
          })}
        </div>
      break;
    case 'Project':
      currentView =
        <div className="projects-single">
          <ProjectCarousel slides={currentProject.photos}/>
          <ProjectInfo projectData={currentProject}/>
        </div>;
      break;
  }

  // conditionally render project here?
  return (
    <div className="projects-div">

      <div className="projects-header">
        <h1>Projects</h1>
        <p>Things I've built, programmed or prototyped.</p>
      </div>

      <div className="projects-content">
        <button hidden={view === 'Project' ? false : true} onClick={goBack}>GO BACK</button>
        {currentView}
      </div>
    </div>
  )
};

export default Projects;
