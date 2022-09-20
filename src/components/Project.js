import React, { useState } from 'react';
import ProjectContainer from './ProjectContainer';
import Projects from './ProjectData';
import ProjectFilter from './ProjectFilter';

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
    console.log(selectedLanguage);
    const newProject = Projects.filter((newVal) => {
      return newVal.language.includes(selectedLanguage);
    });
    setProject(newProject);
  };

  return (
    <div id="projects">
      <h1 id="projects-title" className="title">
        Projects
      </h1>
      <div className="ui horizontal selection list" id="language-filter">
        <ProjectFilter
          filterProject={filterProject}
          setProject={setProject}
          filterItems={filterItems}
        />
      </div>
      <div id="projects-body">
        <ProjectContainer project={project} />
      </div>
    </div>
  );
};

export default Project;
