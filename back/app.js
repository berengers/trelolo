const config = require('./config')
const express = require("express")
const bodyParser = require('body-parser')
const loggingMiddleware = require('express-pino-logger')()
const logger = require('pino')()
const { db } = require('./models/db')

db.sync({ force: false }).then(() => {
    logger.info('database tables created')
})

var app = express()

app.use(loggingMiddleware)
app.use(bodyParser.json())

app.listen(config.PORT, () => {
  logger.info(`http server listening on port ${config.PORT}`);
})

require('./api/auth')(app, '/api/auth')
require('./api/ping')(app, '/api/ping')
