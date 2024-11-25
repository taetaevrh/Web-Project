import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Login = () => {
    axios.defaults.withCredentials = true;
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/login",
                user
            );
            console.log(response.data);
            navigate("/management");
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
        console.log(user);
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />

            <div className="flex flex-col flex-grow items-center mt-10">
                <Logo />
                <div className="border bg-red-100 p-10 rounded-xl w-[500px]">
                    <h3 className="flex text-3xl font-bold mb-9 justify-center">
                        Administrator Login
                    </h3>
                    <form>
                        {/* EMAIL */}
                        <section className="mb-5">
                            <label className="text-lg" htmlFor="txtemail">
                                Email Address
                            </label>
                            <br />
                            <input
                                className="border w-full px-5 py-3 rounded-md mt-2 placeholder:text-sm"
                                type="email"
                                name="email"
                                placeholder="You email here..."
                                onChange={handleChange}
                            />
                        </section>
                        {/* PASSWORD */}
                        <section>
                            <label className="text-lg" htmlFor="txtpass">
                                Password
                            </label>
                            <br />
                            <input
                                className="border w-full px-5 py-3 rounded-md mt-2 placeholder:text-sm"
                                type="password"
                                name="password"
                                placeholder="Your password here..."
                                onChange={handleChange}
                            />
                        </section>
                        {/* LOGIN BUTTON */}
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="flex text-white text-lg font-medium w-full bg-orange-500 justify-center items-center py-3 mt-16 rounded-md"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
