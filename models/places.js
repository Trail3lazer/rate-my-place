module.exports = function(sequelize, DataTypes) {
  return sequelize.define("places", {
    name: DataTypes.TEXT, // Null
    streetAddress: DataTypes.TEXT, // Not Null
    city: DataTypes.STRING, // Not Null
    state: DataTypes.STRING(2), //length 2, Not Null
    zip: DataTypes.INTEGER, // length 5, Not Null
    phone: DataTypes.STRING,
    propType: DataTypes.STRING,
    propMgr: DataTypes.STRING,
    ratingAvg: DataTypes.FLOAT, // Avg of comment reviews could be 0-5 SERVER GENERATED
    URL: DataTypes.STRING, // Not Null
  });
};
