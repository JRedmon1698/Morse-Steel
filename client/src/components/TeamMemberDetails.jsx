import React, { useState } from 'react';
import styled from 'styled-components';

const TeamMemberDetails = ({ teamMemberDetails, setTeamMemberDetails, projects }) => {

  const getDetail = (value) => {
    if (value === '') {
      return 'none on file';
    }
    return value;
  };

  return (
    <div>
      <p>Name: {getDetail(teamMemberDetails[35].value)}</p>
      <p>Employee #: {getDetail(teamMemberDetails[9].value)}</p>
      <p>Position: {getDetail(teamMemberDetails[10].value)}</p>
      <p>Status: {getDetail(teamMemberDetails[11].value)}</p>
      <p>Cell phone: {getDetail(teamMemberDetails[12].value)}</p>
      <p>Home phone: {getDetail(teamMemberDetails[14].value)}</p>
      <p>Email: {getDetail(teamMemberDetails[15].value)}</p>
      <p>Secondary Email: {getDetail(teamMemberDetails[70].value)}</p>
      <p>Certifications: {getDetail(teamMemberDetails[33].value)}</p>
      <div>
        <h4>Add To Project</h4>
        <DropDownProjects>
          {projects.map((project, i) => (
            <option key={i}>
              {project[21].value}
            </option>
          ))}
        </DropDownProjects>
        <AddToProjectButton>Add</AddToProjectButton>
      </div>
      <BackButton onClick={() => setTeamMemberDetails(null)}>Back</BackButton>
    </div>
  );
};

export default TeamMemberDetails;

const BackButton = styled.button`
  :hover {
    cursor: pointer;
  }
  margin-top: 15px;
  margin-bottom: 40px;
`;

const DropDownProjects = styled.select`
  color: black;
`;

const AddToProjectButton = styled.button`
  color: black;
  margin-left: 10px;
  :hover {
    cursor: pointer;
    border: 2px solid green;
    background-color: lightgreen;
  }
  border-radius: 10px;
`;