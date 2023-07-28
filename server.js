const app = require("./app.js");

const PORT = 3001 || process.env.PORT;

app.listen(3001, () => {
  console.log("Server is now running on port " + 3001);
});
