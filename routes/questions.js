const router = (module.exports = require("express").Router());
var knex = require("../knex");
const question = require('../lib/question')
const port = parseInt(process.env.PORT || 3000)


// Get all questions
router.get("/", function(req, res) {
  // return res.send({ host: req.host, protocol: req.protocol, ip: req.ip })
  question.getAll()
    .then(data => res.json(data))
    .catch(err => res.status(500).send({error: err.message, stack: err.stack}))
});

// Get message by id
router.get('/:id', function (req, res) {
  question.getOne(req.params)
  .then(data => res.json(data))
  .catch(err => res.status(500).send({error: err.message, stack: err.stack}))
})


//OLD CODE - not refactored into lib functions

// // Get all messages
// router.get("/", function(req, res) {
//   knex.select("id", "qText", "type", "category", "ansDetail")
//     .from("question")
//     .then(data => {
//       res.json(data);
//     });
// });
//
// // Get message by id
// router.get('/:id', function (req, res) {
//   let questionId = req.params.id
//   knex.select("qText", "type", "category", "ansDetail")
//     .from("question")
//     .where('id', questionId)
//     .then( function (data) {
//       res.json(data)
//     })
// })
//
// // Create a custom message as a user
// router.post('/', function (req, res) {
//   let questionRow = req.body
//   knex('question')
//     .insert(questionRow)
//     .returning('*')
//     .then( (data) => {
//       res.json(data)
//     })
// })
//
// // Delete a user
// router.delete('/:id', function (req, res) {
//   let questionId = req.params.id
//   knex('question')
//     .where('question.id', questionId)
//     .del()
//     .then( (data) => {
//       res.json(data)
//     })
// })
