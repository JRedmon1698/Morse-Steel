import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList.jsx';
import TeamMembers from './TeamMembers.jsx';
import styled from 'styled-components';

function App() {
  const [project, setProject] = useState([]);
  const [view, setView] = useState('home');

  const getProjects = () => {
    axios.get('/api/morse/json/projects')
      .then(({ data }) => {
        setProjects(data.data);
      })
      .catch((err) => console.log(err));
  };

  const displayProjectView = () => {
    setView('projects');
  };

  useEffect(() => {
    getProjects();
  });

  if (view === 'home') {
    return (
      <div>
        <h1>Morse Steel Projects and Team Members</h1>
        <div>
          <ProjectButton>Projects</ProjectButton>
        </div>
        <div>
          <TMButton>Team Members</TMButton>
        </div>
      </div>
    );
  };


  if (view === 'projects') {
    return (
      <div>
        <h1>Morse Steel Projects and Team Members</h1>
        <ProjectList projects={projects} />
      </div>
    );
  }
};

export default App;

const ProjectButton = styled.button`
  :hover {
    cursor: pointer;
  }
  margin-bottom: 10px;
`;

const TMButton = styled.button`
  :hover {
    cursor: pointer;
  }
  margin-top: 10px;
`;
