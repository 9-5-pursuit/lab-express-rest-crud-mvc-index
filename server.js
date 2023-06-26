const app = require("./app.js");

require("dotenv").config();
const PORT = 3333 || process.env.PORT;

app.listen(3333, () => {
  console.log("Server is now running on port " + 3333);
});
