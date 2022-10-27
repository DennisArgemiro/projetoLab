const Patient = require("./Patient")
const Machine = require("./Machine")
const Storage = require("./Storage")

Patient.sync({force: true});
Machine.sync({force: true});
Storage.sync({force: true});