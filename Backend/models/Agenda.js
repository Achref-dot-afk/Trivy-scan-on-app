const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

// Define the Absent model
const Agenda = sequelize.define('Agenda', {
  numAgenda: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  dateCreation: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  numEmploye: {
    type: DataTypes.INTEGER,
    references:{
        model: "Employes",
        key: "numEmploye"
    }
  },
}, {
  // Other model options go here
});

module.exports = Agenda;
