const express = require("express");
const sequelize = require("./sequelize");
const Departement = require("./models/Departement");
const Agendadept = require("./models/Agendadept");
const Absent = require("./models/Absent");
const Alert = require('./models/Alert')
const ActDeptVerbal = require("./models/ActDeptVerbal");
const Activites = require("./models/Activites");
const Activitesdept = require("./models/Activitesdept");
const Agenda = require("./models/Agenda");
const Employe = require("./models/Employe");
const Procesverbal = require("./models/Procesverbal");
const routesActs = require('./routes/routesActs');
const routesAlerts = require('./routes/routesAlerts');
const routesEmployes = require('./routes/routesEmp');
const routesAgendas = require('./routes/routesAgendas');
const Pv = require('./routes/routesPv');
const cors = require('cors');
const app = express();
//Database connection
sequelize.sync().then(()=>console.log("Tables and models are synced"))
.then((err)=>console.log(err));
sequelize.authenticate().then(()=>console.log("Connected successfully to the database"))
.catch((err)=>console.log(err));

//Middleswares
app.use(cors());
app.use(express.json());
//Routes Importation
app.use("/activites",routesActs);
app.use("/alerts",routesAlerts);
app.use("/employes",routesEmployes);
app.use("/agendas",routesAgendas);
app.use("/Pv",Pv);

//Server listen
app.listen(3002,async()=>{
   console.log("Connected to server");
      
});