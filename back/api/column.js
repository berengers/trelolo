const { logged } = require('./utils')
const { User, Dashboard, Column } = require('../models/db')

async function newColumn(req, res) {
  const { name, dashboardId } = req.body

  const user = await User.findOne({ include: { model: Dashboard, where: { "id": dashboardId } } })

  if (parseInt(user.id) === req.user.id) {
    Column.create({ "name": name, "dashboardId": dashboardId })
      .then(column => {
        res.json(column)
      })
  } else {
    res.json({ "error": "No authorization" })
  }

}

function deleteColumn(req, res) {
  Column.findOne({ where: { "id": req.params.id }, include: [{ model: Dashboard, where: { userId: req.user.id } }] })
    .then(column => {
      if (column) {
        column.destroy()
        res.json('')
      } else {
        res.statusCode = 404
        res.json({ "error": "No authorization or no column at this id" })
      }
    })
}

function updateColumn(req, res) {
  Column.findOne({ where: { "id": req.params.id }, include: [{ model: Dashboard, where: { userId: req.user.id } }] })
    .then(column => {
      if (column) {
        column.name = req.body.name
        column.save()
        res.json(column)
      } else {
        res.statusCode = 404
        res.json({ "error": "No authorization or no column at this id" })
      }
    })
}

module.exports = (app, prefix) => {
  app.post(prefix, logged(newColumn))
  app.delete(prefix + '/:id', logged(deleteColumn))
  app.put(prefix + '/:id', logged(updateColumn))
}