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
        I'm a Full-Stack Developer living in St.Louis, MO with my wife,
        daughter, and Australian Cattle Dog (Shorty). I have 10+ years of
        project and account management experience in marketing research and
        consumer behavior, so I know what people like. I love designing and
        improving user experiences.
      </p>
      <a href="#contact-form" id="brand-contact">
        Let's get started.
      </a>
    </div>
  );
};

export default Brand;
