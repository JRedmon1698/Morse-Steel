import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Jobs from './Jobs.jsx';
import TeamMembers from './TeamMembers.jsx';

function App() {
  const [jobs, setJobs] = useState([]);

  const getJobs = () => {
    axios.get('/api/morse/jobs')
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => console.log(err));
  };

    return (
        <div>React is working</div>
    );
};

export default App;