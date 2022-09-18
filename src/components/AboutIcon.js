import React from 'react';

const AboutIcon = (props) => {
  return (
    <div id="icon-container">
      <div id="about-icon">{props.icon}</div>
      <p id="about-text">{props.text}</p>
    </div>
  );
};

export default AboutIcon;
