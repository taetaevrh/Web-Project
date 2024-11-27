import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";
import MenuCard from "../components/MenuCard";
import axios from "axios";
import Footer from "../components/Footer";

const Menu = () => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(200);
    const getProductUrl = "http://localhost:3001/getproducts";
    const [productData, setProductData] = useState([]);

    const handleMinChange = (event) => {
        const value = Math.min(Number(event.target.value), maxValue - 10);
        setMinValue(value);
    };

    const handleMaxChange = (event) => {
        const value = Math.max(Number(event.target.value), minValue + 10);
        setMaxValue(value);
    };

    const getProductData = async () => {
        try {
            const response = await axios.get(getProductUrl);
            setProductData(response.data.result);
            console.log(response.data.message);
            console.log(response.data.result);
            console.log(productData);
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <>
            <Navbar />

            {/* SEARCH BAR */}
            <div className="flex justify-between items-center bg-red-100 mt-8 px-10">
                <div className="gap-5 flex items-center justify-center py-2">
                    <img
                        src="img/sasuke-home.png"
                        alt="Sasuke-Pic"
                        width="25px"
                    />
                    <h1 className="logo-text text-5xl font-bold mt-6">
                        Sasuke Ramen
                    </h1>
                </div>
                <form>
                    <div className="flex justify-center items-center gap-3 mr-12">
                        <label>
                            <input
                                className="rounded-full px-5 w-[1200px] py-2 border border-gray-300 drop-shadow-lg"
                                type="text"
                                name="search"
                                placeholder="search"
                            />
                        </label>
                        <div className="text-2xl">
                            <button className="flex justify-center items-center">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* FILTER & Menu Items */}
            <div className="mt-8 flex">
                <div className="bg-red-100 pr-8 rounded-r-md">
                    <div className="bg-white mb-5 mt-8 rounded-r-md">
                        <h3 className="px-14 py-2 text-xl font-medium">
                            Filter
                        </h3>
                    </div>

                    <form>
                        {/* RATING */}
                        <label className="text-lg ml-5 flex flex-col mb-3 font-medium">
                            Rating
                            <div className="ml-5 flex">
                                <input
                                    className="w-4"
                                    type="checkbox"
                                    name="Star"
                                    value={1}
                                />
                                <label className="ml-2 flex">
                                    1
                                    <div className="text-yellow-500 flex items-center ml-2">
                                        <FaStar />
                                    </div>
                                </label>
                            </div>
                            <div className="ml-5 flex">
                                <input
                                    className="w-4"
                                    type="checkbox"
                                    name="Star"
                                    value={2}
                                />
                                <label className="ml-2 flex">
                                    2
                                    <div className="text-yellow-500 flex items-center ml-2">
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </label>
                            </div>
                            <div className="ml-5 flex">
                                <input
                                    className="w-4"
                                    type="checkbox"
                                    name="Star"
                                    value={3}
                                />
                                <label className="ml-2 flex">
                                    3
                                    <div className="text-yellow-500 flex items-center ml-2">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </label>
                            </div>
                            <div className="ml-5 flex">
                                <input
                                    className="w-4"
                                    type="checkbox"
                                    name="Star"
                                    value={4}
                                />
                                <label className="ml-2 flex">
                                    4
                                    <div className="text-yellow-500 flex items-center ml-2">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </label>
                            </div>
                            <div className="ml-5 flex">
                                <input
                                    className="w-4"
                                    type="checkbox"
                                    name="Star"
                                    value={5}
                                />
                                <label className="ml-2 flex">
                                    5
                                    <div className="text-yellow-500 flex items-center ml-2">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </label>
                            </div>
                        </label>

                        {/* Spice */}
                        <label className="text-lg ml-5 flex flex-col mb-3 font-medium">
                            Spicy level
                            <div className="ml-5 flex">
                                <input
                                    className="w-4"
                                    type="checkbox"
                                    name="Spice"
                                    value={0}
                                />
                                <label className="ml-2 flex">Not spicy</label>
                            </div>
                            <div className="ml-5 flex">
                                <input
                                    className="w-4"
                                    type="checkbox"
                                    name="Spice"
                                    value={1}
                                />
                                <label className="ml-2 flex">
                                    1
                                    <div className="text-red-500 flex items-center ml-2">
                                        <GiChiliPepper />
                                    </div>
                                </label>
                            </div>
                            <div className="ml-5 flex">
                                <input
                                    className="w-4"
                                    type="checkbox"
                                    name="Spice"
                                    value={2}
                                />
                                <label className="ml-2 flex">
                                    2
                                    <div className="text-red-500 flex items-center ml-2">
                                        <GiChiliPepper />
                                        <GiChiliPepper />
                                    </div>
                                </label>
                            </div>
                        </label>

                        {/* PRICE */}
                        <label className="text-lg mx-5 flex flex-col mb-3 font-medium">
                            <h3 className="text-lg font-medium mb-4">
                                Price Range
                            </h3>
                            <div className="relative w-full">
                                {/* Slider Track */}
                                <div className="absolute h-1 bg-gray-300 rounded-full w-full top-1/2 transform -translate-y-1/2"></div>
                                {/* Selected Range */}
                                <div
                                    className="absolute h-1"
                                    style={{
                                        left: `${(minValue / 200) * 100}%`,
                                        right: `${
                                            100 - (maxValue / 200) * 100
                                        }%`,
                                    }}
                                ></div>
                                {/* Min Slider */}
                                <input
                                    type="range"
                                    min="0"
                                    max="200"
                                    value={minValue}
                                    onChange={handleMinChange}
                                    className="absolute w-full appearance-none z-10"
                                    style={{
                                        pointerEvents: "auto",
                                    }}
                                />
                                {/* Max Slider */}
                                <input
                                    type="range"
                                    min="0"
                                    max="200"
                                    value={maxValue}
                                    onChange={handleMaxChange}
                                    className="absolute w-full appearance-none z-20"
                                    style={{
                                        pointerEvents: "auto",
                                    }}
                                />
                            </div>
                            <div className="flex justify-between w-full mt-5">
                                <span className="text-lg">${minValue}</span>
                                <span className="text-lg">${maxValue}</span>
                            </div>
                        </label>

                        <div className="flex justify-center items-center mt-5">
                            <button className="py-2 px-5 bg-gray-700 text-white rounded-md">
                                Clear filter
                            </button>
                        </div>
                    </form>
                </div>

                {/* Menu Items */}
                <div className="grid grid-cols-4 gap-16 p-8 mx-auto">
                    {productData
                        ? productData.map((item) => (
                              <MenuCard
                                  key={item.UID}
                                  id={item.UID}
                                  Pname={item.Pname}
                                  Desp={item.Desp}
                                  Star={Number(item.Star)}
                                  Price={item.Price}
                                  Spice={item.Spice}
                                  Img={item.Img}
                              />
                          ))
                        : ""}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Menu;
