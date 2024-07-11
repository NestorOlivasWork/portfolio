import React from "react";
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="py-2 bg-blue-500 relative rounded-2xl shadow-2xl">
            <div className="grid border-b border-gray-400 pb-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-4/5 mx-auto gap-6">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-20 h-20 md:w-26 md:h-26 flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <MapPinIcon className="w-14 h-14 md:w-16 md:h-16 text-black" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-1 font-semibold text-white">
                            Address
                        </h1>
                        <p className="text-base md:text-lg w-11/12 text-white opacity-60">
                            119 West 119th Street, Chicago, IL, United States
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-20 h-20 md:w-26 md:h-26 flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <DevicePhoneMobileIcon className="w-14 h-14 md:w-16 md:h-16 text-black" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-1 font-semibold text-white">
                            Phone
                        </h1>
                        <p className="text-base md:text-lg w-11/12 text-white opacity-60">
                            +15183047427
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-20 h-20 md:w-26 md:h-26 flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <EnvelopeIcon className="w-14 h-14 md:w-16 md:h-16 text-black" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-1 font-semibold text-white">
                            Email
                        </h1>
                        <p className="text-base md:text-lg w-11/12 text-white opacity-60">
                        nestorolivas.workup@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-4/5 mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
                <div className="text-lg mb-4 md:mb-0 text-white">
                    2024 | All Rights Reserved
                </div>
                <div className="flex justify-center md:justify-end space-x-6">
                    <a href="https://github.com/NestorOlivasWork" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-2xl hover:text-gray-400  duration-200" />
                    </a>
                    <a href="https://t.me/Galactic_Nestor" target="_blank" rel="noopener noreferrer">
                        <FaTelegram className="text-white text-2xl hover:text-gray-400 transition-colors duration-200" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
