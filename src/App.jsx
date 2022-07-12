import React, {useState} from 'react';
import './App.css';
import Home from './pages/Home/Home.jsx';
import Photos from './pages/Photos/Photos.jsx';
import Projects from './pages/Projects/Projects.jsx';

// Local data
import projects from './data/projects.json';
import photos from './data/photos.json';

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
  };

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
    <div className='App'>
      <nav className='nav-bar'>
        <div className='nav-menu'>
          <div
            className='nav-menu-item'
            onClick={clickHandler}
            data-name='Home'>
            {`Home`}
          </div>
          <div
            className='nav-menu-item'
            onClick={clickHandler}
            data-name='Photos'>
            {`Photos`}
          </div>
          <div
            className='nav-menu-item'
            onClick={clickHandler}
            data-name='Projects'>
            {`Projects`}
          </div>
        </div>
      </nav>
      {currentPage}
    </div>
  );
};

export default App;
