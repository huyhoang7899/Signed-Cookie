var db = require('../db.js');

module.exports.requireAdminTransaction = function(req, res, next) {
  var user = db.get('users').find({ id: req.cookies.userId }).value();

  if(!user.isAdmin) {
    res.redirect('/transactions');
    return;
  }

  next();
}

module.exports.requireAdminBook = function(req, res, next) {
  var user = db.get('users').find({ id: req.cookies.userId }).value();

  if(!user.isAdmin) {
    res.redirect('/books');
    return;
  }

  next();
}

module.exports.requireAdminUser = function(req, res, next) {
  var user = db.get('users').find({ id: req.cookies.userId }).value();

  if(!user.isAdmin) {
    res.redirect('/users');
    return;
  }

  next();
}
