import React, {useState, useEffect} from "react";
import Photo from './Photo'
import '../styles/Photos.css';

const Photos = ({photoData}) => {
  console.log('PHOTOS Render', photoData)

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // console.log(photoData.photos);
    const photoFiles = photoData.photos;
    setPhotos(photoFiles)
  }, [photoData]);

  return (
    <div className="Photos">
      <div className="photos-header">
        <h1>Photos</h1>
        <p>Places I've been, things I've seen, and everything inbetween</p>
      </div>
      <div className="photos-list">
        {photos ? photos.map((photo, i) => {
          return <Photo key={i} photo={photo}/>
        }) : <h2>no photos</h2>}
      </div>
    </div>
  )
};

export default Photos;
