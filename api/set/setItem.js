const crud = require("../../models/interface/crud");
const Storage = require("../../models/Storage");

module.exports = async (req, res) => {
  const { name, type } = req.body;

  if (name == undefined) {
    res.status(400);
    res.send("Atributo 'name' indefinido");
  } else if (type == undefined) {
    res.status(400);
    res.send("Atributo 'type' indefinido");
  } else {
    await crud.create(Storage, {
      name,
      type,
    });
  }
  console.log("Carlos é Gay")
  res.json({ msg: "Carlos é Gay" });
};
