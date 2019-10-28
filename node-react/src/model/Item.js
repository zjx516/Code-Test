//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./mysql');

var Item = sequelize.define('item', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  price: Sequelize.STRING,
  photo: Sequelize.STRING,
  description: Sequelize.STRING,
  expiryDate: Sequelize.STRING,
  status: Sequelize.STRING,
  modifyDate: Sequelize.STRING
},
{
	 timestamps: false,
});

module.exports = Item;