import React, { useState } from 'react';

const Project = ({ project }) => {
  return (
    <div>
      <div>
        Project Number: {project[20].value}
      </div>
      <div>
        {/* Project Status: {project[22].value} */}
      </div>
    </div>
  );
};

export default Project;
