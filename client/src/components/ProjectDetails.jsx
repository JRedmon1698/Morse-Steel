import React, { useState } from 'react';
import styled from 'styled-components';
import AddTeamMembersToProject from './AddTeamMembersToProject.jsx';

const ProjectDetails = ({ projectDetails, setProjectDetails, team }) => {
  const [addTeamMemberView, setAddTeamMemberView] = useState(false);

  const getDetail = (value) => {
    if (value === '' || value === null) {
      return 'none on file';
    }
    return value;
  };

  if (addTeamMemberView === false) {
    return (
      <div>
        <p>Project Name: {getDetail(projectDetails[21].value)}</p>
        <p>Project Number: {getDetail(projectDetails[21].value)}</p>
        <p>Project Status: {getDetail(projectDetails[22].value)}</p>
        <p>Team Members: {getDetail(projectDetails[113].value)}</p>
        <p>Est. Start Date: {getDetail(projectDetails[27].value)}</p>
        <p>Est. End Date: {getDetail(projectDetails[30].value)}</p>
        <p>Contracctor Name: {getDetail(projectDetails[129].value)}</p>
        <p>PO #: {getDetail(projectDetails[80].value)}</p>
        <p>Tasks: {getDetail(projectDetails[120].value)}</p>
        <div>
          <AddTeamMemberButton onClick={() => setAddTeamMemberView(true)}>Assign Team Members</AddTeamMemberButton>
        </div>
        <BackButton onClick={() => setProjectDetails(null)}>Back</BackButton>
      </div>
    );
  } else if (addTeamMemberView === true) {
    return (
      <AddTeamMembersToProject addTeamMemberView={addTeamMemberView} setAddTeamMemberView={setAddTeamMemberView} team={team} />
    );
  }
};

export default ProjectDetails;

const BackButton = styled.button`
  :hover {
    cursor: pointer;
  }
  margin-top: 15px;
  margin-bottom: 40px;
`;

const AddTeamMemberButton = styled.button`
  border-radius: 4px;
  padding: 6px;
  font-weight: 450;
  margin-bottom: 15px;
  border: 2px solid green;
  margin-left 20px;
  :hover {
    cursor: pointer;
    box-shadow: inset 0 0 3px #000000;
  }
`;