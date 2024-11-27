import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MenuCard from "../components/MenuCard";
import axios from "axios";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa6";
import { GiChiliPepper } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const Menu = () => {
    const [productData, setProductData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filter, setFilter] = useState({
        search: "",
        Star: "",
        Spice: "",
        minValue: 0,
        maxValue: 200,
    });

    const getProductData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3001/getproducts"
            );
            const formattedData = response.data.result.map((item) => ({
                ...item,
                Star: Number(item.Star),
            }));
            setProductData(formattedData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    useEffect(() => {
        const filtered = productData.filter((item) => {
            const matchesSearch = filter.search
                ? item.Pname.toLowerCase().includes(filter.search.toLowerCase())
                : true;
            const matchesStar = filter.Star
                ? item.Star === Number(filter.Star)
                : true;
            const matchesSpice = filter.Spice
                ? item.Spice === Number(filter.Spice)
                : true;
            const matchesPrice =
                item.Price >= filter.minValue && item.Price <= filter.maxValue;

            return matchesSearch && matchesStar && matchesSpice && matchesPrice;
        });
        setFilteredData(filtered);
    }, [filter, productData]);

    const handleFilterChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFilter((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (checked ? value : "") : value,
        }));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <div className="flex bg-red-100 mt-8 px-10 justify-between sticky top-10">
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
                    <div className="flex items-center gap-3">
                        <input
                            className="rounded-full my-5 px-5 w-[1200px] py-2 border border-gray-300"
                            type="text"
                            name="search"
                            placeholder="Search"
                            value={filter.search}
                            onChange={handleFilterChange}
                        />
                        <FaSearch className="text-2xl" />
                    </div>
                </div>

                <div className="mt-8 flex">
                    <div className="bg-red-100 pr-8 rounded-r-md fixed pb-5">
                        <div className="bg-white mb-5 mt-8 rounded-r-md">
                            <h3 className="px-14 py-2 text-xl font-medium text-center">
                                Filter
                            </h3>
                        </div>
                        <form>
                            <label className="text-lg ml-5 flex flex-col mb-3 font-medium">
                                Rating
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <div key={rating} className="ml-5 flex">
                                        <input
                                            className="w-4"
                                            type="checkbox"
                                            name="Star"
                                            value={rating}
                                            checked={
                                                filter.Star === String(rating)
                                            }
                                            onChange={handleFilterChange}
                                        />
                                        <span className="ml-2 flex gap-2">
                                            {rating}
                                            <span className="flex items-center text-yellow-500">
                                                {Array(rating)
                                                    .fill(0)
                                                    .map((_, index) => (
                                                        <FaStar key={index} />
                                                    ))}
                                            </span>
                                        </span>
                                    </div>
                                ))}
                            </label>

                            <label className="text-lg ml-5 flex flex-col mb-3 font-medium">
                                Spicy Level
                                {[0, 1, 2].map((spice) => (
                                    <div key={spice} className="ml-5 flex">
                                        <input
                                            className="w-4"
                                            type="checkbox"
                                            name="Spice"
                                            value={spice}
                                            checked={
                                                filter.Spice === String(spice)
                                            }
                                            onChange={handleFilterChange}
                                        />
                                        <span className="ml-2">
                                            {spice === 0 ? (
                                                "Not spicy"
                                            ) : (
                                                <div className="flex gap-2">
                                                    {spice}
                                                    <span className="flex items-center text-red-500">
                                                        {Array(spice)
                                                            .fill(0)
                                                            .map((_, index) => (
                                                                <GiChiliPepper
                                                                    key={index}
                                                                />
                                                            ))}
                                                    </span>
                                                </div>
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </label>

                            <label className="text-lg mx-5 flex flex-col mb-3 font-medium">
                                Price Range
                                <div className="flex items-center gap-4">
                                    <input
                                        type="number"
                                        name="minValue"
                                        value={filter.minValue}
                                        onChange={(e) =>
                                            setFilter((prev) => ({
                                                ...prev,
                                                minValue: Number(
                                                    e.target.value
                                                ),
                                            }))
                                        }
                                        className="w-20 p-1 border border-gray-300 rounded text-center"
                                    />
                                    <input
                                        type="number"
                                        name="maxValue"
                                        value={filter.maxValue}
                                        onChange={(e) =>
                                            setFilter((prev) => ({
                                                ...prev,
                                                maxValue: Number(
                                                    e.target.value
                                                ),
                                            }))
                                        }
                                        className="w-20 p-1 border border-gray-300 rounded text-center"
                                    />
                                </div>
                            </label>
                        </form>
                    </div>

                    <div className="grid grid-cols-3 2xl:grid-cols-4 gap-16 p-8 mx-auto mr-10">
                        {filteredData.map((item) => (
                            <MenuCard
                                key={item.UID}
                                id={item.UID}
                                Pname={item.Pname}
                                Desp={item.Desp}
                                Star={item.Star}
                                Price={item.Price}
                                Spice={item.Spice}
                                Img={item.Img}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Menu;
