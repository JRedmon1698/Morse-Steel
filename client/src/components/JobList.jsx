import React, { useState } from 'react';
import Job from './Job.jsx';

const JobList = ({ jobs }) => {

  return (
    <div>
      {/* {jobs.map((job, i) => {
        <Job />
      })} */}
      {console.log(jobs)}
    </div>
  );
};

export default JobList;
