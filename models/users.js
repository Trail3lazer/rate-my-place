module.exports = (sequelize, DataTypes) => {
    return sequelize.define("users", {
        type: DataTypes.STRING, // NOT NULL Landlord, tenant
        username: DataTypes.TEXT, //NOT NULL
        password: DataTypes.Text, // Not Null
        authToken: DataTypes.STRING //Passport generated
      })
    
}