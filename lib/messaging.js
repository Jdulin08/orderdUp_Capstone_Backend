const Promise = require('bluebird')
const twilio = require('twilio');
// Twilio Credentials
const accountSid = 'ACfc14778bd630d650581510be80351ecc';
const authToken = '88f19a86c7cff333d2f9dd49e139273e';
const client = require('twilio')(accountSid, authToken);

Promise.promisifyAll(client)

module.exports = {send}

function send({
  msgTo = "+18478140847",
  msgFrom = "+12246518470",
  body = "Specify a message!"}) {
  return client.messages.create({
    to:   msgTo,
    from: msgFrom,
    body: body,
  });
}
