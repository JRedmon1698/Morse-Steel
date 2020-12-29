const { client, sourceNumber, destinationNumber } = require('../../twilio/config.js');
const token = require('../../quickbase.config.js');
const axios = require('axios');

const morseSteelTeamMembers = 'https://morsesteel.quickbase.com/db/bqv7vttbx';
const morseSteelProjects = 'https://morsesteel.quickbase.com/db/bqs3mx37c';
const hostName = 'morsesteel.quickbase.com';

const appId = 'bqs3mx358';
const projectTableId = 'bqs3mx37c';
const teamMemberTableId = 'bqv7vttbx';

// for getting field info for team members table in quickbase 
exports.getTeamInfo = (req, res) => {
  const reqUrl = `${morseSteelTeamMembers}?a=API_DoQuery&fmt=structured&includeRids=1&query={10.EX.'Foreman'}&usertoken=${token}`;
  axios(reqUrl)
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
};

// for getting individual or multiple team members 
exports.getTeamMembers = (req, res) => {
  const reqUrl = `https://api.quickbase.com/v1/records/query`;
  const headers = {
    'QB-Realm-Hostname': `${hostName}`,
    'User-Agent': 'Joe',
    'Authorization': `QB-USER-TOKEN ${token}`,
    'Content-Type': 'application/json'
  };
  const body = {
    'from': `${teamMemberTableId}`,
    'select': [
      35, 10, 11, 12, 13, 14, 15, 70, 16, 71, 
      9, 20, 33, 58
    ],
    'where': '',
    'sortBy': false,
    'groupBy': [
      {
        'fieldId': 7,
        'grouping': 'ASC'
      },
    ],
    'options': {
      'skip': 0,
      'top': 0,
      'compareWithAppLocalTime': false
    },
  };
  axios({
    method: 'POST',
    url: reqUrl,
    headers,
    data: body
  })
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
};

// for getting field info for projects table in quickbase 
exports.getProjectInfo = (req, res) => {
  const reqUrl = `${morseSteelProjects}?a=API_DoQuery&fmt=structured&includeRids=1&usertoken=${token}`;
  axios(reqUrl)
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
};

// for getting individual or mutliple projects 
exports.getProjects = (req, res) => {
  const reqUrl = `https://api.quickbase.com/v1/records/query`;
  const headers = {
    'QB-Realm-Hostname': `${hostName}`,
    'User-Agent': 'Joe',
    'Authorization': `QB-USER-TOKEN ${token}`,
    'Content-Type': 'application/json'
    };
  const body = {
    'from': `${projectTableId}`,
    'select': [
      20, 21, 22, 27, 30, 45, 80, 113, 120, 129, 131, 
      132, 140, 149, 157, 159, 161
    ],
    'where': '',
    'sortBy': false,
    'groupBy': [
      {
        'fieldId': 20,
        'grouping': 'ASC'
      },
    ],
    'options': {
      'skip': 0,
      'top': 0,
      'compareWithAppLocalTime': false
    },
  };
  axios({
    method: 'POST',
    url: reqUrl,
    headers,
    data: body
  })
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
};
