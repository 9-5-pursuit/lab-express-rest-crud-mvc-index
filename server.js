// DEPENDENCIES
//we do this so that when we run the test, the test is grabbing our app
const app = require("./app.js");

// CONFIGURATION
//
require("dotenv").config();
const PORT = process.env.PORT || 3001;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
