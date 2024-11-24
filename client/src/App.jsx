import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import Management from "./pages/Management";
import { useEffect, useState } from "react";


export default function App() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3001/api")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    })

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about-us" element={<Aboutus />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/management" element={<Management />} />
                </Routes>
            </Router>
        </>
    );
}
