const Patient = require("../../models/Patient")
const crud = require("../../models/interface/crud")

module.exports = async (req, res) => {
    const obj = req.body
    await crud.deleteOne(Patient, obj);
    res.json(obj)
}