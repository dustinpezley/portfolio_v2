import React from 'react';

const Modal = (project) => {
  return (
    <div className="ui modal">
      <i className="close icon"></i>
      <div className="header">{project.name}</div>
      <div className="image content">
        <img
          src={require(`../assets/images/projects/${project.image}.png`)}
          alt={project.image}
        />
      </div>
      <div className="description">
        <div className="ui header">
          {project.language.length > 1
            ? project.lanauage.join('/')
            : project.language}
        </div>
        <p>{project.type}</p>
        <p>{project.description}</p>
      </div>
      <div className="actions">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <i class="github icon"></i>
        </a>
        <a href={project.appLink} target="_blank" rel="noopener noreferrer">
          <i class="home icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Modal;
