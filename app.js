const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller");

app.use(express.json());

app.use("/locations", locationsController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
