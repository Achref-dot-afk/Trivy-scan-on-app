const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

// Define the Absent model
const Alert = sequelize.define('Alert', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  delais: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numActivite: {
    type: DataTypes.INTEGER,
    references:{
        model: "Activites",
        key: "numActivite"
    }
  },
}, {
  // Other model options go here
});

module.exports = Alert;
