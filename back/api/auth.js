const uuidv4 = require('uuid/v4');
const { User, AuthToken } = require('../models/db')

function login(req, res) {
  User.findOne({where: {"email": req.body.email}}).then(user => {
    if (!user) {
      res.sendStatus(404)
    } else if (user.password != req.body.password) {
      res.sendStatus(401)
    } else {
      AuthToken.create({token: uuidv4(), userId: user.id}).then(authToken => res.json(authToken))
    }
  })
}

function authenticate(req, res, next) {
  AuthToken.findOne({where: {token: req.headers['x-authenticate'] || ''}, include: [User]})
  .then(token => {
  
    if (token) {
      req.user = token.user
    }

    next()
  }).catch(e => {
    next(e)
  })
}


module.exports = (app, prefix) => {
  app.use(authenticate)
  app.post(prefix + '/login', login)
}
