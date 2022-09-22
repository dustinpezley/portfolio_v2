import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectContainer = ({ project }) => {
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
