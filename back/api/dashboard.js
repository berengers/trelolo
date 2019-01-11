const { logged } = require('./utils')
const { User, Dashboard, Column, Item } = require('../models/db')


function getDashboards(req, res) {
  Dashboard.findAll({ where: { userId: req.user.id } })
  .then(dashs => {
    res.json(dashs)
  })
}


function getDashboard(req, res) {
  Dashboard.findOne({ 
    where: { id: req.params.id, userId: req.user.id },
    include: [{ model: Column, include: [Item] }],
    order: [[Column, 'createdAt', 'ASC'],[Column, Item, 'createdAt', 'ASC']]
  })
    .then(dash => {
      if(dash){
        res.json(dash)
      } else {
        res.statusCode = 404
        res.json({ "error": "Not found or no authorization" })
      }
    })
}

async function newDashboard(req, res) {
  const { name } = req.body

  Dashboard.create({ "name": name, "userId": req.user.id })
    .then(dash => {
      res.json(dash)
    })
    .catch(error => {
      res.statusCode = 404
      res.json(error)
    })
  
}

function deleteDashboard(req, res) {
  Dashboard.findOne({ where: { id: req.params.id, userId: req.user.id } })
    .then(dash => {
      if (dash) {
        dash.destroy()
        res.json('')
      } else {
        res.statusCode = 404
        res.json({ "error": "No authorization or no dashboard at this id" })
      }
    })
}

function updateDashboard(req, res) {
  const { name } = req.body

  Dashboard.findOne({ where: { id: req.params.id, userId: req.user.id } })
    .then(dash => {
      dash.name = name
      dash.save()
      res.json(dash)
    })
}


module.exports = (app, prefix) => {
  app.get(prefix, logged(getDashboards))
  app.get(prefix + '/:id', logged(getDashboard))
  app.post(prefix, logged(newDashboard))
  app.delete(prefix + '/:id', logged(deleteDashboard))
  app.put(prefix + '/:id', logged(updateDashboard))
}