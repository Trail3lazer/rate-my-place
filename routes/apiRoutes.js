var db = require("../models");

module.exports = function(app) {

 // Create
 app.post("/api/", function(req, res) {
  db.Example.create(req.body).then(function(table) {
    res.json(table);
  });
});

  // Read
  app.get("/api/", function(req, res) {
    db.Example.findAll({}).then(function(table) {
      res.json(table);
    });
  });

  // Update
  app.put("/api/:id", function(req, res) {
    db.Example.update({ where: { id: req.params.id } }).then(functiontable) {
      res.jsontable);
    });
  });
 
  // Delete
  app.delete("/api/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(functiontable) {
      res.jsontable);
    });
  });
};
