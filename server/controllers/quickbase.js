const { client, sourceNumber, destinationNumber } = require('../../twilio/twilio.config.js');
const token = require('../../quickbase.config.js');
const axios = require('axios');

const morseSteelTeamMembers = 'https://morsesteel.quickbase.com/db/bqv7vttbx';
const morseSteelProjects = 'https://morsesteel.quickbase.com/db/bqs3mx37c';
const hostName = 'morsesteel.quickbase.com';

const appId = 'bqs3mx358';
const projectTableId = 'bqs3mx37c';
const teamMemberTableId = 'bqv7vttbx';

exports.getTeamInfo = (req, res) => {
  const reqUrl = `${morseSteelTeamMembers}?a=API_DoQuery&fmt=structured&includeRids=1&query={10.EX.'Foreman'}&usertoken=${token}`;
  axios(reqUrl)
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
};
