//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./mysql');

var User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  gender: Sequelize.STRING,
  role: Sequelize.STRING
},
{
	 timestamps: false,
});

module.exports = User;