var db = require("../models");
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

let refreshRatingAvg = (placeid) => {
  db.comments.findAll({
    where: {
      placeKey: placeid
    }
  }).then((comments) => {
    let newPlaceAvg = 0;
    for (let j in comments) {
      let comment = comments[j];
      newPlaceAvg += comment.rating;
    }
    newPlaceAvg = Math.floor(newPlaceAvg / comments.length);

    db.places.update({
      ratingAvg: newPlaceAvg
    }, {
        where: {
          id: placeid
        }
      }).then(() => { return })
  })
}

module.exports = function (app) {
  let arr = ['places', 'users', 'comments']

  for (let i in arr) {

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
    app.get(`/api/${arr[i]}/find/:column/:search`, function (req, res) {
      let whereClause = {}
      whereClause[req.params.column] = req.params.search;
      db[arr[i]].findAll({
        where: {
          whereClause,
        }
      })
        .then(function (table) {
          res.json(table);
        });
    });

    // Update
    app.put(`/api/${arr[i]}/:id`, function (req, res) {
      db[arr[i]].update({
        where: {
          id: req.params.id
        }
      })
        .then(function (table) {
          res.json(table);
        });
    });

    // Delete
    app.delete(`/api/${arr[i]}/:id`, function (req, res) {
      db[arr[i]].destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function (table) {
          res.json(table);
        });
    });


  }
  // End for loop


  app.put(`/api/rating/:id`, function (req, res) {
    refreshRatingAvg(req.params.id);
  });

  // Search Query
  app.get("/api/search/:name/:propMgr/:streetAddress/:city/:state/:zip/:phone/:propType/:sort/:sortDirection", function (req, res) {
    let options = req.params;
    let sort;
    let sortDirection;
    
    let andArr = [];
    for (let key in options) {
      if (key === "sort"){sort = options[key]}
      else if (key === "sortDirection"){sortDirection = options[key]}
      else if (options[key] !== "-") {
        options[key] = options[key].replace(/(%20)/g, ' ')
        andArr.push(
          { [key]: options[key] }
        )
      }
    }

    db.places.findAll({
      where: {
        [Op.and]: andArr
      },
      order: [
        [sort, sortDirection]
      ]
    })
      .then(function (places) {
        if (places.length === 0) { res.render('notFound') }
        else {
          res.send(places)
        }
      }
      )
      .catch((err) => { if (err) { console.log(err) } })
  });

  // End of exports
};
