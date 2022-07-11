import React, {useState} from 'react';
import './assets/styles/App.css';
import Home from './components/Home.jsx';
import Photos from './components/Photos.jsx';
import Projects from './components/Projects.jsx';

// Local data
import projects from './assets/json/projects.json';
import photos from './assets/json/photos.json';

const App = () => {
  const [page, setPage] = useState('Projects');

  const pageHandler = (page) => {
    console.log('viewing ', page)
    setPage(page);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    const name = event.target.getAttribute('data-name');
    pageHandler(name);
  }

  let currentPage = <div></div>;

  switch (page) {
    case 'Home':
      currentPage = <Home updatePage={pageHandler}/>;
      break;
    case 'Photos':
      currentPage = <Photos photoData={photos}/>;
      break;
    case 'Projects':
      currentPage = <Projects projectsData={projects}/>;
      break;
  }

  return (
    <div className='app-div'>
      <nav className='nav-bar'>
        <div className='nav-menu'>
          <div
            className='nav-menu-item'
            onClick={clickHandler}
            data-name='Home'>
            Home
          </div>
          <div
            className='nav-menu-item'
            onClick={clickHandler}
            data-name='Photos'>
            Photos
          </div>
          <div
            className='nav-menu-item'
            onClick={clickHandler}
            data-name='Projects'>
            Projects
          </div>
        </div>
      </nav>
      {currentPage}
    </div>
  );
};

export default App;
