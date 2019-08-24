var db = require("../models");

module.exports = function(app) {

 // Create
 app.post("/api/places", function(req, res) {
  db.places.create(req.body).then(function(table) {
    res.json(table);
  });
});

  // Read
  app.get("/api/places", function(req, res) {
    db.places.findAll({}).then(function(table) {
      res.json(table);
    });
  });

  // Update
  app.put("/api/places/:id", function(req, res) {
    db.places.update({ where: { id: req.params.id } }).then(function(table) {
      res.json(table);
    });
  });
 
  // Delete
  app.delete("/api/places/:id", function(req, res) {
    db.places.destroy({ where: { id: req.params.id } }).then(function(table) {
      res.json(table);
    });
  });
};
