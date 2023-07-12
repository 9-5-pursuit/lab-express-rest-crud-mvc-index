require("dotenv").config();

const app = require("./app.js");

const PORT = process.env.PORT || 8888;


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

