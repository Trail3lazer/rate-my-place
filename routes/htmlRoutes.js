var db = require("../models");

var authController = require("../controllers/authcontroller");


module.exports = function (app) {
  // Load index page

  app.get("/", function (req, res) {
    db['places'].findAll({})
      .then(function (table) {
        let transitions = [];
        let counter = 0;
        for (let i in table){
          counter++;
          if (counter>3){
            counter = 1;
          } 
          
          if (counter===3) {
            table[i].transition = 'fade-left'
          } else if (counter===2){
            table[i].transition = 'fade-down'
          } else if (counter===1){
            table[i].transition = 'fade-right'
          }
          
        }
        res.render("home", {
          cards: table
        });
      });
  })

  // authController.index,


  app.get("/search", function (req, res) {
    db['places'].findAll({})
      .then(function (table) {

        res.render("search", {
          cards: table
        });
      });
  })

  app.get("/editProfile", function (req, res) {
    db['places'].findAll({})
      .then(function (table) {

        res.render("editProfile", {
          cards: table
        });
      });
  })

  app.get('/addmyplace', (req, res)=>{
    res.render('add')
  })

  // Load example page and pass in an example by id
  app.get("/place/:id", function (req, res) {
    db.places.findOne({ where: { id: req.params.id } }).then(function (place) {
      db.comments.findAll({ where: { placeKey: req.params.id } })
        .then(function (comments) {
          res.render("place", {
            console: JSON.stringify(place),
            place: place,
            comments: comments
          });
        });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
