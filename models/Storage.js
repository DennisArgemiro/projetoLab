const Sequelize = require("sequelize")

const connection = require("../database/databaseSQLite.js");

const Storage = connection.define("storage", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
})

module.exports = Storage