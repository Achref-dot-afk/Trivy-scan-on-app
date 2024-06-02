const Alerts = require("../controllers/controlleurAlerts");
const express = require("express");
const router = express.Router();

router.post('/createAlert',Alerts.createAlert);

module.exports = router;