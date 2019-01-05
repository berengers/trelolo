const { logged } = require('./utils')
const { Dashboard, Column, Item } = require('../models/db')


function getDashboards(req, res) {
  Dashboard.findAll({ where: { userId: req.user.id } })
  .then(dashs => {
    res.json(dashs)
  })
}


function getDashboard(req, res) {
  Dashboard.findOne({ where: { id: req.params.id, userId: req.user.id }, include: [{model: Column, include: [Item]}] })
  .then(dash => {
    if(dash){
      res.json(dash)
    } else {
      console.log('dash ---->', dash)
      res.statusCode = 404
      res.json({ "error": "Not found or no authorization" })
    }
  })
}


module.exports = (app, prefix) => {
  app.get(prefix, logged(getDashboards))
  app.get(prefix + '/:id', getDashboard)
}