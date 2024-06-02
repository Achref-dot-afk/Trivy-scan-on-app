const Sequelize = require('sequelize');

const sequelize = new Sequelize('AgendaDB', 'postgres', 'root',{dialect:'postgres', host:'localhost',port:3001});

module.exports = sequelize;