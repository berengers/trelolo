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
Dashboard.belongsTo(User)
User.hasMany(Dashboard, { onDelete: 'CASCADE' })
Column.belongsTo(Dashboard)
Dashboard.hasMany(Column, { onDelete: 'CASCADE' })
Item.belongsTo(Column)
Column.hasMany(Item, { onDelete: 'CASCADE' })

module.exports = {
  db,
  User,
  AuthToken,
  Dashboard,
  Column,
  Item
}
