// auth.js
const passport = require('passport')
const passportJWT = require('passport-jwt')
const users = require('./users.js')
const cfg = require('./config.js')

const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy
const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
}

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) {
    var user = users[payload.id] || null
    if (user) {
      return done(null, {
        id: user.id,
      })
    } else {
      return done(new Error('User not found'), null)
    }
  })
  passport.use(strategy)
  return {
    initialize: function() {
      return passport.initialize()
    },
    authenticate: function() {
      return passport.authenticate('jwt', cfg.jwtSession)
    },
  }
}
