import React from "react";
import '../styles/Photo.css';

const Photo = ({photo}) => {

  console.log();
  const imgSrc = `../assets/media/photos/${photo}`;
  console.log(imgSrc)
  return (
    <div className="main-div">
      <img src={imgSrc}/>
    </div>
  )
};

export default Photo;
