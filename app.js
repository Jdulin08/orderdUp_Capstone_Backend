const http        = require('http')
const express     = require('express')
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const cors        = require('cors')
const app         = module.exports = express()
const server      = http.createServer(app)
const port        = parseInt(process.env.PORT || 4000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors({origin: true}))
app.enable('trust proxy')

app.use('/users', require('./routes/employee.js'));
app.use('/managers', require('./routes/restaurant.js'));
app.use('/questions', require('./routes/questions.js'));
app.use('/answers', require('./routes/answer.js'));

app.use(notFound)
app.use(errorHandler)

server.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));

function notFound(req, res, next) {
  res.status(404)
    .send({error: 'Url not found', status: 404, url: req.url})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  res.status(500)
    .send({error: err.message, stack: err.stack, url: req.url, status: 500})
}
