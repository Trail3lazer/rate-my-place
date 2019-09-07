var authController = require("../controllers/authcontroller");

module.exports = function(app, passport) {
  app.get("/signup", authController.signup);

  app.get("/signin", authController.signin);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/index",
      failureRedirect: "/signup"
    })
  );
    
  app.get("/index", isLoggedIn, authController.index);

  app.get("/logout", authController.logout);

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/index",
      failureRedirect: "/signin"
    })
  );
  

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("logged in")
      return next();
    }

    res.redirect("/signin");
  };
  
//   router.get('/checkauth', isAuthenticated, function(req, res){

//     res.status(200).json({
//         status: 'Login successful!'
//     });



};
