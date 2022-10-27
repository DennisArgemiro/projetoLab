const crud = require("../models/interface/crud")
const Patient = require("../models/Patient")
const Machine = require("../models/Machine")
const Storage = require("../models/Storage");

module.exports = async (req, res) => {
  const query = undefined
  const patient = await crud.findAll(Patient, query, {value: "id", filter: "ASC"})
  const machine = await crud.findAll(Machine, query, {value:"id", filter:"ASC"})
  const storage = await crud.findAll(Storage, query, {value:"id", filter:"ASC"})

  const infos = {patient,machine,storage}
  
  res.json(infos);
};
