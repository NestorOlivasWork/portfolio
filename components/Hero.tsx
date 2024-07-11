import React from "react";
import Particle from "./Particle";
import Image from "next/image";
import TextEffect from "@/components/TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

const Hero = () => {
    return (
        <section className="py-20 relative " id="hero" >
            <div className="h-[88vh] relative bg-cover bg-center">
                <Particle />
                <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center relative z-10">
                    <div>
                        <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                            <span className="text-white">My name is Nestor Olivas</span>
                            <br />
                            <TextEffect />
                        </h1>
                        <p className="mt-[1.5rem] text-[18px] text-white leading-relaxed ">
                            Hello! 👋 I{"'"}m deeply immersed in the worlds of Solana blockchain and full-stack web development. 
                            With hands-on experience in building scalable apps and diving into the decentralized universe, 
                            I bring a blend of tech savvy and creativity to the table. Whether it{"'"}s crafting sleek interfaces or diving into smart contracts, 
                            I thrive on solving challenges and turning ideas into reality. Beyond coding, 
                            I{"'"}m passionate about exploring new tech horizons and collaborating with like-minded innovators. 
                            Let{"'"}s connect and chat about how we can harness Solana{"'"}s potential and web magic together!
                        </p>
                        <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                            <a href="/WebDeveloper.pdf">
                            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                                
                                <p>My Resume</p>
                                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                            </button>
                            </a>
                        </div>
                    </div>
                    <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] overflow-hidden border-4 border-yellow-400">
                        <Image src="/images/arvatar.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
