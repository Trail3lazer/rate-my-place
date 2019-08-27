var db = require("../models");
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

module.exports = function (app) {
  let arr = ['places', 'users', 'comments']

  for (i in arr) {


    // Create
    app.post(`/api/${arr[i]}`, function (req, res) {
      db[arr[i]].create(req.body)
      .then(function (table) {
        res.json(table);
      });
    });

    // Read
    app.get(`/api/${arr[i]}`, function (req, res) {
      db[arr[i]].findAll({})
      .then(function (table) {
        res.json(table);
      });
    });

    // Find
    app.get(`/api/${arr[i]}/find/:search`, function (req, res) {
      let search = req.params.search;
      db[arr[i]].findAll({
        where: {
          [Op.or]: [
            {id: search}, 
            {name: search}, 
            {streetAddress: search}, 
            {phone: search},
            {propType: search},
            {propMgr: search},
            {city: search},
            {state: search},
            {zip: search},
            {ratingAvg: search}
          ]}
      })
      .then(function (table) {
        res.json(table);
      });
    });

    // Update
    app.put(`/api/${arr[i]}/:id`, function (req, res) {
      db[arr[i]].update({ 
        where: { 
          id: req.params.id } })
          .then(function (table) {
            res.json(table);
      });
    });

    // Delete
    app.delete(`/api/${arr[i]}/:id`, function (req, res) {
      db[arr[i]].destroy({ 
        where: { 
          id: req.params.id } })
          .then(function (table) {
            res.json(table);
      });
    });


  }

};
