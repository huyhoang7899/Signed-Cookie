const db = require('../db');

module.exports.complete = function(req, res, next) {
  var id = req.params.id;
  var transaction = db.get('transactions').find({ id: id }).value();
  if (!transaction) {
     res.render('transaction/index', {
      transactions: db.get('transactions').value(),
      error: "Not found ID in transactions !"
      });
  }
  next();
}
