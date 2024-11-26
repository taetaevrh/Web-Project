import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Management from "./pages/Management";
import ProtectRoute from "./services/ProtectRoute";
import Menu from "./pages/Menu";
import Register from "./pages/Register";

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/management"
                        element={
                            <ProtectRoute>
                                <Management />
                            </ProtectRoute>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}
