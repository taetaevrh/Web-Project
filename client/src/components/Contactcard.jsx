import React from "react";
import Contactcard_icon from "./Contactcard_icon";

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
                    <h3 className="font-medium text-lg ml-1">{props.sid}</h3>
                    {/* ICON */}
                    <div className="flex gap-2 ml-2 mt-1 items-center">
                        {props.name === "Panaiyakorn Phanyaichada" ? (
                            <Contactcard_icon
                                flink={props.flink}
                                ilink={props.ilink}
                                mlink={props.mlink}
                                olink={props.olink}
                                vlink={props.vlink}
                                tlink={props.tlink}
                            />
                        ) : (
                            <Contactcard_icon
                                flink={props.flink}
                                ilink={props.ilink}
                                mlink={props.mlink}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactcard;
