import React, {useState, useEffect} from "react";
import Carousel from '../shared/Carousel/Carousel';
import '../styles/Project.css';

const Project = ({projectData}) => {
  console.log('PROJECT:', projectData);

  const baseUrl = './assets/media/projects';

  return (
    <div className="project-div">
      {/* <h1>PROJECT</h1> */}
      <h2>{projectData.name}</h2>
      <Carousel slides={projectData.photos} baseUrl={baseUrl}/>
    </div>
  )
};

export default Project;
