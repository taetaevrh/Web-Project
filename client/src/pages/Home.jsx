import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

const Home = () => {
    return (
        <>
            <header className="w-full flex items-center justify-center bg-gray-300 gap-5">
                <Logo />
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
            <Footer />
        </>
    );
};

export default Home;
