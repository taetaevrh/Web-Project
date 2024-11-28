import { React, useState } from "react";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [register, setRegister] = useState();
    const navigate = useNavigate();

    // Send data to backend
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (register.password !== register.confirmpassword)
            return alert("Confirm password is not the same as password.");
        try {
            const response = await axios.post(
                "http://localhost:3001/register",
                register
            );
            navigate("/login");
        } catch (err) {
            console.log(err.response.data);
        }
    };

    // Update data if target has changed
    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegister((prev) => ({ ...prev, [name]: value }));
    };

    const inputbox = "border w-full px-5 py-2 rounded-md placeholder:text-sm";

    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar />

                <div className="flex flex-col flex-grow items-center mt-10">
                    <Logo />
                    <div className="border bg-red-100 p-10 rounded-xl w-[700px]">
                        <form className="grid grid-cols-1 gap-2">
                            {/* EMAIL */}
                            <label className="text-md" htmlFor="txtemail">
                                Email Address
                                <input
                                    className={inputbox}
                                    type="email"
                                    name="email"
                                    placeholder="Your email here..."
                                    onChange={handleChange}
                                />
                            </label>

                            {/* PASSWORD */}
                            <label className="text-md" htmlFor="txtpass">
                                Password
                                <input
                                    className={inputbox}
                                    type="password"
                                    name="password"
                                    placeholder="Your password here..."
                                    onChange={handleChange}
                                />
                            </label>

                            {/* CONFIRM PASSWORD */}
                            <label className="text-md" htmlFor="txtpass">
                                Confirm Password
                                <input
                                    className={inputbox}
                                    type="password"
                                    name="confirmpassword"
                                    placeholder="Your password here..."
                                    onChange={handleChange}
                                />
                            </label>

                            <div className="grid grid-cols-2 gap-3">
                                {/* FIRSTNAME */}
                                <label className="text-md" htmlFor="txtemail">
                                    Firstname
                                    <input
                                        className={inputbox}
                                        type="text"
                                        name="fname"
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* LASTNAME */}
                                <label className="text-md" htmlFor="txtemail">
                                    Lastname
                                    <input
                                        className={inputbox}
                                        type="text"
                                        name="lname"
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* DOB */}
                                <label className="text-md" htmlFor="txtemail">
                                    Date of Birth
                                    <input
                                        className={inputbox}
                                        type="date"
                                        name="dob"
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* PHONE */}
                                <label className="text-md" htmlFor="txtemail">
                                    Tel.
                                    <input
                                        className={inputbox}
                                        type="text"
                                        name="phone"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>

                            {/* ADDRESS */}
                            <label className="text-md" htmlFor="txtemail">
                                Address
                                <input
                                    className={inputbox}
                                    type="text"
                                    name="address"
                                    onChange={handleChange}
                                />
                            </label>
                        </form>
                        {/* REGISTER BUTTON */}
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="flex text-white text-lg font-medium mt-12 w-full bg-orange-500 justify-center items-center py-3 rounded-md"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
