import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const MenuCard = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${props.id}`, { state: props });
    };

    return (
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={handleClick}>
            <img
                src={props.Img}
                alt={props.Pname}
                className="w-full h-48 object-cover"
            />
            <div className="p-5">
                <h3 className="sriracha text-xl mb-2 text-center">
                    {props.Pname}
                </h3>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500 flex items-center">
                        {Array(props.Star)
                            .fill(0)
                            .map((_, index) => (
                                <FaStar key={index} />
                            ))}
                    </span>
                </div>
                <p className="mb-2">Price: ฿{props.Price}</p>
                <div className="flex items-center">
                    <span className="flex items-center text-red-500">
                        {Array(props.Spice)
                            .fill(0)
                            .map((_, index) => (
                                <GiChiliPepper key={index} />
                            ))}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
