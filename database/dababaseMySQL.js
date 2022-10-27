const Sequelize = require("sequelize")

const connection = Sequelize.connection('laboratory', 'root', 'root', {
    host: "localhost",
    dialect: "mysql",
    timezone: '-00:03'
})

module.exports = connection