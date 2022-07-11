import React, {useState, useEffect, useRef} from "react";
import './ProjectInfo.css';

// rename component to ProjectData?
const ProjectInfo = ({projectData, buttonHandler}) => {
  console.log(projectData);
  return (
    <div className="project-data">
      <h2 className="project-name">{projectData.name}</h2>
      <h3 className="project-date">{projectData.date}</h3>
      <h3 className="project-group">{projectData.group}</h3>
      <div className="project-tech">
        {projectData.tech.map((tag, i) => {
          return (
            <a
              className="project-tech-tag"
              key={i}
              href={tag[1]}
              target="_blank">
                {tag[0]}
            </a>
            )}
          )
        }
      </div>
      <p className="project-info">{projectData.info}</p>
    </div>
  )
};

export default ProjectInfo;
