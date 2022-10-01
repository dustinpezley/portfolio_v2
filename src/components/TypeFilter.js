import React from 'react';
import Projects from './ProjectData';

const TypeFilter = ({ filterType, setProject, filterTypes }) => {
  return (
    <div id="filter-type-list">
      <button
        className="medium ui toggle button"
        onClick={() => setProject(Projects)}
      >
        All
      </button>
      {filterTypes.map((type, id) => {
        return (
          <button
            className="medium ui toggle button"
            onClick={() => filterType(type)}
            key={id}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default TypeFilter;
