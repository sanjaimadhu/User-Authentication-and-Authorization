const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(require("cors")());
app.use(require("helmet")());
app.use(require("morgan")("dev"));

connectDB();

app.use("/api/auth", authRoutes);

app.use("/", (req, res) => {
    res. json({
        status: "API IS RUNNING",
        code: 200
    })
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
