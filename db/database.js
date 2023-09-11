const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('mercancia', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
