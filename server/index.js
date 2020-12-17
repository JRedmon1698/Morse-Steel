const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const token = require('../quickbase.config.js');
const twilio = require('../twilio/twilioServer.js');
// const { client, sourceNumber, destinationNumber } = require('../twilio/config.js');
const Quickbase = require('./controllers/quickbase.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 3002;

// const morseSteelTeamMembers = 'https://morsesteel.quickbase.com/db/bqv7vttbx';
// const morseSteelProjects = 'https://morsesteel.quickbase.com/db/bqs3mx37c';
// const hostName = 'morsesteel.quickbase.com';

// const appId = 'bqs3mx358';
// const projectTableId = 'bqs3mx37c';
// const teamMemberTableId = 'bqv7vttbx';

// team members, non-json
app.get('/api/morse/team', (req, res) => {
  // const reqUrl = `${morseSteelTeamMembers}?a=API_DoQuery&fmt=structured&includeRids=1&query={10.EX.'Foreman'}&usertoken=${token}`;

  // axios(reqUrl)
  //   .then(({ data }) => res.send(data))
  //   .catch((err) => console.log(err));
  Quickbase.getTeamInfo(req, res);
});

// team members, json
app.get('/api/morse/json/team', (req, res) => {
  Quickbase.getTeamMembers(req, res);
  // const reqUrl = `https://api.quickbase.com/v1/records/query`;

  // const headers = {
  //   'QB-Realm-Hostname': `${Quickbase.hostName}`,
  //   'User-Agent': 'Joe',
  //   'Authorization': `QB-USER-TOKEN ${token}`,
  //   'Content-Type': 'application/json'
  // };

  // const body = {
  //   'from': `${Quickbase.teamMemberTableId}`,
  //   'select': [
  //     35, 10, 11, 12, 13, 14, 15, 70, 16, 71, 
  //     9, 20, 33, 58
  //   ],
  //   'where': '',
  //   'sortBy': false,
  //   'groupBy': [
  //     {
  //       'fieldId': 7,
  //       'grouping': 'ASC'
  //     },
  //   ],
  //   'options': {
  //     'skip': 0,
  //     'top': 0,
  //     'compareWithAppLocalTime': false
  //   },
  // };

  // axios({
  //   method: 'POST',
  //   url: reqUrl,
  //   headers,
  //   data: body
  // })
  //   .then(({ data }) => res.send(data))
  //   .catch((err) => console.log(err));
});

// projects, non-json
app.get('/api/morse/projects', (req, res) => {
  // const reqUrl = `${morseSteelProjects}?a=API_DoQuery&fmt=structured&includeRids=1&usertoken=${token}`;

  // axios(reqUrl)
  //   .then(({ data }) => res.send(data))
  //   .catch((err) => console.log(err));
  Quickbase.getProjectInfo(req, res);
});

// projects, json
app.get('/api/morse/json/projects', (req, res) => {
  Quickbase.getProjects(req, res);

});

// twilio test call
app.post('/api/twilio/test', (req, res) => {

  axios('/api/morse/json/projects')
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
  
  // client.messages
  // .create({
  //    body: 'This is a test.',
  //    from: `${sourceNumber}`,
  //    to: `${destinationNumber}`
  //  })
  // .then(message => res.send('Success'))
  // .catch((err) => console.log(err));

});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
