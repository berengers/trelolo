const config = require('../config');
const logger = require('pino')()
const Sequelize = require('sequelize');

const db = new Sequelize(config.DB, {})

const AuthToken = require('./auth_token')(db, Sequelize)
const User = require('./user')(db, Sequelize)
const Dashboard = require('./dashboard')(db, Sequelize)
const Column = require('./column')(db, Sequelize)
const Item = require('./item')(db, Sequelize)

AuthToken.belongsTo(User)
User.hasMany(Dashboard)
Dashboard.hasMany(Column)
Column.hasMany(Item)

module.exports = {
  db,
  User,
  AuthToken,
  Dashboard,
  Column,
  Item
}
