const router = (module.exports = require("express").Router());
var knex = require("../knex");
// const twilio = require('twilio');
// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN).lookups.v1;
// var ngrok = require('ngrok');
// ngrok.connect(function (err, url) {});


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
    var row = req.body
    knex.select('phone')
        .from('employee')
        .where('phone', row.phone)
        .then( (dat) => {
            if (dat[0] == undefined) {
              client.messages.create({
                  to: "+18478140847",
                  from: "+15017250604",
                  body: "LINK",
              }, function(err, message) {
                  console.log("Helllloooo");
              });
        }
      })
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
