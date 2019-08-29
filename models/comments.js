module.exports = (sequelize, DataTypes) => {
    return sequelize.define("comments", {
        userId: DataTypes.INTEGER,
        placeKey: DataTypes.INTEGER, // not null
        rating: DataTypes.INTEGER, // not null 0-5
        pictures: DataTypes.STRING, // Not null url?
        text: DataTypes.TEXT,
        username: DataTypes.STRING
      })

}