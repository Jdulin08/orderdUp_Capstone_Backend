const router = (module.exports = require("express").Router());
var knex = require("../knex");
const fetch = require('node-fetch')

// Get all employees
router.get("/", function(req, res) {
  knex.select("id", "fName", "lName", "email")
    .from("restaurant")
    .then(data => {
      res.json(data);
    });
});

// Get message by id
router.get('/:id', function (req, res) {
  let managerId = req.params.id
  knex.select("id", "fName", "lName", "email")
    .from('restaurant')
    .where('id', managerId)
    .then( function (data) {
      res.json(data)
    })
})

// Create a new employee
router.post('/', function (req, res) {
    var row = req.body
    knex.select('email')
        .from('restaurant')
        .where('phone', row.email)
        .then( (data) => {
          res.json(data)
        })
})

// Delete a user
router.delete('/:id', function (req, res) {
  let managerId = req.params.id
  knex('restaurant')
    .where('restaurant.id', managerId)
    .del()
    .then( (data) => {
      res.json(data)
    })
})
