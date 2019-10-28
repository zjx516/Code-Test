//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./mysql');

var Message = sequelize.define('message', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  itemId: Sequelize.BIGINT,
  username: Sequelize.STRING,
  content: Sequelize.STRING,
  createDate: Sequelize.STRING
},
{
	 timestamps: false,
});

module.exports = Message;