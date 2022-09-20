import React from 'react';
import Projects from './ProjectData';

const ProjectFilter = ({ filterProject, setProject, filterItems }) => {
  return (
    <div id="filter-list">
      <button
        className="medium ui toggle button"
        onClick={() => setProject(Projects)}
      >
        All
      </button>
      {filterItems.map((language, id) => {
        return (
          <button
            className="medium ui toggle button"
            onClick={() => filterProject(language)}
            key={id}
          >
            {language}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;
