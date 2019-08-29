// module.exports = (sequelize, DataTypes) => {
//     return sequelize.define("users", {
//         type: DataTypes.STRING, // NOT NULL Landlord, tenant
//         username: DataTypes.TEXT, //NOT NULL
//         password: DataTypes.TEXT, // Not Null
//         authToken: DataTypes.STRING //Passport generated
//       })
    
// }

module.exports = function(sequelize, Sequelize) {
 
  var User = sequelize.define('user', {

    id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		firstname: { type: Sequelize.STRING,notEmpty: true},
		lastname: { type: Sequelize.STRING,notEmpty: true},
		username: {type:Sequelize.TEXT},
		about : {type:Sequelize.TEXT},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
		password : {type: Sequelize.STRING,allowNull: false }, 
		last_login: {type: Sequelize.DATE},
    status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }


  });

  return User;

}