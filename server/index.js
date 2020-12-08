const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const token = require('../quickbase.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 3002;

const morseSteelTeamMembers = `https://morsesteel.quickbase.com/db/bqv7vttbx`;

app.get('/api/morse/clients', (req, res) => {
  const reqUrl = `${morseSteelTeamMembers}?a=API_DoQuery&includeRids=1&query={10.EX.'Foreman'}&usertoken=${token}`;

  axios(reqUrl)
    .then(({ data }) =>res.send(data))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
