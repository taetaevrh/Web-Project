import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import { FaPlus } from "react-icons/fa6";
import AddProduct from "../components/AddProduct";
import AddUser from "../components/AddUser";
import EditProduct from "../components/EditProduct";
import EditUser from "../components/EditUser";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

const Management = () => {
    const getUserUrl = "http://localhost:3001/getusers";
    const getProductUrl = "http://localhost:3001/getproducts";
    const [activeTab, setActiveTab] = useState("Product");
    const [Modal, setModal] = useState(false);
    const [userData, setUserData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [activePID, setActivePID] = useState(null);

    const getUserData = async () => {
        try {
            const response = await axios.get(getUserUrl);
            const formattedUsers = response.data.result.map((user) => {
                // Format the Date of Birth (DoB) to MM/DD/YYYY for display
                if (user.DoB) {
                    user.DoB = new Date(user.DoB).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    });
                }
                return user;
            });
            setUserData(formattedUsers);
            console.log(response);
            console.log(response.data.message);
            console.log(response.data.result);
        } catch (error) {
            console.log(error.response);
        }
    };

    const getProductData = async () => {
        try {
            const response = await axios.get(getProductUrl);
            setProductData(response.data.result);
            console.log(response.data.message);
            console.log(response.data.result);
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        getUserData();
        getProductData();
    }, []);

    return (
        <>
            {editModal ? (
                activeTab === "Product" ? (
                    <EditProduct
                        activePID={activePID}
                        setEditModal={setEditModal}
                    />
                ) : (
                    <EditUser
                        activePID={activePID}
                        setEditModal={setEditModal}
                    />
                )
            ) : (
                ""
            )}
            {Modal ? (
                activeTab === "Product" ? (
                    <AddProduct setModal={setModal} />
                ) : (
                    <AddUser setModal={setModal} />
                )
            ) : (
                ""
            )}
            <div className="h-screen">
                <Navbar />
                <div className="flex justify-between py-5 px-20 border">
                    <Logo />
                    <div className="flex items-end">
                        <div className="relative flex gap-7 items-center mb-2">
                            {/* SLIDING BACKGROUND */}
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
                            <button
                                onClick={() => setModal(true)}
                                className="flex justify-center items-center text-4xl bg-gray-300 w-[50px] h-[50px] rounded-full hover:scale-110 transition-all hover:bg-orange-600 hover:text-white"
                            >
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 flex flex-grow mx-10 my-5 rounded-md p-3 overflow-x-scroll">
                    {activeTab === "Product" ? (
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-300">
                                    <th className="border border-gray-400 px-3">
                                        ID
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Product Name
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Description
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Price
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Spice Level
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Rating
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Image
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Edit
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {productData
                                    ? productData.map((item) => {
                                          return (
                                              <tr key={item.PID}>
                                                  <td className="px-2 text-center">
                                                      {item.PID}
                                                  </td>
                                                  <td className="px-2">
                                                      {item.Pname}
                                                  </td>
                                                  <td className="px-2">
                                                      {item.Desp}
                                                  </td>
                                                  <td className="px-2 py-2 text-center">
                                                      {item.Price}
                                                  </td>
                                                  <td className="px-2 py-2 text-center">
                                                      {item.Spice}
                                                  </td>
                                                  <td className="px-2 text-center">
                                                      {item.Star}
                                                  </td>
                                                  <td className="px-2">
                                                      {item.Img}
                                                  </td>
                                                  <td className="py-3">
                                                      <div className="flex justify-center items-center">
                                                          <button
                                                              onClick={() => {
                                                                  setActivePID(
                                                                      item.PID
                                                                  );
                                                                  setEditModal(
                                                                      true
                                                                  );
                                                              }}
                                                          >
                                                              <TfiWrite />
                                                          </button>
                                                      </div>
                                                  </td>
                                              </tr>
                                          );
                                      })
                                    : ""}
                            </tbody>
                        </table>
                    ) : (
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-300">
                                    <th className="border border-gray-400 px-3">
                                        ID
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Firstname
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Lastname
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Date of Birth
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Phone
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Address
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Email
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Password
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        isAdmin
                                    </th>
                                    <th className="border border-gray-400 px-3">
                                        Edit
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData
                                    ? userData.map((item) => {
                                          return (
                                              <tr key={item.UID}>
                                                  <td className="px-2 text-center">
                                                      {item.UID}
                                                  </td>
                                                  <td className="px-2">
                                                      {item.Fname}
                                                  </td>
                                                  <td className="px-2">
                                                      {item.Lname}
                                                  </td>
                                                  <td className="px-2 py-2 text-center">
                                                      {item.DoB}
                                                  </td>
                                                  <td className="px-2">
                                                      {item.Phone}
                                                  </td>
                                                  <td className="px-2">
                                                      {item.Address}
                                                  </td>
                                                  <td className="px-2">
                                                      {item.Email}
                                                  </td>
                                                  <td className="px-2">
                                                      {item.Password}
                                                  </td>
                                                  <td className="px-2 py-3">
                                                      <div className="flex justify-center">
                                                          {item.isAdmin ===
                                                          1 ? (
                                                              <FaCheck className="text-green-600" />
                                                          ) : (
                                                              <FaXmark className="text-red-600 font-medium" />
                                                          )}
                                                      </div>
                                                  </td>
                                                  <td className="py-3">
                                                      <div className="flex justify-center items-center">
                                                          <button
                                                              onClick={() => {
                                                                  setActivePID(
                                                                      item.UID
                                                                  );
                                                                  setEditModal(
                                                                      true
                                                                  );
                                                              }}
                                                          >
                                                              <TfiWrite />
                                                          </button>
                                                      </div>
                                                  </td>
                                              </tr>
                                          );
                                      })
                                    : ""}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
};

export default Management;
