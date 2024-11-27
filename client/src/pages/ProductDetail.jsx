import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";

const ProductDetail = () => {
    const { state } = useLocation();

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="container mx-auto mt-20 px-10 py-10 flex flex-col md:flex-row items-start gap-20 flex-grow ">
                    {/* Product Image */}
                    <div className="flex-1">
                        <img
                            src={state.Img}
                            alt={state.Pname}
                            className="w-full py-20 rounded-lg shadow-lg object-cover bg-gray-200"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 mt-12">
                        <h1 className="text-4xl font-medium mb-4 text-black sriracha">
                            {state.Pname}
                        </h1>
                        <h2 className="text-3xl font-bold text-red-600 mb-6">
                            ฿{state.Price}
                        </h2>
                        <p className="text-gray-700 mb-6 kanit">{state.Desp}</p>
                        <div className="mb-4">
                            <strong className="block text-lg text-black mb-2">
                                เรตติ้ง
                            </strong>
                            <div className="flex text-yellow-500">
                                {Array(state.Star)
                                    .fill(0)
                                    .map((_, index) => (
                                        <span key={index} className="text-xl">
                                            <FaStar />
                                        </span>
                                    ))}
                            </div>
                        </div>
                        <div>
                            <strong className="block text-lg text-black mb-2">
                                ความเผ็ด
                            </strong>
                            <div className="flex text-red-500">
                                {state.Spice > 0 ? Array(state.Spice)
                                    .fill(0)
                                    .map((_, index) => (
                                        <span key={index} className="text-xl">
                                            <GiChiliPepper
                                            />
                                        </span>
                                    )) : "Not Spicy"}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ProductDetail;
