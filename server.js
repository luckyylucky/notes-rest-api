require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const noteRoute = require("./routes/noteRoutes");
const userRoute = require("./routes/userRoutes");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(cors({
    origin: "http://localhost:5174"
}));

app.use("/notes", noteRoute);
app.use("/notes", userRoute)
app.use("/notes", userRoute);

const PORT = process.env.PORT || 3000;

(async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})();