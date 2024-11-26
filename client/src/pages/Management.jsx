import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import { FaPlus } from "react-icons/fa6";

const Management = () => {
    const [activeTab, setActiveTab] = useState("Product");

    return (
        <>
            <div className="h-screen">
                <Navbar />

                <div className="flex justify-between py-5 px-20 border">
                    <Logo />
                    <div className="flex items-end">
                        {/* SLIDING BACKGROUND */}
                        <div className="relative flex gap-7 items-center mb-2">
                            <div
                                className={`absolute top-0 left-0 h-full w-[120px] bg-orange-600 transition-transform duration-300 ${
                                    activeTab === "User"
                                        ? "translate-x-[120px] rounded-r-md"
                                        : "translate-x-0 rounded-l-md"
                                }`}
                            ></div>
                            {/* PRODUCT & USER BUTTON */}
                            <div className="flex items-center font-medium rounded-md overflow-hidden drop-shadow-xl">
                                <button
                                    onClick={() => {
                                        setActiveTab("Product");
                                    }}
                                    className={`relative z-10 px-4 py-2 text-2xl w-[120px] transition-all ${
                                        activeTab === "Product"
                                            ? "text-white"
                                            : "text-black bg-gray-300"
                                    }`}
                                >
                                    Product
                                </button>
                                <button
                                    onClick={() => {
                                        setActiveTab("User");
                                    }}
                                    className={`relative z-10 px-4 py-2 text-2xl w-[120px] transition-all ${
                                        activeTab === "User"
                                            ? "text-white"
                                            : "text-black bg-gray-300"
                                    }`}
                                >
                                    User
                                </button>
                            </div>
                            {/* PLUS BUTTON */}
                            <button className="flex justify-center items-center text-4xl bg-gray-300 w-[50px] h-[50px] rounded-full hover:scale-110 transition-all hover:bg-orange-600 hover:text-white">
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 "></div>
            </div>
        </>
    );
};

export default Management;
