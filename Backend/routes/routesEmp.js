const Employes = require("../controllers/controlleurEmps");
const express = require("express");
const router = express.Router();

router.get('/',Employes.getAllEmployes);

module.exports = router;