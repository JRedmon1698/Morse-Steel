// junior gold
// apprentice lime green
// foreman purple
// gen. formean light blue
// superint. pink
// vacay grey?

import React, { useState } from 'react';
import TeamMember from './TeamMember.jsx';

const TeamMemberList = ({ team }) => {

  if (team.length === 0) {
    return null;
  }

  return (
    <div>
      {team.map((teamMember, i) => (
        <div key={i}>
          <TeamMember teamMember={teamMember} />
        </div>
      ))}
    </div>
  );
};

export default TeamMemberList;
