const router = (module.exports = require("express").Router());
var knex = require("../knex");

// Get all messages
router.get("/", function(req, res) {
  knex.select("id", "qText", "type", "ansDetail")
    .from("question")
    .then(data => {
      res.json(data);
    });
});

// Get message by id
router.get('/:id', function (req, res) {
  let questionId = req.params.id
  knex.select("qText", "type", "ansDetail")
    .from("question")
    .where('id', questionId)
    .then( function (data) {
      res.json(data)
    })
})

// Create a custom message as a user
router.post('/', function (req, res) {
  let questionRow = req.body
  knex('question')
    .insert(questionRow)
    .returning('*')
    .then( (data) => {
      res.json(data)
    })
})

// Delete a user
router.delete('/:id', function (req, res) {
  let questionId = req.params.id
  knex('question')
    .where('question.id', questionId)
    .del()
    .then( (data) => {
      res.json(data)
    })
})
