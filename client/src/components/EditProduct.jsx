import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashCan } from "react-icons/fa6";

const EditProduct = ({ activePID, setEditModal }) => {
    const getProductUrl = `http://localhost:3001/getproduct/${activePID}`;
    const deleteProductUrl = `http://localhost:3001/deleteproduct/${activePID}`;
    const inputbox = "border w-full px-5 py-2 rounded-md placeholder:text-sm";
    const [product, setProduct] = useState(null);

    // Get data from backend
    const getProductData = async () => {
        try {
            const response = await axios.get(getProductUrl);
            if (response.data.result.length > 0) {
                setProduct(response.data.result[0]);
            } else {
                return alert("No products found");
            }
        } catch (error) {
            console.log(error.response);
        }
    };

    // Update data if target has changed
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    // Send data to backend
    const handleSubmit = async () => {
        try {
            const response = await axios.put(
                `http://localhost:3001/updateproduct/${activePID}`,
                product
            );
            setEditModal(false);
        } catch (err) {
            console.log(err.response);
        }
    };

    // Send data to backend
    const handleDelete = async () => {
        try {
            const response = await axios.delete(deleteProductUrl);
            setEditModal(false);
            location.reload();
        } catch (error) {
            console.log(error.response);
        }
    };

    // Run function(s) if data in the condition(s) has changed
    useEffect(() => {
        if (activePID) getProductData();
    }, [activePID]);

    return (
        <div className="fixed z-10 bg-black bg-opacity-50 w-full h-full flex justify-center">
            <div className="bg-white flex justify-center items-center my-auto w-auto px-12 py-10 rounded-md">
                <div>
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-3xl font-bold">Edit Product</h1>
                        <button
                            onClick={handleDelete}
                            className="text-xl text-red-500"
                        >
                            <FaTrashCan />
                        </button>
                    </div>
                    <div>
                        {product ? (
                            <form className="grid grid-cols-1 gap-5">
                                {/* PRODUCT NAME */}
                                <label>
                                    Name
                                    <input
                                        className={inputbox}
                                        type="text"
                                        value={product.Pname || ""}
                                        name="Pname"
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
                                        value={product.Desp || ""}
                                        name="Desp"
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
                                        value={product.Price || ""}
                                        min="0"
                                        name="Price"
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
                                        value={product.Star || ""}
                                        min="0"
                                        max="5"
                                        name="Star"
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
                                        value={
                                            Number(product.Spice) || Number("")
                                        }
                                        min="0"
                                        max="5"
                                        name="Spice"
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
                                        value={product.Img || ""}
                                        name="Img"
                                        placeholder="Product image link"
                                        onChange={handleChange}
                                    />
                                </label>
                                <div className="flex justify-between mt-7">
                                    <button
                                        onClick={() => setEditModal(false)}
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
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
