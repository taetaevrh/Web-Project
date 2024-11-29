const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const axios = require("axios");

dotenv.config();

// Setup connection with database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

// Connect to database
db.connect((err) => {
    if (err) throw err;
    console.log(`Database Connected on : ${process.env.DB_NAME}`);
});

// Middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000", "localhost:3000"],
        credentials: true,
    })
);

// User register
app.post("/register", (req, res) => {
    const query =
        "INSERT INTO Users (Fname, Lname, DoB, Phone, Address, Email, Password) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const { fname, lname, dob, phone, address, email, password } = req.body;

    db.query(
        query,
        [fname, lname, dob, phone, address, email, password],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Register successfully", result: result });
        }
    );
});

// User login & generate token
app.post("/login", async (req, res) => {
    const query =
        "SELECT Email, Password, isAdmin FROM Users WHERE Email = ? AND Password = ?";
    const { email, password, recaptchaToken } = req.body;

    try {
        const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${recaptchaToken}`;
        const { data } = await axios.post(verifyURL);

        if (!data.success) {
            return res.status(400).json({ error: "Invalid reCAPTCHA token" });
        }
    } catch (error) {
        console.error("reCAPTCHA validation error:", error);
        return res.status(500).json({ error: "reCAPTCHA validation failed" });
    }

    db.query(query, [email, password], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0)
            return res.status(404).json({ error: "No user found" });

        const token = jwt.sign(
            { email, isAdmin: result[0].isAdmin },
            process.env.TOKEN_PASS,
            {
                expiresIn: "12h",
            }
        );
        res.cookie("key", token);
        res.json({ message: "Generate key successfully!", result: result[0] });
    });
});

// Check token
app.post("/checktoken", (req, res) => {
    const token = req.cookies.key;

    if (!token) return res.status(401).json({ message: "Session Expired" });

    jwt.verify(token, process.env.TOKEN_PASS, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (!result)
            return res
                .status(403)
                .json({ message: "เปลี่ยน Token ทำไมครับที่รัก" });
        return res
            .status(200)
            .json({ message: "Token Verified", result: result });
    });
});

// User logout
app.post("/logout", (req, res) => {
    res.clearCookie("key");
    res.json({ message: "Logged out successfully" });
});

// Add product
app.post("/addproduct", (req, res) => {
    const query =
        "INSERT INTO Products (Pname, Desp, Price, Star, Spice, Img) VALUES (?, ?, ?, ?, ?, ?)";
    const { pname, desp, price, star, spice, img } = req.body;
    db.query(query, [pname, desp, price, star, spice, img], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Product added successfully" });
    });
});

// Add user
app.post("/adduser", (req, res) => {
    const query =
        "INSERT INTO Users (Fname, Lname, DoB, Phone, Address, Email, Password, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const { fname, lname, dob, phone, address, email, password, isAdmin } =
        req.body;
    db.query(
        query,
        [fname, lname, dob, phone, address, email, password, isAdmin],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "User added successfully" });
        }
    );
});

// Get all products
app.get("/getproducts", (req, res) => {
    const query = "SELECT * FROM Products";

    db.query(query, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({
            message: "Get all product data successfully",
            result: result,
        });
    });
});

// Get product by ID
app.get("/getproduct/:id", (req, res) => {
    const query = "SELECT * FROM Products WHERE PID = ?";
    const id = req.params.id;

    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({
            message: `Get product data | ID: ${id} Name: ${result[0].Pname} | successfully`,
            result: result,
        });
    });
});

// Update product by ID
app.put("/updateproduct/:id", (req, res) => {
    const query =
        "UPDATE Products SET Pname = ?, Desp = ?, Price = ?, Star = ?, Spice = ?, Img = ? WHERE PID = ?";
    const { Pname, Desp, Price, Star, Spice, Img } = req.body;
    const id = req.params.id;

    db.query(
        query,
        [Pname, Desp, Price, Star, Spice, Img, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({
                message: `Update product | ID: ${id} Name: ${Pname} | successfully`,
                result: result,
            });
        }
    );
});

// Delete product by ID
app.delete("/deleteproduct/:id", (req, res) => {
    const query = "DELETE FROM Products WHERE PID = ?";
    const id = req.params.id;

    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({
            message: `Delete Product ID: ${id} succesfully`,
            result: result,
        });
    });
});

// Get all users
app.get("/getusers", (req, res) => {
    const query =
        "SELECT UID, Fname, Lname, DATE_FORMAT(DoB, '%Y-%m-%d') AS DoB, Phone, Address, Email, Password, isAdmin FROM Users";

    db.query(query, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Get all user data successfully", result: result });
    });
});

// Get user by ID
app.get("/getuser/:id", (req, res) => {
    const query =
        "SELECT UID, Fname, Lname, DATE_FORMAT(DoB, '%Y-%m-%d') AS DoB, Phone, Address, Email, Password, isAdmin FROM Users WHERE UID = ?";
    const id = req.params.id;

    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({
            message: `Get user data | ID: ${id} Name: ${result[0].Fname} ${result[0].Lname} | successfully`,
            result: result,
        });
    });
});

// Update user by ID
app.put("/updateuser/:id", (req, res) => {
    const query =
        "UPDATE Users SET Fname = ?, Lname = ?, DoB = ?, Phone = ?, Email = ?, Password = ?, isAdmin = ? WHERE UID = ?";

    const { Fname, Lname, DoB, Phone, Email, Password, isAdmin } = req.body;
    const id = req.params.id;

    db.query(
        query,
        [Fname, Lname, DoB, Phone, Email, Password, isAdmin, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({
                message: `Update user | ID: ${id} Name: ${Fname} ${Lname} | successfully`,
                result: result,
            });
        }
    );
});

// Delete user by ID
app.delete("/deleteuser/:id", (req, res) => {
    const query = "DELETE FROM Users WHERE UID = ?";
    const id = req.params.id;

    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({
            message: `Delete user ID: ${id} succesfully`,
            result: result,
        });
    });
});

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port: ${process.env.PORT}`);
});
