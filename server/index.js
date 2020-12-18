const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const Twilio = require('./controllers/twilio.js');
const Quickbase = require('./controllers/quickbase.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 3002;

// * * * * * Quickbase calls * * * * *

app.get('/api/morse/team', (req, res) => {
  Quickbase.getTeamInfo(req, res);
});

app.get('/api/morse/json/team', (req, res) => {
  Quickbase.getTeamMembers(req, res);
});

app.get('/api/morse/projects', (req, res) => {
  Quickbase.getProjectInfo(req, res);
});

app.get('/api/morse/json/projects', (req, res) => {
  Quickbase.getProjects(req, res);
});

//  * * * * * Twilio calls * * * * *

app.post('/api/twilio/test', (req, res) => {
  Twilio.sendText(req, res);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
