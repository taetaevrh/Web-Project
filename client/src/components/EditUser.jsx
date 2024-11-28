import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashCan } from "react-icons/fa6";

const EditProduct = ({ activePID, setEditModal }) => {
    const getUserUrl = `http://localhost:3001/getuser/${activePID}`;
    const deleteUserUrl = `http://localhost:3001/deleteuser/${activePID}`;
    const inputbox = "border w-full px-5 py-2 rounded-md placeholder:text-sm";
    const [user, setUser] = useState(null);

    // Get data from backend
    const getUserData = async () => {
        try {
            const response = await axios.get(getUserUrl);
            const userData = response.data.result[0];
            if (response.data.result.length > 0) {
                if (userData.DoB) {
                    userData.DoB = new Date(userData.DoB)
                        .toISOString()
                        .split("T")[0];
                }
                setUser(userData);
            } else {
                return alert("No user found");
            }
        } catch (error) {
            console.log(error.response);
        }
    };

    // Update data if target has changed
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    // Send data to backend
    const handleSubmit = async () => {
        try {
            const response = await axios.put(
                `http://localhost:3001/updateuser/${activePID}`,
                user
            );
            setEditModal(false);
        } catch (err) {
            console.log(err.response);
        }
    };

    // Send data to backend
    const handleDelete = async () => {
        try {
            const response = await axios.delete(deleteUserUrl);
            setEditModal(false);
            location.reload();
        } catch (error) {
            console.log(error.response);
        }
    };

    // Run function(s) if data in the condition(s) has changed
    useEffect(() => {
        if (activePID) getUserData();
    }, [activePID]);

    return (
        <div className="fixed z-10 bg-black bg-opacity-50 w-full h-full flex justify-center">
            <div className="bg-white flex justify-center items-center my-auto w-auto px-12 py-10 rounded-md">
                <div>
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-3xl font-bold">Edit User</h1>
                        <button
                            onClick={handleDelete}
                            className="text-xl text-red-500"
                        >
                            <FaTrashCan />
                        </button>
                    </div>
                    <div>
                        {user ? (
                            <form className="grid grid-cols-2 gap-5">
                                {/* FIRST NAME */}
                                <label>
                                    First Name
                                    <input
                                        className={inputbox}
                                        type="text"
                                        value={user.Fname || ""}
                                        name="Fname"
                                        placeholder="First Name"
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* LNAME */}
                                <label>
                                    Last Name
                                    <input
                                        className={inputbox}
                                        type="text"
                                        value={user.Lname || ""}
                                        name="Lname"
                                        placeholder="Last Name"
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* DOB */}
                                <label>
                                    Date of Birth
                                    <input
                                        className={inputbox || ""}
                                        type="date"
                                        value={user.DoB}
                                        name="DoB"
                                        placeholder="User Date of Birth"
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* PHONE NO. */}
                                <label>
                                    Phone Number
                                    <input
                                        className={inputbox}
                                        type="number"
                                        value={user.Phone || ""}
                                        maxLength="10"
                                        name="Phone"
                                        placeholder="User Phone Number"
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* EMAIL */}
                                <label>
                                    Email
                                    <input
                                        className={inputbox}
                                        type="email"
                                        value={user.Email || ""}
                                        name="Email"
                                        placeholder="User Email"
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* PASSWORD */}
                                <label>
                                    Password
                                    <input
                                        className={inputbox}
                                        type="password"
                                        value={user.Password || ""}
                                        name="Password"
                                        placeholder="User Email"
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* ADDRESS */}
                                <label>
                                    Address
                                    <textarea
                                        className={`${inputbox} resize-none`}
                                        type="text"
                                        value={user.Address || ""}
                                        rows="2"
                                        name="Address"
                                        onChange={handleChange}
                                    />
                                </label>

                                {/* IS ADMIN */}
                                <label className="flex flex-col gap-2">
                                    Is Admin ?
                                    <select
                                        className={inputbox}
                                        value={user.isAdmin || 0}
                                        name="isAdmin"
                                        onChange={handleChange}
                                    >
                                        <option value={0}>No</option>
                                        <option value={1}>Yes</option>
                                    </select>
                                </label>

                                <div className="flex justify-between mt-7 col-span-full px-5">
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
                            "wow"
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
