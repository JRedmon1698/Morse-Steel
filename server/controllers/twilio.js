const { client, sourceNumber, destinationNumber } = require('../../twilio/config.js');
const axios = require('axios');
const twilio = require('../../twilio/twilioServer.js');
const Quickbase = require('./quickbase.js');

// exports.sendText = (req, res) => {
//   client.messages
//     .create({
//       body: 'This is a test.',
//       from: `${sourceNumber}`,
//       to: `${destinationNumber}`
//     })
//     .then(() => res.send('Success'))
//     .catch((err) => console.log(err));
// };

exports.sendText = (req, res) => {
  client.messages
    .create({
      body: req.body.message,
      from: `${sourceNumber}`,
      to: req.params.destinationNumber
    })
    .then(() => res.send('Success'))
    .catch((err) => console.log(err));
};

// to do next: send text with specifics about project and team member 
exports.sendTextWithQBInfo = (req, res) => {
  Quickbase.getTeamMembers();
  Quickbase.getProjects(req, res);
};

// for twilio: where to report, when, who to report to (foreman)
// add position & color, alphabetical, % of ea. pos.
