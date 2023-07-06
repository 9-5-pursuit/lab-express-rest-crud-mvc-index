const express = require("express");
const morgan = require("morgan");

const locationController = require("./controllers/locations.controller.js");
const machineController = require("./controllers/machines.controller.js");
const personController = require("./controllers/persons.controller");
const planController = require("./controllers/plans.controller");
const specialEventController = require("./controllers/special-events.controller");
const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

app.use("/locations", locationController);
app.use("/machines", machineController);
app.use("/persons", personController);
app.use("/plans", planController);
app.use("/special-events", specialEventController);

module.exports = app;
