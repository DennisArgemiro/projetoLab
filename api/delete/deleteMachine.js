const crud = require("../../models/interface/crud")
const Machine = require("../../models/Machine");

module.exports = async (req, res)=>{
    await crud.deleteOne(Machine, req.body)
    
    res.send("Maquina deletada")
}