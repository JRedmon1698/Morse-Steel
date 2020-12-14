import React, { useState } from 'react';
import Project from './Project.jsx';

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div>
       {projects.map((project, i) => (
         <div key={i}>
         <h3>{project[21].value}</h3>
        <Project project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
