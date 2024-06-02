const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

// Define the Absent model
const ActDeptVerbal = sequelize.define('ActDeptVerbal', {
  
  numActDept: {
    type: DataTypes.INTEGER,
  
  },
  numProcesV: {
    type: DataTypes.INTEGER,
  
  },
}, {
  // Other model options go here
});

module.exports = ActDeptVerbal;
