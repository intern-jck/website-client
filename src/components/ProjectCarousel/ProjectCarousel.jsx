import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaExpandArrowsAlt } from "react-icons/fa";
import "./ProjectCarousel.css";
import "./ProjectCarouselFullscreen.css";

const ProjectCarousel = ({ slides, className, baseUrl }) => {

  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState({});
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if (slides) {
      setImages(slides);
      setCurrentImage(slides[current]);
      setLength(slides.length);
    }
  }, [slides, current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? length - 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };

  const updateCurrentImage = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    setCurrent(name);
  };

  const makeFullscreen = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = event.name;
    setFullscreen(!fullscreen);
  };

  return (
    <div className={fullscreen ? `project-carousel-div-fullscreen` : `project-carousel-div`}>

      { currentImage ?
          <div className={fullscreen ? "project-carousel-img-fullscreen" : "project-carousel-img"}>
            <img
              hidden={false}
              src={currentImage}/>
          </div>
          : null
      }

      <div className="project-carousel-indicators">
        { current > 0 ?
          <FaChevronLeft className="project-indicator-left-arrow onclick" onClick={prevSlide} size={40}/>
          : null
        }
        { images ? images.map((slide, index) => {
            return (
              <div
                className={slide.thumbnail_url === currentImage.thumbnail_url ?
                  "selected-thumbnail carousel-indicator onclick"
                  : "carousel-indicator onclick"}
                key={index}
                name={index}
                />
              )
            })
          : null
        }
        { current >= 0 && current != length - 1 ?
          <FaChevronRight className="project-indicator-right-arrow onclick" onClick={nextSlide} size={40}/>
          : null
        }
      </div>

    </div>
  );

};

export default ProjectCarousel;