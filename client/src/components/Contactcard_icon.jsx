import React from "react";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import propTypes from "prop-types";

const Contactcard_icon = (props) => {
    return (
        <>
            {/* FACEBOOK ICON */}
            <a href={props.flink} target="_blank">
                <FaSquareFacebook className="text-4xl text-blue-600" />
            </a>

            {/* INSTAGRAM ICON */}
            <a href={props.ilink} target="_blank">
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
                            <stop offset="0%" stopColor="#f58529" />
                            <stop offset="50%" stopColor="#dd2a7b" />
                            <stop offset="100%" stopColor="#8134af" />
                        </linearGradient>
                    </defs>
                    <FaSquareInstagram
                        className="text-4xl"
                        style={{
                            fill: "url(#instagramGradient)",
                        }}
                    />
                </svg>
            </a>

            {/* MAIL ICON */}
            <a href={props.mlink} target="_blank">
                <IoIosMail className="text-4xl" />
            </a>
        </>
    );
};

Contactcard_icon.propTypes = {
    flink: propTypes.string,
    ilink: propTypes.string,
    mlink: propTypes.string,
}

export default Contactcard_icon;