const Sequelize = require('sequelize');

const sequelize = new Sequelize('AgendaDB', 'postgres', 'root',{dialect:'postgres', host:'db',port:5432});

module.exports = sequelize;