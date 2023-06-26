// DEPENDENCIES
const express = require("express");

// const bookmarkController = require("./controller/bookmarkController");
// const indexController = require("./controller/indexController");

// CONFIGURATION
//Teaches app to read incoming json data
const app = express();
app.use(express.json());

// ROUTES
// app.use("/", indexController);
// app.use("/bookmark", bookmarkController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// EXPORT
module.exports = app;
