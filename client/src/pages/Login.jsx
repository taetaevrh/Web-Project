import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
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
            console.log(response.data.result[0]);
            if (response.data.result.isAdmin !== 1) {
                navigate("/");
            } else {
                navigate("/management");
            }
        } catch (err) {
            console.log(err.response);
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
                        <div className="mt-12">
                            <div className="flex justify-end text-gray-600 gap-1 text-sm">
                                Dont have account?
                                <NavLink to="/register">
                                    <button className="mr-4 mb-1 underline">
                                        Register
                                    </button>
                                </NavLink>
                            </div>

                            {/* LOGIN BUTTON */}
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="flex text-white text-lg font-medium w-full bg-orange-500 justify-center items-center py-3 rounded-md"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
