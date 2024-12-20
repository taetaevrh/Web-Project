import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import axios from "axios";
import { useEffect } from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
    const checkTokenUrl = "http://localhost:3001/checktoken";
    const clearCookieUrl = "http://localhost:3001/logout";
    const [email, setEmail] = useState(false);
    const [isAdmin, setIsAdmin] = useState(0);
    const [loading, setLoading] = useState(true); // Track loading state
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const response = await axios.post(checkTokenUrl);
                setEmail(response.data.result.email);
                setIsAdmin(response.data.result.isAdmin);
            } catch (error) {
                console.log(`error: ${error}`);
                setEmail(false);
            } finally {
                setLoading(false); // Stop loading once the check is done
            }
        };

        checkLogin();
    }, []);

    //Navigate to Home page and send data to backend
    const handleLogout = async () => {
        try {
            const response = await axios.post(clearCookieUrl);
            setEmail(false);
            setIsAdmin(0);
            navigate("/");
        } catch (error) {
            console.log(`error: ${error}`);
        }
    };

    if (loading) {
        // Show a loading state while the token is being validated
        return <div className="text-white">Loading...</div>;
    }

    return (
        <nav className="flex justify-between px-5 bg-orange-600 py-2 top-0 sticky z-10">
            <ul className="flex gap-5">
                {/* HOME */}
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${
                                isActive ? "font-bold text-black" : "text-white"
                            } flex gap-1 transition-all duration-300 delay-150 hover:scale-105 cursor-pointer group`
                        }
                    >
                        <IoHome className="text-xl" />
                        <p className="relative inline-block">
                            HOME
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "bg-black" : "bg-white"
                                    } absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-left transition-transform duration-300 delay-150 ease-in-out group-hover:scale-x-100`
                                }
                            />
                        </p>
                    </NavLink>
                </li>

                {/* MENU */}
                <li>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            `${
                                isActive ? "font-bold text-black" : "text-white"
                            } flex gap-1 transition-all duration-300 delay-150 hover:scale-105 cursor-pointer group`
                        }
                    >
                        <FaBookOpen className="text-xl" />
                        <p className="relative inline-block">
                            MENU
                            <NavLink
                                to="/menu"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "bg-black" : "bg-white"
                                    } absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-left transition-transform duration-300 delay-150 ease-in-out group-hover:scale-x-100`
                                }
                            />
                        </p>
                    </NavLink>
                </li>

                {/* ABOUT US */}
                <li>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            `${
                                isActive ? "font-bold text-black" : "text-white"
                            } flex gap-1 transition-all duration-300 delay-150 hover:scale-105 cursor-pointer group`
                        }
                    >
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="relative inline-block">
                            ABOUT US
                            <NavLink
                                to="/about-us"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "bg-black" : "bg-white"
                                    } absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-left transition-transform duration-300 delay-150 ease-in-out group-hover:scale-x-100`
                                }
                            />
                        </p>
                    </NavLink>
                </li>

                {/* CONTACT */}
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${
                                isActive ? "font-bold text-black" : "text-white"
                            } flex gap-1 transition-all duration-300 delay-150 hover:scale-105 cursor-pointer group`
                        }
                    >
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                        </svg>
                        <p className="relative inline-block">
                            CONTACT
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "bg-black" : "bg-white"
                                    } absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-left transition-transform duration-300 delay-150 ease-in-out group-hover:scale-x-100`
                                }
                            />
                        </p>
                    </NavLink>
                </li>
            </ul>
            {email ? (
                <>
                    {/* MANAGE */}
                    <div className="flex gap-7">
                        {isAdmin === 1 ? (
                            <NavLink
                                to="/management"
                                className={({ isActive }) =>
                                    `${
                                        isActive
                                            ? "font-bold text-black"
                                            : "text-white"
                                    } flex gap-1 transition-all duration-300 delay-150 hover:scale-105 cursor-pointer group`
                                }
                            >
                                <div className="flex items-center justify-center gap-1">
                                    <FaScrewdriverWrench />
                                    <p className="relative inline-block">
                                        MANAGE
                                        {/* <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white scale-x-0 origin-left transition-transform duration-300 delay-150 ease-in-out group-hover:scale-x-100" /> */}
                                        <NavLink
                                            to="/management"
                                            className={({ isActive }) =>
                                                `${
                                                    isActive
                                                        ? "bg-black"
                                                        : "bg-white"
                                                } absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-left transition-transform duration-300 delay-150 ease-in-out group-hover:scale-x-100`
                                            }
                                        ></NavLink>
                                    </p>
                                </div>
                            </NavLink>
                        ) : (
                            ""
                        )}

                        {/* LOGOUT */}
                        <NavLink className="text-white flex gap-1 transition-all duration-300 delay-150 hover:scale-105 cursor-pointer group">
                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center gap-1"
                            >
                                <FaUser />
                                <p className="relative inline-block">
                                    LOGOUT
                                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white scale-x-0 origin-left transition-transform duration-300 delay-150 ease-in-out group-hover:scale-x-100" />
                                </p>
                            </button>
                        </NavLink>
                    </div>
                </>
            ) : (
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        `${
                            isActive ? "font-bold text-black" : "text-white"
                        } flex gap-1 transition-all duration-300 delay-150 hover:scale-105 cursor-pointer group`
                    }
                >
                    <div className="flex items-center justify-center gap-1">
                        <FaUser />
                        <p className="relative inline-block">
                            LOGIN
                            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white scale-x-0 origin-left transition-transform duration-300 delay-150 ease-in-out group-hover:scale-x-100" />
                        </p>
                    </div>
                </NavLink>
            )}
        </nav>
    );
};

export default Navbar;
