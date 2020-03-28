// index.js
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jwt-simple')
const auth = require('./auth.js')()
const users = require('./users.js')
const cfg = require('./config.js')
const app = express()
var cors = require('cors')

const PORT = 4000
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(auth.initialize())

app.get('/', function(req, res) {
  res.json({
    status: 'My API is alive!',
  })
})

app.get('/user', auth.authenticate(), function(req, res) {
  res.json(users[req.user.id])
})

app.post('/token', function(req, res) {
  if (req.body.email && req.body.password) {
    const email = req.body.email
    const password = req.body.password
    const user = users.find(function(u) {
      return u.email === email && u.password === password
    })
    if (user) {
      var payload = {
        id: user.id,
      }
      var token = jwt.encode(payload, cfg.jwtSecret)
      res.json({
        token: token,
      })
    } else {
      res.sendStatus(401)
    }
  } else {
    res.sendStatus(401)
  }
})

app.listen(PORT, function() {
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
})

module.exports = app
