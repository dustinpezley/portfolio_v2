import React, { useState } from 'react';
import ProjectContainer from './ProjectContainer';
import Projects from './ProjectData';
import ProjectFilter from './ProjectFilter';
import { motion, AnimatePresence } from 'framer-motion';

const Project = () => {
  const [project, setProject] = useState(Projects);

  // Convert each language array into one array of unique languages
  let languageArr = [];

  for (const project of Projects) {
    languageArr.push(...project.language);
  }

  const uniqueLanguages = [...new Set(languageArr)];
  const filterItems = [...new Set(uniqueLanguages.map((language) => language))];

  const filterProject = (selectedLanguage) => {
    const newProject = Projects.filter((newVal) => {
      return newVal.language.includes(selectedLanguage);
    });
    setProject(newProject);
  };

  return (
    <div id="projects">
      <h1 id="projects-title" className="title">
        PROJECTS
      </h1>
      <div className="ui horizontal selection list" id="language-filter">
        <ProjectFilter
          filterProject={filterProject}
          setProject={setProject}
          filterItems={filterItems}
        />
      </div>
      <motion.div layout id="projects-body">
        <AnimatePresence>
          <ProjectContainer project={project} />
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Project;
