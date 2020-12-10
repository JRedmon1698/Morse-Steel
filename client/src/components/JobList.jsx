import React, { useState } from 'react';
import Job from './Job.jsx';

const JobList = ({ jobs }) => {
  console.log(jobs);
  if (jobs.length === 0) {
    return null;
  }
// properties of data trying to be pulled before data is populated 
  return (
    <div>
      {/* {jobs[0]['20'].value} */}
      {/* {jobs.map((job, i) => (
       
        <Job job={job} key={i}/>
     
      ))} */}
      
    </div>
  );
};

export default JobList;
