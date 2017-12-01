const test = require('ava')
const messaging = require('./messaging')

test('send message', t => {
  return messaging.send({body: 'This is only a test!'})
  .then(result => t.pass())
  .catch(err => t.fail())
})
