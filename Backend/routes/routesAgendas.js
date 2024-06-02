const express = require("express");
const router = express.Router();
const { getAgendasNum } = require('../controllers/controlleurAgendas');

router.get('/agendaNumbers', getAgendasNum);
module.exports = router;