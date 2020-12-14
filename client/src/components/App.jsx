import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList.jsx';
import TeamMemberList from './TeamMemberList.jsx';
import styled from 'styled-components';
import morseSteelImage from '../../images/morse-steel.jpg';
import dropboxImage from '../../images/dropbox.png';

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
        <div>
          <HomeTitleWrapper>
            Project and Team Member Manager
        </HomeTitleWrapper>
          <DropBoxLink href='https://www.dropbox.com/s/z099nf9lxcsasih/MSR%20FIELD%20LABOR%204%20WEEK%20LOOK%20AHEAD_Week%20End%2012.5.20.xlsx?dl=0' 
          target='_blank'/>
        </div>
        <TitlePicture />
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
        <div>
          <TitlePicture />
        </div>
        <h1>Projects</h1>
        <ProjectList projects={projects} />
        <BackButton onClick={displayHomeView}>Back</BackButton>
      </div>
    );
  };

  if (view === 'team') {
    return (
      <div>
        <div>
          <TitlePicture />
        </div>
        <h1>Team Members</h1>
        <TeamMemberList team={team} />
        <BackButton onClick={displayHomeView}>Back</BackButton>
      </div>
    );
  };
};

export default App;

const HomeTitleWrapper = styled.div`
  font-size: 25px;
  font-weight: 700;
  float: right;
  margin-left: 30px;
`;

const DropBoxLink = styled.a`
  background-image: url(${dropboxImage});
  padding: 12px;
  float: right;
  margin-top: 20px;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

const ProjectButton = styled.button`
  :hover {
    cursor: pointer;
    background-color: green;
  }
  margin-top: 10px;
  font-size: 20px;
  padding: 20px;
  border-radius: 7px;
  position: relative;
  float: left;
  margin-left: 25%;
`;

const TMButton = styled.button`
  :hover {
    cursor: pointer;
    background-color: green;
  }
  margin-top: 10px;
  font-size: 20px;
  padding: 20px;
  border-radius: 7px;
  position: relative;
  float: right; 
  margin-right: 25%;
  `;

const BackButton = styled.button`
  :hover {
    cursor: pointer;
  }
  margin-top: 15px;
`;


const TitlePicture = styled.div`
  background-image: url(${morseSteelImage});
  padding: 190px;
  background-repeat: no-repeat;
  margin: 30px;

`;
