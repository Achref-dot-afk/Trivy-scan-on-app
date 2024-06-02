const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

// Define the Procesverbal model
const Procesverbal = sequelize.define('Procesverbal', {
  numProcesV: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  resum: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options go here
});

module.exports = Procesverbal;
