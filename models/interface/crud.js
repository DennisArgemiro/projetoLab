const Sequelize = require("sequelize")
const{Op, or, where} = require("sequelize")

module.exports ={
    create: async(database, object)=>{
        database.create(object)
    },
    findAll: async (database, query = {}, order, exclude = []) => {
        
        const { value, filter = "ASC" } = order;

        let response = await database.findAll({
          attributes: { exclude },
          order: [[value, filter]],
          where: query,
        });
        return response;    
    },
    findOne: async(database, query)=>{
        var response = await database.findOne({where:query})
        return response;
    },
    update: async(database, query = {}, selector = {})=>{
        var response = await database.update(query, {where:selector})
        return response;

    },
    deleteOne: async(database, where = {})=>{
        var response = database.destroy({where: where})
        return response
    },
    deleteAll: async(database)=>{
        var response = database.destroy({truncate: true})
        return response
    }
}