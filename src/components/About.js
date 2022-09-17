import React from 'react';
import AboutIcon from './AboutIcon';

const About = () => {
  return (
    <div id="about">
      <div id="about-icon-container">
        <AboutIcon
          icon={<i class="crosshairs icon"></i>}
          text="Design-first approach with an eye for the little details."
        />
        <AboutIcon
          icon={<i class="user outline icon"></i>}
          text="Websites that have their own identity and keep users engaged."
        />
        <AboutIcon
          icon={<i class="lightbulb outline icon"></i>}
          text="Preference toward minimalist, intuitive UI"
        />
      </div>
    </div>
  );
};

export default About;
