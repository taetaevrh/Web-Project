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
                const response = await axios.post(url);
                console.log(response);
                if (response.status === 200) {
                    setIsAuthenticated(true);
                }

            } catch (error) {
                setIsAuthenticated(false);
                navigate("/login");
            }
        };

        checkLogin();
    }, []);

    return isAuthenticated ? children : null;
};

export default ProtectRoute;
