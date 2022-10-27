const crud = require("../../models/interface/crud")
const Storage = require("../../models/Storage");

module.exports = async (req, res)=>{
    await crud.deleteOne(Storage, req.body)
    
    res.send("Brother deletado")
}