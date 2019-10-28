var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'sql12309451',
  'sql12309451',
  'lFHVZK27X5',
  {
    host: 'sql12.freesqldatabase.com',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0, 
        idle: 10000 
    }
  }
);

module.exports = sequelize;