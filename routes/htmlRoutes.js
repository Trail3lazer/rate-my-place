var db = require("../models");
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

module.exports = function (app) {
  // Load index page

  app.get("/", function (req, res) {
    db['places'].findAll({})
      .then(function (table) {

        res.render("search", {
          cards: table
        });
      });
  })

  app.get('/addmyplace', ()=>{
    res.render('add')
  })

  // Load example page and pass in an example by id
  app.get("/place/:id", function (req, res) {
    db.places.findOne({ where: { id: req.params.id } }).then(function (place) {
      db.comments.findAll({ where: { placeKey: req.params.id } })
        .then(function (comments) {
          res.render("place", {
            place: place,
            comments: comments
          });
        });
    });
  });

  // Search Query
  app.get("/search/:name/:propMgr/:streetAddress/:city/:state/:zip/:phone/:propType/", function (req, res) {
    let p = req.params;
    let options = {
      name: p.name,
      streetAddress: p.streetAddress,
      propMgr: p.propMgr,
      city: p.city,
      state: p.state,
      zip: p.zip,
      phone: p.phone,
      propType: p.propType
    };
     
    let andArr = [];
    for(let key in options){
      if (options[key] !== "-"){
        options[key] = options[key].replace(/(%20)/g, ' ')
        andArr.push(
          { [key]: options[key] }
        )
      }
    }

    db.places.findAll({
      where: {
        [Op.and]: andArr
      }
    })
      .then(function (places) {
        if(places.length === 0){res.render('notFound')}
        else{
        res.render("search", {
          cards: places
        });
      }
      })
      .catch((err)=>{if (err) {res.render('404'); console.log(err)}})
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
