import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList.jsx';
import TeamMemberList from './TeamMemberList.jsx';
import styled from 'styled-components';
import morseSteelImage from '../../images/morse-steel.jpg';
import dropboxImage from '../../images/dropbox.png';
import quickbaseImage from '../../images/quickbase.png';
import testTeamMember from '../../../client/sample.js';
import dropBoxUrl from './../../../dropbox.config.js';

function App() {
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [view, setView] = useState('home');

  // want view where you can select a specific date (calendar view? select date input?) and see all 
  // projects on that date, as well as employees working those projects 

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
  }, []);

  useEffect(() => {
    getTeam();
  }, []);

  if (view === 'home') {
    return (
      <div>
        <div>
          <LinkWrapper>
            <HomeTitleWrapper>
              Project and Team Member Manager
            </HomeTitleWrapper>
            <DropboxDiv>
              Dropbox
        <DropBoxLink href={dropBoxUrl}
                target='_blank' />
            </DropboxDiv>
            <QuickbaseDiv>
              Quickbase
          <QuickbaseLink href='https://morsesteel.quickbase.com/db/main?a=myqb'
                target='_blank' />
            </QuickbaseDiv>
          </LinkWrapper>
        </div>
        <TitlePicture/>
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
        <ProjectList projects={projects} team={team} 
        testTeamMember={testTeamMember} />
        <HomeButton onClick={displayHomeView}>Home</HomeButton>
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
        <TeamMemberList team={team} projects={projects} testTeamMember={testTeamMember} />
        <HomeButton onClick={displayHomeView}>Home</HomeButton>
      </div>
    );
  };
};

export default App;

const HomeTitleWrapper = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-right: 40px;
`;

const LinkWrapper = styled.div`
  float: right;
  margin-top: 10px;
  margin-right: 10px;
`;

const DropboxDiv = styled.div`
  float: left;
  margin-top: 20px;
  font-size: 16px;
  margin-left: 20px;
`;

const QuickbaseDiv = styled.div`
  float: right;
  margin-right: 80px;
  margin-top: 20px;
  font-size: 16px;
`;

const DropBoxLink = styled.a`
  background-image: url(${dropboxImage});
  padding: 12px;
  margin-left: 20px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

const QuickbaseLink = styled.a`
  background-image: url(${quickbaseImage});
  padding: 13px;
  margin-left: 20px;
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
  margin-top: 100px;
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
  margin-top: 100px;
  font-size: 20px;
  padding: 20px;
  border-radius: 7px;
  position: relative;
  float: right; 
  margin-right: 25%;
  `;

const HomeButton = styled.button`
  :hover {
    cursor: pointer;
  }
  margin-top: 45px;
  padding: 10px;
  font-size 14px;
  background-color: green;
  color: white;
`;

const TitlePicture = styled.div`
  background-image: url(${morseSteelImage});
  padding: 100px;
  background-repeat: no-repeat;
  margin: 30px;
`;
