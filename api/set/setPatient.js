const crud = require("../../models/interface/crud");
const Patient = require("../../models/Patient");

module.exports = async (req, res) => {
  const { name, age, exam, sample, qrcode } = req.body;

  if (name == undefined) {
    res.status(400);
    res.send("Atributo 'name' é indefinido!");
  } else if (age == undefined) {
    res.status(400);
    res.send("Atributo 'age' é indefinido!");
  } else if (exam == undefined) {
    res.status(400);
    res.send("Atributo 'exame' é indefinido!");
  } else if (sample == undefined) {
    res.status(400);
    res.send("Atributo 'sample' é indefinido!");
  } else if (qrcode == undefined) {
    res.status(400);
    res.send("Atributo 'qrcode' é indefinido!");
  } else {
    await crud.create(Patient, { name, age, exam, sample, qrcode });
  }

  console.log("Criado com sus");
  res.json({ msg: "Muito foda" });
};
