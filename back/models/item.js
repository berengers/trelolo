module.exports = (db, Sequelize) => {
  return db.define('item', {
    id:   { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    text: { type: Sequelize.STRING, allowNull: false }
  })
}