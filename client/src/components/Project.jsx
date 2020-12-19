import React, { useState } from 'react';
import styled from 'styled-components';

const Project = ({ project }) => {
  return (
    <div>
        <ProjectWrapper>{project[21].value}</ProjectWrapper> Active Team Members: {project[113].value.length}
    </div>
  );
};

export default Project;

const ProjectWrapper = styled.p`
  :hover {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
  font-size: 20px;
  margin-top: 45px;
`;