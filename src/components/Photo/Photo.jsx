import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css';

const Photo = ({photo}) => {
  console.log(imgSrc);
  const imgSrc = `./photos/${photo}`;
  return (
    <div className='main-div'>
      <img src={imgSrc}/>
    </div>
  );
};

export default Photo;

Photo.propTypes = {
  photo: PropTypes.string,
};
