import React from "react";
import Navbar from "../components/Navbar";

const Aboutus = () => {
    return (
        <div className="flex flex-col h-screen">

            <Navbar />

            <div className="relative flex-grow bg-gradient-to-r from-neutral-800 via-zinc-950 to-black">
                <h1 className="text-white font-bold text-6xl flex justify-center mt-[80px]">
                    About Us
                </h1>
                <img
                    className="absolute w-[800px] h-[800px] object-cover -left-[350px] top-[100px] drop-shadow-5xl"
                    src="https://github.com/taetaevrh/Web-Project/blob/main/img/vecteezy_ai-generated-plate-of-ramen-isolated-on-transparent-background_36083981.png?raw=true"
                    alt="ramen-pic"
                />
                {/* HISTORY */}
                <div className="absolute right-0 flex justify-end top-[350px] w-[50%]">
                    <div className="text-white mr-5">
                        <h1 className="flex justify-end font-bold text-5xl mb-7">
                            History
                        </h1>
                        <p className="text-balance text-right text-lg">
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
                        src="https://github.com/taetaevrh/Web-Project/blob/main/img/ramen-aboutus-right.png?raw=true"
                        alt="ramen2-pic"
                    />
                </div>
            </div>
            <footer className="px-5 w-full flex items-center bg-gray-300 py-6 gap-7 fixed bottom-0">
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

export default Aboutus;
