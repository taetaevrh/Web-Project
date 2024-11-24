import React from "react";

const Header = () => {
    return (
        <>
            <div className="gap-5 flex items-center justify-center py-2">
                <img src="img/sasuke-home.png" alt="Sasuke-Pic" width="50px" />
                <h1 className="logo-text text-6xl font-bold mt-6">
                    Sasuke Ramen
                </h1>
            </div>
        </>
    );
};

export default Header;