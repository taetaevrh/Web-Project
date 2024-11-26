import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
    const url = "http://localhost:3001/checktoken";
    axios.defaults.withCredentials = true;
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const response = await axios.post(
                    url,
                    {},
                    { withCredentials: true }
                );
                const isAdmin = response.data.result?.isAdmin;

                if (isAdmin === 1) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    navigate(isAdmin === 0 ? "/" : "/login");
                }
            } catch (error) {
                console.error("Authentication check failed:", error);
                setIsAuthenticated(false);
                navigate("/login");
            }
        };

        checkLogin();
    }, [navigate]);

    if (isAuthenticated === null) {
        // Loading state
        return <div>Loading...</div>;
    }

    return isAuthenticated ? children : null;
};

export default ProtectRoute;
