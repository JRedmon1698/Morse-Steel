import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelIcon from '@material-ui/icons/Label';

const TeamMember = ({ teamMember }) => {

  const isActive = (activityStatus) => {
      if (activityStatus === 'Active') {
        return <CheckCircleIcon style={{ fill: 'green' }} />;
      } else if (activityStatus === 'Inactive') {
        return <CancelIcon style={{ fill: 'red' }} />;
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
  //   } else if (pos.includes('Foreman')) {
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
      {teamMember[35].value}
      {isActive(status)}
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