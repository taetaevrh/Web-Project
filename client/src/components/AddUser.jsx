import React, { useState } from "react";
import axios from "axios";

const AddUser = ({ setModal }) => {
    const inputbox = "border w-full px-5 py-2 rounded-md placeholder:text-sm";
    const [addUser, setAddUser] = useState({
        fname: "",
        lname: "",
        dob: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        isAdmin: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddUser((prev) => ({ ...prev, [name]: value }));
        console.log(addUser);
    };

    const handleSubmit = async () => {
        console.log(addUser)
        try {
            const response = await axios.post(
                "http://localhost:3001/adduser",
                addUser
            );
            console.log(response.data.message);
            setModal(false);
            location.reload("/management");
        } catch (err) {
            console.log(err.response);
        }
    };

    return (
        <div className="fixed z-10 bg-black bg-opacity-50 w-full h-full flex justify-center">
            <div className="bg-white flex justify-center items-center my-auto w-auto px-12 py-10 rounded-md">
                <div className="">
                    <h1 className="text-3xl font-bold mb-5">Add User</h1>
                    <div>
                        <form className="grid grid-cols-1 gap-5">
                            {/* FNAME */}
                            <label>
                                First Name
                                <input
                                    className={inputbox}
                                    type="text"
                                    name="fname"
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
                                    name="lname"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                />
                            </label>

                            {/* DOB */}
                            <label>
                                Date of Birth
                                <input
                                    className={inputbox}
                                    type="date"
                                    name="dob"
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
                                    maxLength="10"
                                    name="phone"
                                    placeholder="User Phone Number"
                                    onChange={handleChange}
                                />
                            </label>

                            {/* ADDRESS */}
                            <label>
                                Address
                                <textarea
                                    className={`${inputbox} resize-none`}
                                    type="text"
                                    rows="2"
                                    name="address"
                                    onChange={handleChange}
                                />
                            </label>

                            {/* EMAIL */}
                            <label>
                                Email
                                <input
                                    className={inputbox}
                                    type="email"
                                    name="email"
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
                                    name="password"
                                    placeholder="User Email"
                                    onChange={handleChange}
                                />
                            </label>

                            {/* IS ADMIN */}
                            <label className="flex flex-col gap-2">
                                Is Admin ?
                                <select className={inputbox} name="isAdmin" onChange={handleChange}>
                                    <option value={0}>No</option>
                                    <option value={1}>Yes</option>
                                </select>
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

export default AddUser;
