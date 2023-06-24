// DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const app = express();

const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventController = require("./controllers/special-events.controller");
app.use(logger("dev"));
app.use(express.json());

let locations = require("./models/location.model");

// ROUTES
app.use("/locations", locationsController);
app.use("/persons", personsController);
app.use("/machines", machinesController);
app.use("/plans", plansController);
app.use("/special-events", specialEventController);
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.get("*", (req, res) => {
    res.status(404).json({ message: "page not found" });
});
// EXPORT
module.exports = app;
