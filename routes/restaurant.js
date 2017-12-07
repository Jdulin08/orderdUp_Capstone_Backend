const router = (module.exports = require("express").Router());
var knex = require("../knex");
const fetch = require('node-fetch')
const restaurant = require('../lib/restaurant')
const messaging = require('../lib/messaging')
const port = parseInt(process.env.PORT || 3000)


router.get("/", function(req, res) {
  restaurant.getAll()
    .then(data => res.json(data))
    .catch(err => res.status(500).send({error: err.message, stack: err.stack}))
});

// Get manager by id
router.get('/:id', function (req, res) {
  restaurant.getOne(req.params)
  .then(data => res.json(data))
  .catch(err => res.status(500).send({error: err.message, stack: err.stack}))
})

// Create a new restaurant
router.post('/', function (req, res) {
restaurant.create(req.body)
// return knex('restaurant').where('email', req.body.email)
  .then(data => res.json(data))
  .catch(err => res.status(500).send({error: err.message, stack: err.stack}))
})

// Delete a user
router.delete('/:id', function (req, res) {
  restaurant.remove(req.params)
  .then(data => res.json(data))
  .catch(err => res.status(500).send({error: err.message, stack: err.stack}))
})


//OLD CODE
// // call like: getLink(req)
// function getLink({protocol, host, body}) {
//   const {phone} = body
//   return `${protocol}://${host}${port === 80 ? '' : ':' + port}/users/${phone}`
// }

// // Get all restaurants
// router.get("/", function(req, res) {
//   knex.select("id", "fName", "lName", "email")
//     .from("restaurant")
//     .then(data => {
//       res.json(data);
//     });
// });
//
// // Get message by id
// router.get('/:id', function (req, res) {
//   let managerId = req.params.id
//   knex.select("id", "fName", "lName", "email")
//     .from('restaurant')
//     .where('id', managerId)
//     .then( function (data) {
//       res.json(data)
//     })
// })

// // Delete a user
// router.delete('/:id', function (req, res) {
//   let managerId = req.params.id
//   knex('restaurant')
//     .where('restaurant.id', managerId)
//     .del()
//     .then( (data) => {
//       res.json(data)
//     })
// })
