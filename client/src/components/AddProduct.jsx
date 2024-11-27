import React, { useState } from "react";
import axios from "axios";

const AddProduct = ({ setModal }) => {
    const inputbox = "border w-full px-5 py-2 rounded-md placeholder:text-sm";
    const [addProduct, setAddProduct] = useState({
        pname: "",
        desp: "",
        price: "",
        star: "",
        spice: "",
        img: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        try {
            const response = await axios.post(
                "http://localhost:3001/addproduct",
                addProduct
            );
            setModal(false);
        } catch (err) {
        }
    };

    return (
        <div className="fixed z-10 bg-black bg-opacity-50 w-full h-full flex justify-center">
            <div className="bg-white flex justify-center items-center my-auto w-auto px-12 py-10 rounded-md">
                <div className="">
                    <h1 className="text-3xl font-bold mb-5">Add Product</h1>
                    <div>
                        <form className="grid grid-cols-1 gap-5">
                            {/* PNAME */}
                            <label>
                                Name
                                <input
                                    className={inputbox}
                                    type="text"
                                    name="pname"
                                    placeholder="Product Name"
                                    onChange={handleChange}
                                />
                            </label>

                            {/* DESCRIPTION */}
                            <label>
                                Description
                                <input
                                    className={inputbox}
                                    type="text"
                                    name="desp"
                                    placeholder="Product Desciption"
                                    onChange={handleChange}
                                />
                            </label>

                            {/* PRICE */}
                            <label>
                                Price
                                <input
                                    className={inputbox}
                                    type="number"
                                    min="0"
                                    name="price"
                                    placeholder="Product Price"
                                    onChange={handleChange}
                                />
                            </label>

                            {/* RATING */}
                            <label>
                                Rating
                                <input
                                    className={inputbox}
                                    type="number"
                                    min="0"
                                    max="5"
                                    name="star"
                                    placeholder="Product Rating"
                                    onChange={handleChange}
                                />
                            </label>

                            {/* SPICY LEVEL */}
                            <label>
                                Spicy Level
                                <input
                                    className={inputbox}
                                    type="number"
                                    min="0"
                                    max="5"
                                    name="spice"
                                    placeholder="Product spicy level"
                                    onChange={handleChange}
                                />
                            </label>

                            {/* PICTURE */}
                            <label>
                                Image
                                <input
                                    className={inputbox}
                                    type="text"
                                    name="img"
                                    placeholder="Product image link"
                                    onChange={handleChange}
                                />
                            </label>
                            <div className="flex justify-between mt-7">
                                <button
                                    onClick={() => setModal(false)}
                                    className="px-3 py-1 text-lg rounded-lg font-medium bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="px-3 py-1 text-lg rounded-lg font-medium bg-orange-600 text-white"
                                >
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
