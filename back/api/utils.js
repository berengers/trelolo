function logged(fn) {
  return (req, res, next) => {
    console.log('req ---->', req.hasOwnProperty('user'))
    if (!req.hasOwnProperty('user')) {
      console.log('2222222222222222 ---->', 2222222222222222)
      res.sendStatus(401)
    } else {
      console.log('333333333 ---->', 333333333)
      fn(req, res, next)
    }
  }
}

module.exports = {
  logged: logged

}
