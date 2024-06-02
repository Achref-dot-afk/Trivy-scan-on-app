const Activites = require("../controllers/controlleurActs");
const express = require("express");
const router = express.Router();

router.get('/',Activites.getAllActivites);
router.get('/HighId',Activites.getHighestId);
router.put('/:numActivite',Activites.updateOneActivity);
router.delete('/:numActivite',Activites.deleteOneActivity);
router.post('/createAct',Activites.createOneActivity);
router.get('/:numActivite',Activites.getOneActivity);

module.exports = router;