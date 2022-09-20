import React from 'react';

const ProjectContainer = ({ project }) => {
  return (
    <div className="project-container">
      {project.map((currentProject) => {
        return (
          <div>
            <img
              src={currentProject.image}
              alt={currentProject.name}
              className="project-image"
            />
            <div className="text-container">
              <div className="project-description">
                <h2 className="project-title">{currentProject.name}</h2>
                <p className="project-language">{currentProject.language}</p>
              </div>
              <div className="project-button">
                <a
                  href={currentProject.link}
                  className="project-link"
                  referrerPolicy="no-opener no-referrer"
                >
                  See the code
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectContainer;
