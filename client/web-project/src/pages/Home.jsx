import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <header className="w-full flex items-center justify-center bg-gray-300 py-3 gap-5">
                <img
                    src="https://github.com/taetaevrh/Web-Project/blob/main/img/sasuke-home.png?raw=true"
                    alt="Sasuke-Pic"
                    width="50px"
                />
                <h1 className="logo-text text-5xl font-bold mt-6">
                    Sasuke Ramen
                </h1>
            </header>

            <Navbar />

            <div className="mx-20 my-10">
                <img
                    src="https://www.hachiban.co.th/_files/images/full/SQA1MUHX.jpg"
                    alt={1}
                />
                <br />
                <img
                    src="https://www.hachiban.co.th/_files/images/full/DDJ5W1PE.jpg"
                    alt={2}
                />
                <br />
                <img
                    src="https://www.hachiban.co.th/_files/images/full/XNOUMYVE.jpg"
                    alt={3}
                />
                <br />
                <img
                    src="https://www.hachiban.co.th/_files/images/full/SZLVQFXO.jpg"
                    alt={4}
                />
                <br />
                <img
                    src="https://www.hachiban.co.th/_files/images/full/KMW35JO4.jpg"
                    alt={5}
                />
                <br />
                <img
                    src="https://www.hachiban.co.th/_files/images/full/DK91UJ31.jpg"
                    alt={6}
                />
                <br />
            </div>
            <footer className="px-5 w-full flex items-center bg-gray-300 py-6 gap-7">
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
        </>
    );
};

export default Home;
