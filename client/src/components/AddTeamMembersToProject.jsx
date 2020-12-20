import React, { useState } from 'react';
import styled from 'styled-components';

const AddTeamMembersToProject = ({ projectDetails, setProjectDetails, team }) => {
  const [teamMembersToAdd, setTeamMemberstoAdd] = useState([]);
  const [confirmModalView, setConfirmModalView] = usseState(false);

  if (confirmModalView === false) {
    return (
      <div>
        {team.map((teamMember, i) => (
          <div key={i}>
            <input type="checkbox" onChange={(e) => teamMembersToAdd.push(e.target.value)} value={teamMember[35].value} /> {teamMember[35].value}
          </div>
        ))}
        <AddTeamMemberButton onClick={() => setConfirmModalView(true)}>Add to {projectDetails[21].value}</AddTeamMemberButton>
      </div>
    );
  } else if (confirmModalView === true) {
    return (
      <ConfirmModal setAddTeamMemberView={setAddTeamMemberView} />
    );
  }
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