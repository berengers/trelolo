module.exports = (db, Sequelize) => {
  return db.define('column', {
    id:   { type: Sequelize.INTEGER, autoincrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false }
  })
}