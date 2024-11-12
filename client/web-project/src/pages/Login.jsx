import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
    return (
        <div className="flex flex-col h-screen">
            
            <Navbar />

            <div className="flex flex-col flex-grow items-center mt-10">
                <div className="flex items-center gap-5 mb-2">
                    <img
                        className="w-[50px]"
                        src="https://github.com/taetaevrh/Web-Project/blob/main/img/sasuke-home.png?raw=true"
                        alt="Sasuke-Pic"
                    />
                    <h1 className="logo-text text-7xl font-bold mt-5">
                        Sasuke Ramen
                    </h1>
                </div>
                <div className="border bg-red-100 p-10 rounded-xl w-[500px]">
                    <h3 className="flex text-3xl font-bold mb-9 justify-center">
                        Administrator Login
                    </h3>
                    <form action="" method="POST">
                        {/* EMAIL */}
                        <section className="mb-5">
                            <label className="text-lg" htmlFor="txtemail">
                                Email Address
                            </label>
                            <br />
                            <input
                                className="border w-full px-5 py-3 rounded-md mt-2 placeholder:text-sm"
                                type="email"
                                name="txtemail"
                                placeholder="You email here..."
                            />
                        </section>
                        {/* PASSWORD */}
                        <section>
                            <label className="text-lg" htmlFor="txtpass">
                                Password
                            </label>
                            <br />
                            <input
                                className="border w-full px-5 py-3 rounded-md mt-2 placeholder:text-sm"
                                type="password"
                                name="txtpass"
                                placeholder="Your password here..."
                            />
                        </section>
                        {/* FORGOT PASSWORD? */}
                        <section className="mt-1">
                            <a href="" className="text-sm text-gray-500">
                                Forgot Password?
                            </a>
                        </section>
                        {/* REMEMBER ME */}
                        <section className="flex mt-5 items-center gap-2">
                            <input
                                className="w-[18px] h-[18px]"
                                type="checkbox"
                                name="rememberme"
                            />
                            <label htmlFor="rememberme">Remember me</label>
                        </section>
                        {/* LOGIN BUTTON */}
                        <button className="flex text-white text-lg font-medium w-full bg-orange-500 justify-center items-center py-3 mt-3 rounded-md">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
