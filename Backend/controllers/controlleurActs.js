const Activites = require("../models/Activites");
const ActivitesDept = require("../models/Activitesdept");
const ActdeptV = require("../models/ActDeptVerbal");

module.exports = {
  getAllActivites: async (_, res) => {
    try {
      const activities = await Activites.findAll();
      const actdept = await ActivitesDept.findAll();
      const combinedResults = [...activities, ...actdept];
      res.status(200).json(combinedResults);
    } catch (error) {
      console.error("Error fetching activities:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getOneActivity: async (req, res) => {
    const num = req.params.numActivite;
    try {
      const FetchedAct = await Activites.findByPk(num);
      if (!FetchedAct) {
        res.status(401).send("No Activity found!");
      } else {
        res.json({ Act_Details: FetchedAct });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error !" });
    }
  },

  updateOneActivity: async (req, res) => {
    const numActivite = req.params.numActivite;
    const { typeA, createur, visible } = req.body;

    try {
      const activity = await Activites.findByPk(numActivite);
      if (activity) {
        const updateData = {
          typeA: typeA !== "" ? typeA : activity.typeA,
          createur: createur !== "" ? createur : activity.createur,
          visible: visible !== "" ? visible : activity.visible,
        };
        await activity.update(updateData);
        res.status(200).json(activity);
      } else {
        res.status(404).json({ message: "Activity not found" });
      }
    } catch (error) {
      console.error("Error updating activity:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteOneActivity: async (req, res) => {
    const numActivite = req.params.numActivite;

    try {
      const activity = await Activites.findByPk(numActivite);
      if (activity) {
        await activity.destroy();
        res.status(200).json({ message: "Activity deleted successfully" });
      } else {
        res.status(404).json({ message: "Activity not found" });
      }
    } catch (error) {
      console.error("Error deleting activity:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getHighestId: async (_, res) => {
    try {
      const maxNumActivite = await Activites.max("numActivite");
      res.json({ maxNumActivite });
    } catch (error) {
      console.error("Error fetching highest ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  createOneActivity: async (req, res) => {
    try {
      const {
        typeA,
        typeD,
        visible,
        numActivite,
        description,
        dateAct,
        hDebut,
        hFin,
        dateCreation,
        createur,
        numAgenda,
        numProcesV,
      } = req.body;

      // Determine the appropriate type field
      const type = typeD ? typeD : typeA;

      // Validate date fields
      const parsedDateAct = new Date(dateAct);
      const parsedDateCreation = new Date(dateCreation);
      if (isNaN(parsedDateAct) || isNaN(parsedDateCreation)) {
        return res.status(400).json({ message: "Invalid date format." });
      }

      if (
        !visible ||
        !description ||
        !dateAct ||
        !hDebut ||
        !hFin ||
        !dateCreation ||
        !createur ||
        !numAgenda
      ) {
        return res.status(400).json({ message: "All fields are required." });
      }

      if (visible !== "professionnelle") {
        await Activites.create({
          typeA: type,
          visible,
          numActivite,
          description,
          dateAct: parsedDateAct,
          hDebut,
          hFin,
          dateCreation: parsedDateCreation,
          createur,
          numAgenda,
        });
      } else {
        await ActdeptV.create({
          numActdept: numActivite,
          numProcesV: numProcesV,
        });
        await ActivitesDept.create({
          typeD: type,
          visible,
          numActDept: numActivite,
          description,
          dateAct,
          hDebut,
          hFin,
          dateCreation,
          createur,
          numAgenda,
        });

      }

      res.status(201).json({ message: "Activity created successfully." });
    } catch (error) {
      console.error("Error creating activity:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
};
