const Sequelize = require("sequelize")

const connection = new Sequelize('laboraroy', 'root', 'root', {
    
    dialect: "sqlite",
    storage: './database.sqlite'
})

module.exports = connection