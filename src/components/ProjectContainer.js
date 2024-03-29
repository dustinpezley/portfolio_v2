import React, { useState } from 'react';
import Modal from './Modal';
import Popover from '@mui/material/Popover';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectContainer = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [currentProject, setCurrentProject] = useState();

  const handlePopoverOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
              {/* <Popover
                id={currentProject.id}
                sx={{ pointerEvents: 'none' }}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  veritcal: 'center',
                  horizontal: 'left',
                }}
                disableRestoreFocus
              >
                {currentProject.description}
              </Popover> */}
              <div
                className="text-container"
                // aria-owns={open ? currentProject.id : undefined}
                // aria-haspopup="true"
                // onMouseEnter={handlePopoverOpen}
                // onMouseLeave={handlePopoverClose}
              >
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
                {currentProject.appLink === '' && (
                  <div className="project-button">
                    <a
                      href={`${currentProject.link}/blob/main/README.md`}
                      target="_blank"
                      className="project-link"
                      rel="noopener noreferrer"
                    >
                      See the README
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
