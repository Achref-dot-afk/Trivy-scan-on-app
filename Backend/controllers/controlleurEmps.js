const Employes = require('../models/Employe');

module.exports = {
  getAllEmployes: async (_, res) => {
    try {
      const employes = await Employes.findAll();
      res.status(200).json(employes);
    } catch (error) {
      console.error("Error fetching employes:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};