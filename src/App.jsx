import React, {useState, useEffect} from "react";
import './styles/App.css';
import Home from './components/Home';
import Photos from './components/Photos';
import Projects from './components/Projects';

import projects from './json/projects.json';
import photos from './json/photos.json';

const App = () => {

  const [page, setPage] = useState('Projects');

  const pageHandler = (page) => {
    console.log('viewing ', page)
    setPage(page);
  }

  const clickHandler = (event) => {
    event.preventDefault();
    const name = event.target.getAttribute('data-name');
    pageHandler(name);
  }

  let currentPage = <div></div>;

  switch(page) {
    case 'Home':
      currentPage = <Home updatePage={pageHandler}/>;
      break;
    case 'Photos':
      currentPage = <Photos photoData={photos}/>;
      break;
    case 'Projects':
      currentPage = <Projects projectData={projects}/>;
      break;
  }


  return (
    <div className="App">
      <nav className="nav-bar">
        <ol className="nav-menu">
          <li className="nav-menu-item" onClick={clickHandler} data-name="Home">Home</li>
          <li className="nav-menu-item" onClick={clickHandler} data-name="Photos">Photos</li>
          <li className="nav-menu-item" onClick={clickHandler} data-name="Projects">Projects</li>
        </ol>
      </nav>
      {currentPage}
    </div>
  )
};

export default App;