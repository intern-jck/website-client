import React from 'react';
import Card from './shared/Card/Card';
import '../styles/Projects.css';

const Projects = ({projectData}) => {
  console.log(projectData)

  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="projects-list">
      {projectData.projects ?
        projectData.projects.map((project, i) => {
          return <Card key={i} project={project}/>
        })
      : null}
      </div>
    </div>
  )
};

export default Projects;
