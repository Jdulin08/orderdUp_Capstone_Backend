const router = (module.exports = require("express").Router());
var knex = require("../knex");

// Get all messages
router.get("/", function(req, res) {
  knex.select("id", "questionId", "parentId", "aText")
    .from("answer")
    .then(data => {
      res.json(data);
    });
});

// Get message by id
router.get('/:id', function (req, res) {
  let answerId = req.params.id
  knex.select("id", "questionId", "parentId", "aText")
    .from("answer")
    .where('id', answerId)
    .then( function (data) {
      res.json(data)
    })
})

// Create a custom message as a user
router.post('/', function (req, res) {
  let answerRow = req.body
  knex('answer')
    .insert(answerRow)
    .returning('*')
    .then( (data) => {
      res.json(data)
    })
})

// Delete a user
router.delete('/:id', function (req, res) {
  let answerId = req.params.id
  knex('answer')
    .where('answer.id', answerId)
    .del()
    .then( (data) => {
      res.json(data)
    })
})
