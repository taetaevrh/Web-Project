import React from "react";
import Navbar from "../components/Navbar";
import {
    FaSquareFacebook,
    FaSquareInstagram,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
    return (
        <div className="flex flex-col h-screen">
            
            <Navbar />

            <div className="relative">
                <img
                    style={{ height: 250 }}
                    className="w-full object-cover blur-sm"
                    src="https://static.vecteezy.com/system/resources/thumbnails/021/736/703/small_2x/doodle-lines-arrows-circles-and-curves-hand-drawn-design-elements-isolated-on-white-background-for-infographic-illustration-vector.jpg"
                    alt="contact-background"
                />
                <p className="absolute top-0 w-full h-full flex justify-center items-center">
                    <span className="px-10 py-4 bg-gray-600 rounded-xl text-white font-bold text-5xl">
                        Contact
                    </span>
                </p>
            </div>
            {/* CONTAINER */}
            <div className="flex-grow my-10 container mx-auto flex items-center justify-center">
                {/* CARDS */}
                <div className="grid xl:grid-cols-2 gap-10 place-items-center">
                    {/* YEEN CARD */}
                    <div className="bg-red-100 w-[600px] p-2 rounded-lg flex gap-3">
                        {/* PIC */}
                        <div className="p-1.5 bg-orange-600 w-max rounded-full mx-3">
                            <img
                                className="w-[150px] h-[150px] object-cover rounded-full"
                                src="https://github.com/taetaevrh/Web-Project/blob/main/img/IMG_3895.png?raw=true"
                                alt="yeen-pic"
                            />
                        </div>
                        {/* NAME */}
                        <div>
                            <h1 className="font-bold text-xl mt-6">
                                Panaiyakorn Phanyaichada
                            </h1>
                            {/* ICON */}
                            <div className="flex gap-2 ml-2 mt-3">
                                <FaSquareFacebook className="text-4xl text-blue-600" />
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient
                                            id="instagramGradient"
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="100%"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="#f58529"
                                            />
                                            <stop
                                                offset="50%"
                                                stopColor="#dd2a7b"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#8134af"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <FaSquareInstagram
                                        className="text-4xl"
                                        style={{
                                            fill: "url(#instagramGradient)",
                                        }}
                                    />
                                </svg>
                                <IoIosMail className="text-4xl"/>
                                <i className="text-4xl fa-solid fa-square-envelope" />
                                <i className="text-4xl text-blue-400 fa-brands fa-vk" />
                            </div>
                        </div>
                    </div>
                    {/* JA CARD */}
                    <div className="bg-red-100 w-[600px] p-2 rounded-lg flex gap-3">
                        {/* PIC */}
                        <div className="p-1.5 bg-orange-600 w-max rounded-full mx-3">
                            <img
                                className="w-[150px] h-[150px] object-cover rounded-full"
                                src="https://github.com/taetaevrh/Web-Project/blob/main/img/IMG_3909.png?raw=true"
                                alt="ja-pic"
                            />
                        </div>
                        {/* NAME */}
                        <div>
                            <h1 className="font-bold text-xl mt-6">
                                Putinan Tachawataporn
                            </h1>
                            {/* ICON */}
                            <div className="flex gap-2 ml-2 mt-2">
                                <FaSquareFacebook className="text-4xl text-blue-600" />
                                <i className="text-4xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent fa-brands fa-square-instagram" />
                                <i className="text-4xl fa-solid fa-square-envelope" />
                            </div>
                        </div>
                    </div>
                    {/* TAETAE CARD */}
                    <div className="bg-red-100 w-[600px] p-2 rounded-lg flex gap-3">
                        {/* PIC */}
                        <div className="p-1.5 bg-orange-600 w-max rounded-full mx-3">
                            <img
                                className="w-[150px] h-[150px] object-cover rounded-full"
                                src="https://github.com/taetaevrh/Web-Project/blob/main/img/taetae.jpg?raw=true"
                                alt="taetae-pic"
                            />
                        </div>
                        {/* NAME */}
                        <div>
                            <h1 className="font-bold text-xl mt-6">
                                Varich Maleevan
                            </h1>
                            {/* ICON */}
                            <div className="flex gap-2 ml-2 mt-2">
                                <FaSquareFacebook className="text-4xl text-blue-600" />
                                <i className="text-4xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent fa-brands fa-square-instagram" />
                                <i className="text-4xl fa-solid fa-square-envelope" />
                            </div>
                        </div>
                    </div>
                    {/* IM CARD */}
                    <div className="bg-red-100 w-[600px] p-2 rounded-lg flex gap-3">
                        {/* PIC */}
                        <div className="p-1.5 bg-orange-600 w-max rounded-full mx-3">
                            <img
                                className="w-[150px] h-[150px] object-cover rounded-full"
                                src="https://github.com/taetaevrh/Web-Project/blob/main/img/keekie.jpg?raw=true"
                                alt="im-pic"
                            />
                        </div>
                        {/* NAME */}
                        <div>
                            <h1 className="font-bold text-xl mt-6">
                                Siriprapas Kimpee
                            </h1>
                            {/* ICON */}
                            <div className="flex gap-2 ml-2 mt-2">
                                <FaSquareFacebook className="text-4xl text-blue-600" />
                                <i className="text-4xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent fa-brands fa-square-instagram" />
                                <i className="text-4xl fa-solid fa-square-envelope" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="px-5 w-full flex items-center bg-gray-300 py-6 gap-7 bottom-0">
                <h5 className="font-bold">FOLLOW US ON</h5>
                <ul className="flex gap-2">
                    <li>
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>
                    <li>
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Contact;
