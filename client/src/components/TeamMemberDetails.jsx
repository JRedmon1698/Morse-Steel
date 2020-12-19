import React, { useState } from 'react';
import styled from 'styled-components';

const TeamMemberDetails = ({ teamMemberDetails, setTeamMemberDetails }) => {

  return (
    <div>{console.log(teamMemberDetails)}
    <p>Name: {teamMemberDetails[35].value}</p>
    <p>Employee #: {teamMemberDetails[9].value}</p>
    <p>Position: {teamMemberDetails[10].value}</p>
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
`;