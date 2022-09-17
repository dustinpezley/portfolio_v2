import React from 'react';
import AboutIcon from './AboutIcon';
import Brand from './Brand';
import Skills from './Skills';

const About = () => {
  return (
    <div id="about">
      <h1 id="about-title">ABOUT</h1>
      <div id="bio-container">
        <div id="bio-brand">
          <Brand />
        </div>
        <div id="bio-skills">
          <Skills />
        </div>
      </div>
      <div id="about-icon-container">
        <AboutIcon
          icon={<i className="circular crosshairs icon"></i>}
          text="Design-first approach with an eye for the little details."
        />
        <AboutIcon
          icon={<i className="circular user outline icon"></i>}
          text="Websites that have their own identity and keep users engaged."
        />
        <AboutIcon
          icon={<i className="circular lightbulb outline icon"></i>}
          text="Preference toward minimalist, intuitive UI."
        />
      </div>
    </div>
  );
};

export default About;
