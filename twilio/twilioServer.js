const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const twilio = express();

twilio.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(twilio).listen(1337, () => {
  console.log('Twilio server listening on port 1337');
});

module.exports = twilio;
