const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const http = require('http');
const app = require("./app");
const mongoose = require("mongoose");

// PORT
const port = process.env.PORT;
const db = process.env.DB_PORT;

// SERVEUR
mongoose.connect(db)
.then(() => console.log("DB connected"))
.catch(err=>console.log(err));

app.listen(port, () => {
    console.log(`listen on port ${port} 😒`)
})