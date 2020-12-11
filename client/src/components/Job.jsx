import React, { useState } from 'react';

const Job = ({ job }) => {
  return (
    <div>
    <div>
      Project Number: {job[20].value}
    </div>
    <div>
      Project Name: {job[21].value}
    </div>
    </div>
  );
};

export default Job;
