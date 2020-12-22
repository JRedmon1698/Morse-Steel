import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MultipleTeamConfirmModal = ({
  confirmMultipleModalView, setConfirmMultipleModalView, projectDetails,
  setProjectDetails, teamMembersToAdd, setAddTeamMemberView, testTeamMember
}) => {
  const [sendTextBoolean, setSendTextBoolen] = useState(false);

  if (!confirmMultipleModalView) {
    return null;
  }

  const commafy = (team) => {
    if (team.length === 1) {
      return team[0][35].value;
    }
    let commafiedTeam = [];
    let finalCommafiedTeam = [];
    for (let i = 0; i < team.length - 1; i += 1) {
      commafiedTeam.push(`${team[i][35].value}, `);
    }
    finalCommafiedTeam = commafiedTeam.concat(`and ${team[team.length - 1][35].value}`);
    return finalCommafiedTeam;
  };

  let timeNow = new Date();

  const getTime = (time) => {
    let greeting;
    if (time.getHours() >= 0 && time.getHours() <= 11) {
      greeting = 'morning';
    }
    if (time.getHours() >= 12 && time.getHours() <= 17) {
      greeting = 'afternoon';
    }
    if (time.getHours() >= 18 && time.getHours() <= 24) {
      greeting = 'evening';
    }
    return greeting;
  };  

  const sendTextToAddedTeamMembers = (teamMembers, project) => {
    // console.log(teamMembersToAdd, project);
    for (let i = 0; i < teamMembers.length; i += 1) {
      let options = {
        message: `Good ${getTime(timeNow)}, ${teamMembers[i][7].value}. This text is to inform you that you are scheduled to work the ${project[21].value} project, with an estimated start date of ${project[27].value}.`
      };
      axios.post(`/api/twilio/text/+1${teamMembers[i][12].value}`, options)
        .then((data) => console.log(`Text sent to ${teamMembers[i][7].value}`))
        .catch((err) => console.log(err));
    }
  };

  if (teamMembersToAdd.length < 1) {
    return (
      <Modal>
        Please select team members to add!
        <div>
          <OkButton
            onClick={() => {
              setConfirmMultipleModalView(false);
            }}
          >Ok</OkButton>
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
            <input type="checkbox" onChange={() => {
              setSendTextBoolen(true);
            }} /> yes
            <input type="checkbox" /> no
            </div>
        </TextCheckboxes>
        <OkButton onClick={() => {
          if (!sendTextBoolean) {
          setConfirmMultipleModalView(false);
          setAddTeamMemberView(false);
          } else if (sendTextBoolean) {
            sendTextToAddedTeamMembers(teamMembersToAdd, projectDetails);
            setConfirmMultipleModalView(false);
            setAddTeamMemberView(false);
          }
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