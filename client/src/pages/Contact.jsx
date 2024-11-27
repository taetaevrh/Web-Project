import React from "react";
import Contactcard from "../components/Contactcard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
                    <span className="sriracha px-10 py-4 bg-gray-600 rounded-xl text-white font-bold text-5xl">
                        Contact
                    </span>
                </p>
            </div>
            {/* CONTAINER */}
            <div className="flex-grow my-10 container mx-auto flex items-center justify-center">
                {/* CARDS */}
                <div className="grid xl:grid-cols-2 gap-10 place-items-center">
                    {/* YEEN CARD */}
                    <Contactcard
                        name="Panaiyakorn Phanyaichada"
                        sid="6687027"
                        img="/img/IMG_3895.png"
                        img_alt="yeen-pic"
                        flink="https://www.facebook.com/yeen.panaiyakorn"
                        ilink="https://www.instagram.com/yeenzx/"
                        mlink="https://mail.google.com/mail/?view=cm&to=panaiyakorn.pha@student.mahidol.edu"
                        olink="none"
                        vlink="none"
                    />
                    {/* JA CARD */}
                    <Contactcard
                        name="Putinan Techavataporn"
                        sid="6687038"
                        img="/img/IMG_3909.png"
                        img_alt="ja-pic"
                        flink="https://www.facebook.com/profile.php?id=100011714463537"
                        ilink="https://www.instagram.com/putinan.ig/"
                        mlink="https://mail.google.com/mail/?view=cm&to=putinan.tec@student.mahidol.edu"
                    />

                    {/* TAETAE CARD */}
                    <Contactcard
                        name="Varich Maleevan"
                        sid="6687097"
                        img="/img/taetae.jpg"
                        img_alt="taetae-pic"
                        flink="https://www.facebook.com/taetae2004"
                        ilink="https://www.instagram.com/taetae.vrh/"
                        mlink="https://mail.google.com/mail/?view=cm&to=varich.mal@student.mahidol.edu"
                    />

                    {/* IM CARD */}
                    <Contactcard
                        name="Siriprapas Kimpee"
                        sid="6687098"
                        img="/img/im.png"
                        img_alt="im-pic"
                        flink="https://www.facebook.com/siriprapas.kimpee"
                        ilink="https://www.instagram.com/iimmyyy__/"
                        mlink="https://mail.google.com/mail/?view=cm&to=siriprapas.kim@student.mahidol.edu"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
