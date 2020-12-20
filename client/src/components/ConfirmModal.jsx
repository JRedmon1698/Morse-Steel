import React from 'react';
import styled from 'styled-components';

const ConfirmModal = ({
  confirmModalView, setConfirmModalView, projectDetails,
  setProjectDetails, teamMembersToAdd, setAddTeamMemberView
}) => {

  if (!confirmModalView) {
    return null;
  }

  const commafy = (team) => {
    let commafiedTeam = [];
    let finalCommafiedTeam = [];
    for (let i = 0; i < team.length - 1; i += 1) {
      commafiedTeam.push(`${team[i]}, `);
    }
    finalCommafiedTeam = commafiedTeam.concat(`and ${team[team.length - 1]}`);
    return finalCommafiedTeam;
  }

  return (
    <Modal>
      {commafy(teamMembersToAdd)} added to {projectDetails[21].value}
      <div>
        <OkButton onClick={() => {
          setConfirmModalView(false);
          setAddTeamMemberView(false);
          }}>Ok</OkButton>
      </div>
    </Modal>
  );
};

export default ConfirmModal;

const Modal = styled.div`
width: 400px;
height: 250px;
margin: auto;
display: table;
position: fixed;
left: 0;
right:0;
top: 15%;
background: white;
border: 1px solid;
border-radius: 4px;
tansition: 2s ease-out;
filter: blur(0);
transform: scale(1);
opacity: 5;
visibility: visible;
z-index: 999;
text-align: center;
font-size: 20px;
font-weight: 500;
padding-top: 15px;
`;

const OkButton = styled.button`
  :hover {
    cursor: pointer;
  }
  background-color: lightgrey;
  border-radius: 6px;
  margin-top: 150px;
`;