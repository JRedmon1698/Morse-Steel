import React, { useState } from 'react';
import styled from 'styled-components';

const AddTeamMembersToProject = ({ projectDetails, setProjectDetails, team }) => {
  const [teamMembersToAdd, setTeamMemberstoAdd] = useState({});

  return (
    <div>{console.log(projectDetails)}
      {team.map((teamMember, i) => (
        <div key={i}>
          <input type="checkbox" onChange={() => console.log('change')}/> {teamMember[35].value}
        </div>
      ))}
      <AddTeamMemberButton>Add to {projectDetails[21].value}</AddTeamMemberButton>
    </div>
  );
};

export default AddTeamMembersToProject;

const AddTeamMemberButton = styled.button`
  :hover {
    cursor: pointer;
    box-shadow: inset 0 0 4px #000000;
  }
  padding: 10px;
  font-size: 20px;
  margin-top 20px;
  margin-left: 40px;
`;