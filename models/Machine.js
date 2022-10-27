const Sequelize = require("sequelize")

const connection = require("../database/databaseSQLite.js")

const Machine = connection.define('machine', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  isBusy: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  lastMaintence: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: '00/00/0000'
  }
})

module.exports = Machine