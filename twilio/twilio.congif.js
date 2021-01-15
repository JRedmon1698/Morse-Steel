const accountSid = 'ACb5238abd3767ce35a284e149ba2f5ed8';
const authToken = 'b5273a9722592887aab587e19bc026af';
const API_KEY = 'SKda0d62639a892531231c646d487a3723';
const client = require('twilio')(accountSid, authToken);

const sourceNumber = '+12516071813';
const destinationNumber = '+19073015054';

// *** EXAMPLE MSG FORMAT ***

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+12516071813',
//      to: '+19073015054'
//    })
//   .then(message => console.log(message.sid));

module.exports = { 
  client, sourceNumber, destinationNumber, 
};
