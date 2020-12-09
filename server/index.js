const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const token = require('../quickbase.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 3002;

const morseSteelTeamMembers = 'https://morsesteel.quickbase.com/db/bqv7vttbx';
const morseSteelJobs = 'https://morsesteel.quickbase.com/db/bqs3mx37c';

const appId = 'bqs3mx358';
const projectTableId = 'bqs3mx37c';
const teamMemberTableId = 'bqv7vttbx';

// team members
app.get('/api/morse/team', (req, res) => {
  const reqUrl = `${morseSteelTeamMembers}?a=API_DoQuery&fmt=structured&includeRids=1&query={10.EX.'Foreman'}&usertoken=${token}`;

  axios(reqUrl)
    .then(({ data }) =>res.send(data))
    .catch((err) => console.log(err));
});

// jobs
app.get('/api/morse/jobs', (req, res) => {
  const reqUrl = `${morseSteelJobs}?a=API_DoQuery&fmt=structured&includeRids=1&usertoken=${token}`;

  axios(reqUrl)
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
});

// json req
app.get('/api/morse/json/table', (req, res) => {
  const reqUrl = `https://api.quickbase.com/v1/tables/{tableId}?appId=`;
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
