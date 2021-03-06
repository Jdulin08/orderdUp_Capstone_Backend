const router = (module.exports = require("express").Router());
const answer = require('../lib/answer')
const question = require('../lib/question')
const port = parseInt(process.env.PORT || 3000)

// Get all answers
router.get("/", function(req, res) {
  // return res.send({ host: req.host, protocol: req.protocol, ip: req.ip })
  answer.getAll()
    .then(data => res.json(data))
    .catch(err => res.status(500).send({
      error: err.message,
      stack: err.stack
    }))
});

// Get answer by id
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
  console.log(req.body.email);
  const answers = [
    {questionId:1, phone:req.body.phone, email:req.body.email, aText:req.body.wageType},
    {questionId:2, phone:req.body.phone, email:req.body.email, aText:req.body.wageHourly},
    {questionId:3, phone:req.body.phone, email:req.body.email, aText:req.body.wageYearly}
  ]
answer.insertAnswer(answers)
  .then(data => res.json(data))
  .catch(err => res.status(500).send({error: err.message, stack: err.stack}))
})
