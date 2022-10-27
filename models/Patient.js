const Sequelize = require('sequelize');

const connection = require("../database/databaseSQLite.js");

const Patient = connection.define('patient', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  exam: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  sample:{
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  QRcode:{
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
})

module.exports = Patient