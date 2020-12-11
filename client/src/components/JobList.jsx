import React, { useState } from 'react';
import Job from './Job.jsx';

const JobList = ({ jobs }) => {
  if (jobs.length === 0) {
    return null;
  }
// properties of data trying to be pulled before data is populated 
  return (
    <div>
       {jobs.map((job, i) => (
         <div key={i}>
         <h3>Project: </h3>
        <Job job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobList;
