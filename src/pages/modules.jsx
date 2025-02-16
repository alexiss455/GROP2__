import React from "react";
import { Container } from "../components/container";
import empo from "../assets/empo_tect.jpg";
import empo2 from "../assets/online-web-design.jpg";

export const Modules = () => {
    return (
        <Container>
            <div className=" w-[40rem] max-md:w-full max-md:p-8 flex flex-row gap-6 relative max-md:flex-col ">

                <div className="absolute p-4 bg-white -top-[5rem] left-1/2 transform -translate-x-1/2 w-auto text-center shadow-md rounded-lg text-3xl font-bold">
                    Grade 11 Modules
                </div>


                <div className="w-full flex items-center justify-center">
                    <div
                        className="w-[15rem] h-[15rem] rounded-full border-4 border-gray-300 shadow-lg bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: `url(${empo})` }}
                    >
                        <div className="bg-white bg-opacity-70 text-black px-4 py-2 rounded-lg shadow-md">
                            <div className="text-2xl font-bold">
                                EMPO TECH
                            </div>
                        </div>
                    </div>

                </div>


                <div className="w-full flex items-center justify-center">
                    <div
                        className="w-[15rem] h-[15rem] rounded-full border-4 border-gray-300 shadow-lg bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: `url(${empo2})` }}
                    >
                        <div className="bg-white bg-opacity-70 text-black px-4 py-2 rounded-lg shadow-md">
                            <div className="text-2xl font-bold">
                                CSS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
