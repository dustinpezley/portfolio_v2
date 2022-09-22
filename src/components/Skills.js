import React from 'react';
import SkillBar from 'react-skillbars';

const Skills = () => {
  const skills = [
    { type: 'JavaScript', level: 85 },
    { type: 'HTML', level: 80 },
    { type: 'CSS', level: 80 },
    { type: 'React', level: 80 },
    { type: 'OOP', level: 75 },
    { type: 'TDD', level: 75 },
    { type: 'RESTful APIs', level: 75 },
    { type: 'MVC', level: 75 },
    { type: 'NodeJS', level: 75 },
    { type: 'ExpressJS', level: 60 },
    { type: 'MySQL', level: 40 },
    { type: 'MongoDB', level: 40 },
    { type: 'Bootstrap', level: 40 },
  ];

  const colors = {
    bar: '#009fb7',
    title: {
      text: '#dfdfdf',
      background: '#00505C',
    },
  };

  return (
    <div id="skills-container">
      <SkillBar
        skills={skills}
        height={'3.5vh'}
        colors={colors}
        animationDelay={1000}
      />
    </div>
  );
};

export default Skills;
