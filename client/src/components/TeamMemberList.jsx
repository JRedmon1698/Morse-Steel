// junior gold
// apprentice lime green
// foreman purple
// gen. formean light blue
// superint. pink
// vacay grey?

import React, { useState } from 'react';
import styled from 'styled-components';
import TeamMember from './TeamMember.jsx';
import TeamMemberDetails from './TeamMemberDetails.jsx';

const TeamMemberList = ({ team, projects }) => {
  const [teamMemberDetails, setTeamMemberDetails] = useState(null);

  if (team.length === 0) {
    return null;
  }

  if (teamMemberDetails === null) {
    return (
      <div>
        {team.sort((a, b) => {
          return a[35].value.localeCompare(b[35].value);
        })
          .map((teamMember, i) => (
            <div key={i} onClick={() => setTeamMemberDetails(teamMember)}>
              <TeamMember teamMember={teamMember} />
            </div>
          ))}
      </div>
    );
  } else if (teamMemberDetails !== null) {
    return (
      <TeamMemberDetails teamMemberDetails={teamMemberDetails} setTeamMemberDetails={setTeamMemberDetails} projects={projects} />
    );
  }
};

export default TeamMemberList;
