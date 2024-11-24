import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import Management from "./pages/Management";


export default function App() {
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
