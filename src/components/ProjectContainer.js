import React, { useState } from 'react';
import Modal from './Modal';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectContainer = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentProject, setCurrentProject] = useState();

  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, key: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className="project-container"
      >
        {project.map((currentProject) => {
          return (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              layout
              id="grid-container"
              style={{
                backgroundImage: `url(${require(`../assets/images/projects/${currentProject.image}.png`)}`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="text-container" id={currentProject.id}>
                <div className="project-description">
                  <h2 className="project-title">{currentProject.name}</h2>
                  <p className="project-language">
                    {currentProject.language.length > 1
                      ? currentProject.language.join('/')
                      : currentProject.language}
                  </p>
                </div>
                {currentProject.appLink !== '' && (
                  <div className="project-button">
                    <a
                      href={currentProject.appLink}
                      target="_blank"
                      className="project-link"
                      rel="noopener noreferrer"
                    >
                      See the site
                    </a>
                  </div>
                )}
                <div className="project-button">
                  <a
                    href={currentProject.link}
                    target="_blank"
                    className="project-link"
                    rel="noopener noreferrer"
                  >
                    See the code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectContainer;
