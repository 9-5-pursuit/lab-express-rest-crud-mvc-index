// DEPENDENCIES
const app = require("./app");

// CONFIGURATION
require("dotenv").config();
const PORT = 3001 || process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
