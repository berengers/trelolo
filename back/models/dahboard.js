module.exports = (db, Sequelize) => {
  return db.define('dashboard', {
    id:   { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, unique: true }
  })
}
