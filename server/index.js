const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const token = require('../quickbase.js');
const twilio = require('../twilio/twilioServer.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 3002;

const morseSteelTeamMembers = 'https://morsesteel.quickbase.com/db/bqv7vttbx';
const morseSteelProjects = 'https://morsesteel.quickbase.com/db/bqs3mx37c';
const hostName = 'morsesteel.quickbase.com';

const appId = 'bqs3mx358';
const projectTableId = 'bqs3mx37c';
const teamMemberTableId = 'bqv7vttbx';

// team members, non-json
app.get('/api/morse/team', (req, res) => {
  const reqUrl = `${morseSteelTeamMembers}?a=API_DoQuery&fmt=structured&includeRids=1&query={10.EX.'Foreman'}&usertoken=${token}`;

  axios(reqUrl)
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
});

// team members, json
app.get('/api/morse/json/team', (req, res) => {
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
});

// projects, non-json
app.get('/api/morse/projects', (req, res) => {
  const reqUrl = `${morseSteelProjects}?a=API_DoQuery&fmt=structured&includeRids=1&usertoken=${token}`;

  axios(reqUrl)
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
});

// projects, json
app.get('/api/morse/json/projects', (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
