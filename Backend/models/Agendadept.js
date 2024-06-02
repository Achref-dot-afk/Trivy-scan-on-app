const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

const Agendadept = sequelize.define(
  'Agendadept',
  {
    // Model attributes are defined here
    
    numAgendadept: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    dateMAJ: {
      type: DataTypes.DATE,
      // allowNull defaults to true
    },
 
  },
  {
    // Other model options go here
  },
);

module.exports=Agendadept;