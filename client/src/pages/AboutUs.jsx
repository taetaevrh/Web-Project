import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
    return (
        <div className="flex flex-col h-screen">

            <Navbar />

            <div className="relative flex-grow bg-gradient-to-r from-neutral-800 via-zinc-950 to-black">
                <h1 className="text-white font-bold text-6xl flex justify-center mt-[80px]">
                    About Us
                </h1>
                <img
                    className="absolute w-1/3 object-cover -left-[250px] top-1/4 drop-shadow-5xl"
                    src="../../public/img/vecteezy_ai-generated-plate-of-ramen-isolated-on-transparent-background_36083981.png"
                    alt="ramen-pic"
                />
                {/* HISTORY */}
                <div className="absolute right-0 flex justify-end top-1/3 w-[50%]">
                    <div className="text-white mr-5">
                        <h1 className="flex justify-end font-bold text-5xl mb-7">
                            History
                        </h1>
                        <p className="thai-text text-balance text-right text-lg">
                            Sasuke Ramen
                            คือร้านอาหารที่เริ่มต้นจากร้านราเมงขนาดเล็กในชุมชน
                            โดยมีจุดเด่นที่น้ำซุปสูตรพิเศษหลากหลายสูตร
                            และเส้นราเมงที่เหนียวนุ่ม
                            ทำให้ร้านได้รับความนิยมอย่างรวดเร็ว
                            ด้วยการเติบโตของธุรกิจและความต้องการในการเพิ่มความสะดวกให้กับลูกค้า
                            ร้านจึงได้พัฒนาเว็บไซต์ "Sasuke Ramen"
                            เพื่อแสดงเมนูอาหารของร้านค้า
                            ลูกค้าสามารถเลือกชมเมนูราเมงต่าง ๆ
                            ของทางร้านได้อย่างง่ายดาย
                            โดยเว็บไซต์ถูกออกแบบมาเพื่อให้ลูกค้าสามารถเข้าถึงเมนูที่ต้องการได้อย่างรวดเร็ว
                            ในด้านการค้นหาสินค้า
                            และทำให้ลูกค้าสามารถเลือกชมราเมงที่ชื่นชอบได้สะดวกจากทุกที่
                            รองรับการขยายตัวของธุรกิจในยุคดิจิทัลที่ต้องการความรวดเร็ว
                            และความสะดวกสบายในการใช้งาน
                        </p>
                    </div>
                    <img
                        className="w-[300px] h-[300px]"
                        src="../../public/img/ramen-aboutus-right.png"
                        alt="ramen-pic"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
