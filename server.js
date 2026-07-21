require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const noteRoute = require("./routes/noteRoutes");

const app = express();

app.use(express.json());

app.use("/notes", noteRoute);

const PORT = process.env.PORT || 3000;

(async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})();