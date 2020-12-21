import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MultipleTeamConfirmModal = ({
  confirmMultipleModalView, setConfirmMultipleModalView, projectDetails,
  setProjectDetails, teamMembersToAdd, setAddTeamMemberView, testTeamMember
}) => {

  if (!confirmMultipleModalView) {
    return null;
  }

  const commafy = (team) => {
    if (team.length === 1) {
      return team;
    }
    let commafiedTeam = [];
    let finalCommafiedTeam = [];
    for (let i = 0; i < team.length - 1; i += 1) {
      commafiedTeam.push(`${team[i]}, `);
    }
    finalCommafiedTeam = commafiedTeam.concat(`and ${team[team.length - 1]}`);
    return finalCommafiedTeam;
  };

  const sendTextToAddedTeamMembers = (teamMembers) => {
    for (let i = 0; i < teamMembers.length; i += 1) {
      axios.post(`/api/twilio/text/+1${teamMembers[i][12].value}`)
        .then(() => console.log(`Text sent to ${teamMembers[i][7].value}`))
        .catch((err) => console.log(err));
    }
  };

  if (teamMembersToAdd.length < 1) {
    return (
      <Modal>
        Please select team members to add.
        <div>
          <TextCheckboxes>
            Send text message to added team members?
            <input type="checkbox" /> yes
            <input type="checkbox" /> no
          </TextCheckboxes>
          <OkButton onClick={() => {
            setConfirmMultipleModalView(false);
          }}>Ok</OkButton>
        </div>
      </Modal>
    );
  }
  return (
    <Modal>
      {commafy(teamMembersToAdd)} added to {projectDetails[21].value}
      <div>
        <TextCheckboxes>
          Send text message to added team members?
          <div>
            <input type="checkbox" /> yes
            <input type="checkbox" /> no
            </div>
        </TextCheckboxes>
        <OkButton onClick={() => {
          setConfirmMultipleModalView(false);
          setAddTeamMemberView(false);
        }}>Ok</OkButton>
      </div>
    </Modal>
  );
};

export default MultipleTeamConfirmModal;

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
  margin-top: 25%;
  margin-bottom: 15px;
`;

const TextCheckboxes = styled.div`
  margin-top: 75px;
  font-size 14px;
  font-style: italic;
`;