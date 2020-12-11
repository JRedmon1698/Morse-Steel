import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobList from './JobList.jsx';
import TeamMembers from './TeamMembers.jsx';

function App() {
  const [jobs, setJobs] = useState([]);

  const getJobs = () => {
    axios.get('/api/morse/json/jobs')
      .then(({ data }) => {
        setJobs(data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getJobs();
  });

    return (
      <div>
        <h1>Morse Steel Projects and Employees</h1>
        <JobList jobs={jobs}/>
      </div>
    );
};

export default App;
