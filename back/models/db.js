const config = require('../config');
const logger = require('pino')()
const Sequelize = require('sequelize');

const db = new Sequelize(config.DB, {})

const User = require('./user')(db, Sequelize)
const AuthToken = require('./auth_token')(db, Sequelize)
const Dashboard = require('./dahboard')(db, Sequelize)
const Column = require('./column')(db, Sequelize)
const Item = require('./item')(db, Sequelize)

AuthToken.belongsTo(User)
Dashboard.belongsTo(User)
Column.belongsTo(Dashboard)
Item.belongsTo(Column)

module.exports = {
  db,
  User,
  AuthToken,
  Dashboard,
  Column,
  Item
}
