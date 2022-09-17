import React, { useState } from 'react';

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="ui link list" id="navigation">
      <a
        href="#home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'active item' : 'item'}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'Home' ? 'active item' : 'item'}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => handlePageChange('Projects')}
        className={currentPage === 'Home' ? 'active item' : 'item'}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Home' ? 'active item' : 'item'}
      >
        Contact
      </a>
    </div>
  );
};

export default Navigation;
