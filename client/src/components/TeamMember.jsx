import React, { useState } from 'react';
import styled from 'styled-components';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelIcon from '@material-ui/icons/Label';
import TeamMemberDetails from './TeamMemberDetails.jsx';

const TeamMember = ({ teamMember }) => {
  const [teamMemberDetails, setTeamMemberDetails] = useState(null);

  const isActive = (activityStatus) => {
    if (activityStatus === 'Active') {
      return <CheckCircleIcon style={{ fill: 'green'}} />;
    } else if (activityStatus === 'Inactive') {
      return <CancelIcon style={{ fill: 'red'}} />;
    }
    return null;
  };

  const status = teamMember[11].value;

  // let positionColor = 'black';
  // const colorCodePosition = (pos) => {
  //   if (pos === 'Junior') {
  //     positionColor = 'orange';
  //   } else if (pos === 'Apprentice') {
  //     positionColor = 'lightgreen';
  //   } else if (pos === ('Foreman')) {
  //     positionColor = 'purple';
  //   } else if (pos === 'General Foreman') {
  //     positionColor = 'lightblue';
  //   } else if (pos === 'Superintendent') {
  //     positionColor = 'pink';
  //   } 
  //   positionColor = 'black';
  // };

  return (
    <div>
      <TeamMemberNameHover>
        {/* <PositionColor> */}
          {teamMember[35].value} {isActive(status)}
          {/* </PositionColor>  */}
      </TeamMemberNameHover>
    </div>
  );
};

export default TeamMember;

// junior gold
// apprentice lime green
// foreman purple
// gen. formean light blue
// superint. pink
// vacay grey?

const TeamMemberNameHover = styled.div`
  :hover {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
  display: inline-block;
  text-align: center;
`;

// const PositionColor = styled.p`
//   background-color: ${positionColor};
// `;
