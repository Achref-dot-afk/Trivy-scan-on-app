const Pv = require("../controllers/controlleurPv");
const express = require("express");
const router = express.Router();


router.post('/createPv',Pv.createVp);
router.get('/PvHnum',Pv.getHighestIdPv);

module.exports = router;