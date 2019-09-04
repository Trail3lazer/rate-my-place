// module.exports = function(app,passport){
// var exports = module.exports = {}

module.exports.signup = function(req, res) {
  res.render("signup");
};

module.exports.signin = function(req, res) {
  res.render("signin");
};

module.exports.index = function(req, res) {
  res.render("index");
};

module.exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
