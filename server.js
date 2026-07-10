require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const noteRoute = require("./routes/noteRoutes");


const app = express();
app.use(express.json());

 (async () => {
    await connectDB();
    
    app.listen(3000,() => {
    console.log("Server Running");

    
    app.use("/notes",noteRoute);
    app.use("/notes",noteRoute);
    app.use("/notes/:id",noteRoute);
    app.use("/notes",noteRoute);

});
 })();
