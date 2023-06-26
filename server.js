require("dotenv").config();
//The code above will always have to be on the very top
//on iterm "npm i dotenv"

const app = require("./app")

const PORT = process.env.PORT || 3001

app.listen(3001, () =>{
    console.log("Server is now running on port " + 3001);
})