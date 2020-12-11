import React, { useState } from 'react';
import Project from './Project.jsx';

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return null;
  }
// properties of data trying to be pulled before data is populated 
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
