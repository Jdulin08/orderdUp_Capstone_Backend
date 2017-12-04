const router = (module.exports = require("express").Router());
const employee = require('../lib/employee')
const messaging = require('../lib/messaging')
const port = parseInt(process.env.PORT || 3000)

var ngrok = require('ngrok');
ngrok.connect(function(err, url) {});


// Get all employees
router.get("/", function(req, res) {
  // return res.send({ host: req.host, protocol: req.protocol, ip: req.ip })
  employee.getAll()
    .then(data => res.json(data))
    .catch(err => res.status(500).send({
      error: err.message,
      stack: err.stack
    }))
});

// Get message by id
router.get('/:id', function(req, res) {
  employee.getOne(req.params)
    .then(data => res.json(data))
    .catch(err => res.status(500).send({
      error: err.message,
      stack: err.stack
    }))
})

// call like: getLink(req)
function getLink({
  protocol,
  host,
  body
}) {
  const {
    phone
  } = body
  return `${protocol}://${host}${port === 80 ? '' : ':' + port}/users/${phone}`
}

// Create a new employee
router.post("/", function(req, res) {
  console.log('req.body', req.body)
  employee.create(req.body)
    .then(data => {
      if (data && req.body.phone) {
        return messaging.send({
            msgTo: req.body.phone,
            body: `Here's link: ${getLink(req)}`
          })
          .then(result => res.send({
            message: 'Check your phone',
            forTesting: getLink(req)
          }))
      } else {
        return res.status(400).json({
          message: 'Phone # not valid:' + req.body.phone
        })
      }
    })
    .catch(err => res.status(500).send({
      error: err.message,
      stack: err.stack
    }))
})

router.put('/:id', function(req, res) {
  if (req.params.id.length > 7) {
    employee.findByPhone(req.params.id).then((emp) => {
      employee.update({...req.body, id:emp.id})
        .then(data => res.json(data))
        .catch(err => res.status(500).send({
          error: err.message,
          stack: err.stack
        }))
    })
    console.log(req.params.id)
  }
})

// Delete a user
router.delete('/:id', function(req, res) {
  employee.remove(req.params)
    .then(data => res.json(data))
    .catch(err => res.status(500).send({
      error: err.message,
      stack: err.stack
    }))
})
