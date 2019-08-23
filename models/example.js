module.exports = function(sequelize, DataTypes) {
  var places = sequelize.define("places", {
    name: DataTypes.TEXT, // Null
    streetAddress: DataTypes.TEXT, // Not Null
    city: DataTypes.STRING, // Not Null
    state: DataTypes.STRING, //length 2, Not Null
    zip: DataTypes.INTEGER, // length 5, Not Null
    ratingAvg: DataTypes.FLOAT, // Avg of comment reviews could be 0-5 SERVER GENERATED
    URL: DataTypes.STRING, // Not Null
  });

  var comments = sequelize.define("comments", {
    placeKey: DataTypes.INTEGER, // not null
    rating: DataTypes.INTEGER, // not null 0-5
    pictures: DataTypes.STRING, // Not null url?
    text: DataTypes.TEXT,
  })

  var users = sequelize.define("users", {
    type: DataTypes.STRING, // NOT NULL Landlord, tenant
    username: DataTypes.TEXT, //NOT NULL
    password: DataTypes.Text, // Not Null
    authToken: DataTypes.STRING //Passport generated
  })

  return {places: places, comments: comments, users: users };
};
