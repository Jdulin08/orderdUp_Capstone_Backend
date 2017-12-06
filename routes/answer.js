const router = (module.exports = require("express").Router());
const answer = require('../lib/employee')
const question = require('../lib/question')
const port = parseInt(process.env.PORT || 3000)

// Get all employees
router.get("/", function(req, res) {
  // return res.send({ host: req.host, protocol: req.protocol, ip: req.ip })
  answer.getAll()
    .then(data => res.json(data))
    .catch(err => res.status(500).send({
      error: err.message,
      stack: err.stack
    }))
});

// Get message by id
router.get('/:id', function(req, res) {
  answer.getOne(req.params)
    .then(data => res.json(data))
    .catch(err => res.status(500).send({
      error: err.message,
      stack: err.stack
    }))
})

// Create a new answer
router.post('/', function (req, res) {
answer.create(req.body)
  .then(data => res.json(data))
  .catch(err => res.status(500).send({error: err.message, stack: err.stack}))
})


//OLD CODE

// const router = (module.exports = require("express").Router());
// var knex = require("../knex");
//
// // Get all messages
// router.get("/", function(req, res) {
//   knex.select("id", "questionId", "parentId", "aText")
//     .from("answer")
//     .then(data => {
//       res.json(data);
//     });
// });
//
// // Get message by id
// router.get('/:id', function (req, res) {
//   let answerId = req.params.id
//   knex.select("id", "questionId", "parentId", "aText")
//     .from("answer")
//     .where('id', answerId)
//     .then( function (data) {
//       res.json(data)
//     })
// })
//
// // Create a custom message as a user
// router.post('/', function (req, res) {
//   let answerRow = req.body
//   knex('answer')
//     .insert(answerRow)
//     .returning('*')
//     .then( (data) => {
//       res.json(data)
//     })
// })
//
// // Delete a user
// router.delete('/:id', function (req, res) {
//   let answerId = req.params.id
//   knex('answer')
//     .where('answer.id', answerId)
//     .del()
//     .then( (data) => {
//       res.json(data)
//     })
// })
