var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'sql12310530',
  'sql12310530',
  'mRcN6ujafa',
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