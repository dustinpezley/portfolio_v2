import React from 'react';

const Brand = () => {
  return (
    <div id="brand-container">
      <div id="brand-image-container">
        <img
          src={require('../assets/images/brand-image.png')}
          alt="Dustin smiling and feeling festive"
          id="brand-image"
        />
      </div>
      <h2 id="brand-title">Who am I?</h2>
      <p id="brand-statement">
        I'm a Full-Stack Developer in St.Louis, MO with a background in
        marketing research and consumer behavior. I love making new and exciting
        user experiences.
      </p>
      <a href="#contact" id="brand-contact">
        Let's get started.
      </a>
    </div>
  );
};

export default Brand;
