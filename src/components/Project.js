import React, { useState } from 'react';
import ProjectContainer from './ProjectContainer';
import Projects from './ProjectData';
import ProjectFilter from './ProjectFilter';
import { motion, AnimatePresence } from 'framer-motion';
import TypeFilter from './TypeFilter';

const Project = () => {
  const [project, setProject] = useState(Projects);

  // Convert each language array into one array of unique languages
  let languageArr = [];
  let typeArr = [];

  for (const project of Projects) {
    languageArr.push(...project.language);
    typeArr.push(...project.type);
  }

  const uniqueLanguages = [...new Set(languageArr)];
  const filterItems = [...new Set(uniqueLanguages.map((language) => language))];

  const uniqueTypes = [...new Set(typeArr)];
  const filterTypes = [...new Set(uniqueTypes.map((type) => type))];

  const filterProject = (selectedLanguage) => {
    const newProject = Projects.filter((newVal) => {
      return newVal.language.includes(selectedLanguage);
    });
    setProject(newProject);
  };

  const filterType = (selectedType) => {
    const newProject = Projects.filter((newVal) => {
      return newVal.type.includes(selectedType);
    });
    setProject(newProject);
  };

  return (
    <div id="projects">
      <h1 id="projects-title" className="title">
        PROJECTS
      </h1>
      <div className="ui horizontal selection list" id="type-filter">
        <TypeFilter
          filterType={filterType}
          setProject={setProject}
          filterTypes={filterTypes}
        />
      </div>
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
