import React, { useState } from 'react';
import Project from './Project.jsx';
import ProjectDetails from './ProjectDetails.jsx';

const ProjectList = ({ projects }) => {
  const [projectDetails, setProjectDetails] = useState(null);

  if (projects.length === 0) {
    return null;
  }

  if (projectDetails === null) {
    return (
      <div>
        {projects.map((project, i) => (
          <div key={i} onClick={() => setProjectDetails(project)}>
            <Project project={project} />
          </div>
        ))}
      </div>
    );
  } else if (projectDetails !== null) {
    return (
      <ProjectDetails />
    );
  }
};

export default ProjectList;
