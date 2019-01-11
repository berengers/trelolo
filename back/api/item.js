const { logged } = require('./utils')
const { User, Dashboard, Column, Item } = require('../models/db')

async function newItem(req, res) {
  const { text, columnId } = req.body

  const column = await Column.findOne({ 
    where: { "id": columnId, "$dashboard.user.id$": req.user.id },
    include: { all: true, nested: true }
  })

  if (column) {

    Item.create({ "text": text, "columnId": columnId })
      .then(item => {
        res.json(item)
      })
      
  } else {
    res.json({ "error": "No authorization" })
  }


}

async function deleteItem(req, res) {
  const item = await Item.findOne({ 
    where: { "id": req.params.id, "$column.dashboard.user.id$": req.user.id },
    include: { all: true, nested: true }
  })
  if (item) {
    item.destroy()
    res.json('')
  } else {
    res.json({ "error": "No authorization" })
  }
}

async function updateItem(req, res) {
  const { text, columnId } = req.body

  const item = await Item.findOne({
    where: { "id": req.params.id, "$column.dashboard.user.id$": req.user.id },
    include: { all: true, nested: true }
  })

  if (item) {
    
    if (text) {
      item.text = text
    }

    if (columnId) {
      const right = await Column.findOne({
        where: { "id": columnId, "$dashboard.user.id$": req.user.id },
        include: { all: true, nested: true }
      })
      
      if (right) {
        item.columnId = columnId
      } else {
        res.json({ "error": "No authorization" })
        return
      }
    }

    item.save().then(() => {
      res.json(item)
    })
    
  } else {
    res.json({ "error": "No authorization" })
  }
}

module.exports = (app, prefix) => {
  app.post(prefix, logged(newItem))
  app.delete(prefix + "/:id", logged(deleteItem))
  app.put(prefix + "/:id", logged(updateItem))
}