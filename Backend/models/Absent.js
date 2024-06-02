const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

// Define the Absent model
const Absent = sequelize.define('Absent', {
  numEmploye: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Employes', // The name of the referenced model
      key: 'numEmploye', // The primary key of the referenced model
    },
  },
  numActDept: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Activitesdepts', // The name of the referenced model
      key: 'numActDept', // The primary key of the referenced model
    },
  },
  motif: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options go here
});

module.exports = Absent;
