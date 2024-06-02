const Pv = require('../models/Procesverbal');

module.exports = {
    createVp : async(req,res) => {
        const {numProcesV,resum} = req.body;
        console.log(req.body)
        Pv.create({numProcesV,resum});
        res.json({message : 'Success'});
    },
    getHighestIdPv : async(_,res) => {
        const maxNumProcesV = await Pv.max('numProcesV');
        res.json({maxNumProcesV});
      },
}