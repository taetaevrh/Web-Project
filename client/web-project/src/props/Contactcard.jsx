import React from "react";
import Contactcard_icon from "./Contactcard_icon";
import propTypes from "prop-types";

const Contactcard = (props) => {
    return (
        <>
            <div className="bg-red-100 w-[600px] p-2 rounded-lg flex gap-3">
                {/* PIC */}
                <div className="p-1.5 bg-orange-600 w-max rounded-full mx-3">
                    <img
                        className="w-[150px] h-[150px] object-cover rounded-full"
                        src={props.img}
                        alt={props.img_alt}
                    />
                </div>
                {/* NAME */}
                <div>
                    <h1 className="font-bold text-xl mt-6">{props.name}</h1>
                    {/* ICON */}
                    <div className="flex gap-2 ml-2 mt-3">
                        <Contactcard_icon
                            flink={props.flink}
                            ilink={props.ilink}
                            mlink={props.mlink}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

Contactcard.propTypes = {
    img: propTypes.string,
    img_alt: propTypes.string,
    name: propTypes.string,
    flink: propTypes.string,
    ilink: propTypes.string,
    mlink: propTypes.string,
}

export default Contactcard;
