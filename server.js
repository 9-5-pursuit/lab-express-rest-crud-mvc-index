const app = require("./app");
const dotenv = require("./app");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listing on port ${PORT}`);
});
