import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo/Photo.jsx';
import '../assets/styles/Photos.css';

const Photos = ({photoData}) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photoFiles = photoData.photos;
    setPhotos(photoFiles);
  }, [photoData]);

  return (
    <div className='Photos'>
      <div className='photos-header'>
        <h1>Photos</h1>
        <p>{`Places I've been, things I've seen, and everything inbetween`}</p>
      </div>
      <div className='photos-list'>
        {photos ? photos.map((photo, i) => {
          return <Photo key={i} photo={photo}/>;
        }) : <h2>no photos</h2>}
      </div>
    </div>
  );
};

export default Photos;

Photos.propTypes = {
  photoData: PropTypes.object,
};
