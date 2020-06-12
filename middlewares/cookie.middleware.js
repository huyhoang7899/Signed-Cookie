var count = 0;

module.exports.cookie = function(req, res, next) {
  res.cookie("name", "HuyHoang");
  count += 1;
  console.log("Count: " , count);
  next();
}