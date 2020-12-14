import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList.jsx';
import TeamMemberList from './TeamMemberList.jsx';
import styled from 'styled-components';

function App() {
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [view, setView] = useState('home');

  const getProjects = () => {
    axios.get('/api/morse/json/projects')
      .then(({ data }) => {
        setProjects(data.data);
      })
      .catch((err) => console.log(err));
  };

  const getTeam = () => {
    axios.get('/api/morse/json/team')
      .then(({ data }) => {
        setTeam(data.data);
      })
      .catch((err) => console.log(err));
  };

  const displayProjectView = () => {
    setView('projects');
  };

  const displayTeamMemberView = () => {
    setView('team');
  };

  const displayHomeView = () => {
    setView('home');
  };

  useEffect(() => {
    getProjects();
  });

  useEffect(() => {
    getTeam();
  });

  if (view === 'home') {
    return (
      <div>
        <h1>Morse Steel Projects and Team Members Home</h1>
        <div>
          <ProjectButton onClick={displayProjectView}>Projects</ProjectButton>
        </div>
        <div>
          <TMButton onClick={displayTeamMemberView}>Team Members</TMButton>
        </div>
      </div>
    );
  };

  if (view === 'projects') {
    return (
      <div>
        <h1>Morse Steel Projects</h1>
        <ProjectList projects={projects} />
        <BackButton onClick={displayHomeView}>Back</BackButton>
      </div>
    );
  };

  if (view === 'team') {
    return (
      <div>
        <h1>Morse Steel Team Members</h1>
        <TeamMemberList team={team}/>
        <BackButton onClick={displayHomeView}>Back</BackButton>
      </div>
    );
  };
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

const BackButton = styled.button`
  :hover {
    cursor: pointer;
  }
  margin-top: 15px;
`;
