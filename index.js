const express = require("express")
const db = require("mysql2")
const path = require("path")
const dotenv = require("dotenv")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express();
const router = express.Router()

dotenv.config();
const PORT = process.env.PORT || 2004

app.use(router);
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: ["localhost:5500"],
    credentials: true,
}));

router.get("/", (req, res) => {
    console.log(`Request at ${req.url}`)
    res.sendFile(path.join(__dirname, "html", "home.html"))
});

router.get("/about-us", (req, res) => {
    console.log(`Request at ${req.url}`)
    res.sendFile(path.join(__dirname, "html", "about-us.html"))
});

router.get("/contact", (req, res) => {
    console.log(`Request at ${req.url}`)
    res.sendFile(path.join(__dirname, "html", "contact.html"))
});

router.get("/login", (req, res) => {
    console.log(`Request at ${req.url}`)
    res.sendFile(path.join(__dirname, "html", "login.html"))
})

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server is running on port: ${PORT}`)
});