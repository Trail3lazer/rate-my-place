// module.exports = function(app,passport){
// var exports = module.exports = {}

module.exports.signup = function(req, res) {
  res.render("signup");
};

module.exports.signin = function(req, res) {
  res.render("signin");
};

module.exports.index = function(req, res) {
  res.render("index", { firstname: req.user.firstname });
};

module.exports.editProfile = function(req, res) {
  res.render("editProfile", { firstname: req.user.firstname });
};


module.exports.home = function(req, res) {
  res.render("home", { firstname: req.user.firstname });
};

module.exports.place = function(req, res) {
  res.render("place",  { firstname: req.user.firstname });
};


// module.exports.editProfile = function(req, res) {
//   res.render("editProfile", { firstname: req.user.firstname });
// };

module.exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
