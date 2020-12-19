import React from 'react';
import styled from 'styled-components';

const ProjectDetails = ({ projectDetails, setProjectDetails }) => {
  
  const getDetail = (value) => {
    if (value === '' || value === null) {
      return 'none on file';
    }
    return value;
  };

  return (
    <div>
      <p>Project Name: {getDetail(projectDetails[21].value)}</p>
      <p>Project Number: {getDetail(projectDetails[21].value)}</p>
      <BackButton onClick={() => setProjectDetails(null)}>Back</BackButton>
    </div>
  );
};

export default ProjectDetails;

const BackButton = styled.button`
  :hover {
    cursor: pointer;
  }
  margin-top: 15px;
  margin-bottom: 40px;
`;
