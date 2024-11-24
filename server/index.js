const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
dotenv.config();

// Start server
const app = express();
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) throw err;
    console.log(`Database Connected on : ${process.env.DB_NAME}`);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000", "localhost:3000"],
        credentials: true,
    })
);

app.post("/login", (req, res) => {
    const query =
        "SELECT email, password FROM admin WHERE email = ? AND password = ?";
    const { email, password } = req.body;

    db.query(query, [email, password], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0)
            return res.status(404).json({ error: "No user found" });

        const token = jwt.sign({ email }, "decode", { expiresIn: "12h" });
        res.cookie("key", token);
        res.json({ message: "Generate key successfully!" });
    });
});

app.post("/checktoken", (req, res) => {
    const value = req.cookies.key;
    console.log(value)
    if (!value) return res.status(401).json({ message: "Session Expired" });

    jwt.verify(value, "decode", (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (!result)
            return res
                .status(403)
                .json({ message: "เปลี่ยน Token หาพ่อมึงหรอ" });
        return res.status(200).json({ message: "มึงผ่าน ยินดีด้วย", result: result });
    });
});

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port: ${process.env.PORT}`);
});
