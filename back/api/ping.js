const { logged } = require('./utils')

function ping(req, res) {
  res.json({
    "ping": "pong",
    "user": req.user
  })
}

module.exports = (app, prefix) => {
  app.get(prefix, ping)
  app.get(prefix + '/logged', logged(ping))
}
