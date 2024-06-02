const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

const Departement = sequelize.define(
  'Departement',
  {
    // Model attributes are defined here
    
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
    },
    numChef: {
        type: DataTypes.STRING,
        
    },
    numAgendadept: {
        type: DataTypes.INTEGER,
        references:{
            model:'Agendadepts',
            key:'numAgendadept'
        }
    }
 
  },
  {
    // Other model options go here
  },
);

module.exports=Departement;