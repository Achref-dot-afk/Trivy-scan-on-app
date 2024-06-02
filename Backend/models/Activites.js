const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

// Define the Activite model
const Activite = sequelize.define('Activite', {
  numActivite: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  typeA: {
    type: DataTypes.ENUM('réunion', 'séminaire', 'cours', 'mini projet'),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  dateAct: {
    type: DataTypes.DATE,
    allowNull: false
  },
  hDebut: {
    type: DataTypes.TIME,
    allowNull: false
  },
  hFin: {
    type: DataTypes.TIME,
    allowNull: false
  },
  createur: {
    type: DataTypes.STRING,
    allowNull: false
  },
  visible: {
    type: DataTypes.ENUM('professionnelle', 'personnelle','non visible'),
    allowNull: false
  },
  numAgenda: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Agendas',
      key: 'numAgenda',
    }
}
}, {
// Other model options go here
});

module.exports=Activite;
     
