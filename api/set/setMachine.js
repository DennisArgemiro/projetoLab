const crud = require("../models/interface/crud")
const Machine = require("../models/Machine")

module.exports = async (req, res)=>{
    const {name, isBusy, lastMaintence} = req.body;

    if(name == undefined){
        res.status(400);
        res.send("O Atributo 'name' é indefinido");
    }else if(isBusy == undefined){
        res.status(400);
        res.send("O Atributo 'isBusy' é indefinido");
    } else if(lastMaintence == undefined){
        res.status(400);
        res.send("O Atributo 'lastMaintence' é indefinido");
    } else{
        await crud.create(Machine, {name, isBusy, lastMaintence})
    }
    res.json({msg: "Oi meu chapa"})
}