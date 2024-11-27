import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
    axios.defaults.withCredentials = true;
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!recaptchaToken) return alert("Please complete the reCAPTCHA.");
        try {
            const response = await axios.post("http://localhost:3001/login", {
                ...user,
                recaptchaToken,
            });
            if (response.data.result.isAdmin !== 1) {
                navigate("/");
            } else {
                navigate("/management");
            }
        } catch (err) {
            return alert(err.response.data.error)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token); // Save the token when the user completes the reCAPTCHA
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />

            <div className="flex flex-col flex-grow items-center mt-10">
                <Logo />
                <div className="border bg-red-100 p-8 rounded-xl w-[500px]">
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
                        {/* reCAPTCHA */}
                        <div className="mt-6 flex justify-center">
                            <ReCAPTCHA
                                sitekey="6Ld17YsqAAAAAJdbg_lczBfhcrv9KJdFnYG7Cfb_" // Replace with your site key from Google reCAPTCHA
                                onChange={handleRecaptchaChange}
                                onExpired={() => setRecaptchaToken(null)} // Reset token if expired
                            />
                        </div>
                        <div className="mt-12">
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
                    <div className="flex justify-end text-gray-600 gap-1 text-sm mt-2">
                        Dont have account?
                        <NavLink to="/register">
                            <button className="mr-2 mb-1 underline">
                                Register
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
