import React from 'react';

const Header = () => {
  return (
    <header id="home">
      <p id="header-primary">
        Hello, I'm <span id="header-name">Dustin Pezley</span>.
      </p>
      <p className="header-secondary">I'm a full-stack web developer.</p>
      <div id="view-work-container">
        <a href="#projects">
          <button
            type="button"
            id="view-work"
            className="ui basic inverted button header-secondary"
          >
            View my work{' '}
            <i id="-view-work-arrow" className="angle double right icon"></i>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
