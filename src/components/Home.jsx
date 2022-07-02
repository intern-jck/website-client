import React from "react";
import '../styles/Home.css';
import photosImg from '../assets/media/photos-photo.jpg';
import projectsImg from '../assets/media/projects-photo.jpg';

const Home = ({updatePage}) => {

  const clickHandler = (event) => {
    event.preventDefault();
    const name = event.target.getAttribute('data-name');
    updatePage(name);
  }

  return (
    <div className="home-div">
      <h1 className="home-header">Home</h1>
      <div className="home-content">
        <div className="home-item">
          <h3>Photos</h3>
          <img src={photosImg} onClick={clickHandler} data-name="Photos"/>
        </div>
        <div className="home-item">
          <h3>Projects</h3>
          <img src={projectsImg} onClick={clickHandler} data-name="Projects"/>
        </div>
      </div>
    </div>
  )
};

export default Home;
