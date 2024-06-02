const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

// Define the Activitésdept model
const Activitesdept = sequelize.define('Activitesdept', {
  numActDept: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  typeD: {
    type: DataTypes.ENUM('réunion', 'séminaire', 'cours', 'mini projet'),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateAct: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,

  },
  hDebut: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  hFin: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  dateCreation: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  createur: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  visible: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numAgenda: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Agendas', // The name of the referenced model
      key: 'numAgenda', // The primary key of the referenced model
    },
    allowNull: false,
  },
}, {
  // Other model options go here
});

module.exports = Activitesdept;
