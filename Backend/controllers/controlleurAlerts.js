const Alert = require('../models/Alert');

module.exports={
    createAlert: async (req,res) => {
        const newAlert = Alert.create({
            type: req.type,
            delais: req.delais,
            numActivite: req.numActivite,
        });
        if(newAlert) res.status(201).json({newAlert});
        else res.status(500).json({message: "Internal server error"})
    }
}