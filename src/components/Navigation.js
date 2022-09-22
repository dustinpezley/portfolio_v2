import React from 'react';

const Navigation = () => {
  return (
    <div className="ui link list" id="navigation">
      <div id="nav-link-container">
        <a className="nav-link" href="#home">
          Home
        </a>
        <a className="nav-link" href="#about">
          About
        </a>
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-link" href="#contact-form">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navigation;
