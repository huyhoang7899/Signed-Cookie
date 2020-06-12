module.exports.postCreate = function(req, res, next) {
  var errors = [];
  if(req.body.name.length > 30) {
    errors.push('Names only allow 30 characters !');
  }
  if(!req.body.name) {
    errors.push('Name is required !');
  }
  if(!req.body.age) {
    errors.push('Age is required !');
  }
  if(!req.body.address) {
    errors.push('Address is required !');
  }
  if(!req.body.phone) {
    errors.push('Phone is required !');
  }
  if(errors.length) {
    res.render('users/create', {
      errors: errors,
      values: req.body
    });
    return;
  }
  next();
}
