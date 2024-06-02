const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

// Define the Employe model
const Employe = sequelize.define('Employe', {
  numEmploye: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telIntern: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  niveau: {
    type: DataTypes.STRING,
    allowNull: false
  },
  num: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Departements',
      key: 'num'
    }
  }
}, {
  // Other model options go here
});

module.exports = Employe;
