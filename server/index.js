const express = require("express");
const db = require("mysql2");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const router = express.Router();

dotenv.config();
const PORT = process.env.PORT;

app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin: ["localhost:3001"],
        credentials: true,
    })
);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port: ${PORT}`);
});
