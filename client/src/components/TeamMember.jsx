import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelIcon from '@material-ui/icons/Label';

const TeamMember = ({ teamMember }) => {

  const isActive = (status) => {
      if (status === 'Active') {
        return CheckCircleIcon;
      } else if (status === 'Inactive') {
        return CancelIcon;
      }
      return null;
  };

  let positionColor = 'black';
  const status = teamMember[11].value;
  
  const colorCodePosition = (pos) => {
    if (pos === 'Junior') {
      positionColor = 'orange';
    } else if (pos === 'Apprentice') {
      positionColor = 'lightgreen';
    } else if (pos.includes('Foreman')) {
      positionColor = 'purple';
    } else if (pos === 'General Foreman') {
      positionColor = 'lightblue';
    } else if (pos === 'Superintendent') {
      positionColor = 'pink';
    } 
    positionColor = 'black';
  };
  
  if (status ==='Active') {
    return (
      <div>
        {teamMember[35].value}
        <CheckCircleIcon style={{ fill: 'green' }} />
      </div>
      );
  };
  if (status === 'Inactive') {
    return (
      <div>
        {teamMember[35].value}
        <CancelIcon style={{ fill: 'red' }} />
      </div>
      );
  };
    
};
  
  export default TeamMember;
  
  
  // junior gold
  // apprentice lime green
  // foreman purple
  // gen. formean light blue
  // superint. pink
  // vacay grey?