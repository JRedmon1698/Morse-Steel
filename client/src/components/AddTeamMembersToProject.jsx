import React, { useState } from 'react';
import styled from 'styled-components';
import MultipleTeamConfirmModal from './MultipleTeamConfirmModal.jsx';

const AddTeamMembersToProject = ({ 
  projectDetails, setProjectDetails, team, setAddTeamMemberView, testTeamMember
}) => {
  const [teamMembersToAdd, setTeamMemberstoAdd] = useState([]);
  const [confirmMultipleModalView, setConfirmMultipleModalView] = useState(false);

  return (
    <div>
      {team.map((teamMember, i) => (
        <div key={i}>
          <input type="checkbox" onChange={(e) => {
            teamMembersToAdd.push(e.target.value);
          }} value={teamMember[35].value} /> {teamMember[35].value}
        </div>
      ))}
      <div>
          <input type="checkbox" onChange={(e) => {
            teamMembersToAdd.push(e.target.value);
          }} value={testTeamMember[35].value} /> {testTeamMember[35].value}
      </div>
      <AddTeamMemberButton onClick={() => {
        setConfirmMultipleModalView(true);
      }}>Add to {projectDetails[21].value}</AddTeamMemberButton> <CancelButton onClick={() => {
        setAddTeamMemberView(false);
      }}>Cancel</CancelButton>
      <MultipleTeamConfirmModal confirmMultipleModalView={confirmMultipleModalView}
        setConfirmMultipleModalView={setConfirmMultipleModalView}
        setProjectDetails={setProjectDetails}
        projectDetails={projectDetails}
        teamMembersToAdd={teamMembersToAdd}
        setAddTeamMemberView={setAddTeamMemberView} 
        testTeamMember={testTeamMember}/>
      {confirmMultipleModalView ? <PageMask /> : null}
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

const PageMask = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const CancelButton = styled.button`
  :hover {
    cursor: pointer;
    border: 2px solid red;
  }
  margin-left: 45px;
`;
