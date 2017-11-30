const router = (module.exports = require("express").Router());
var knex = require("../knex");

const twilio = require('twilio');
var ngrok = require('ngrok');
ngrok.connect(function (err, url) {});

// Twilio Credentials
var accountSid = 'ACfc14778bd630d650581510be80351ecc';
var authToken = '88f19a86c7cff333d2f9dd49e139273e';
var client = require('twilio')(accountSid, authToken);

// Get all employees
router.get("/", function(req, res) {
  knex.select("id", "fName", "lName", "phone")
    .from("employee")
    .then(data => {
      res.json(data);
    });
});

// Get message by id
router.get('/:id', function (req, res) {
  let employeeId = req.params.id
  knex.select("fName", "lName", "phone")
    .from('employee')
    .where('id', employeeId)
    .then( function (data) {
      res.json(data)
    })
})

// Create a new employee
router.post('/', function (req, res) {
  client.messages.create({
      to: "+18478140847",
      from: "+12246518470",
      body: "Give me the Verification Link!!!!!!",
  }, function(err, message) {
      console.log("Message Sent");
  });
    // var row = req.body
    // knex.select('phone')
    //     .from('employee')
    //     .where('phone', row.phone)
    //     .then( (dat) => {
    //         if (dat[0] == undefined)
    })

// Delete a user
router.delete('/:id', function (req, res) {
  let employeeId = req.params.id
  knex('employee')
    .where('employee.id', employeeId)
    .del()
    .then( (data) => {
      res.json(data)
    })
})
