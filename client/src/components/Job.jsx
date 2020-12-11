import React, { useState } from 'react';

const Job = ({ job }) => {
  return (
    <div>
      <div>
        Project Number: {job[20].value}
      </div>
      <div>
        {/* Project Status: {job[22].value} */}
      </div>
    </div>
  );
};

export default Job;
