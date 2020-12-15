import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelIcon from '@material-ui/icons/Label';

const TeamMember = ({ teamMember }) => {

  const isActive = (status) => {
    if (status) {
      if (status === 'Active') {
        return CheckCircleIcon;
      } else if (status === 'Inactive') {
        return CancelIcon;
      }
      return null;
    }
  };

// junior gold
// apprentice lime green
// foreman purple
// gen. formean light blue
// superint. pink
// vacay grey?

  // const colorCodePosition = (pos) => {
  //   let positionColor = 'black';
  //   if (pos === 'Junior) {

  //   }
  // };

    return (
        <div>
          {teamMember[35].value}
        </div>
    );
};

export default TeamMember;
