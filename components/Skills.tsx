import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IconType } from 'react-icons';
import {
    FaHtml5,
    FaJava,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaMicrosoft,
    FaAndroid,
    FaDotCircle,
    FaReact,
    FaNodeJs,
    FaCoins
} from 'react-icons/fa';

const Skills: React.FC = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3500, min: 1600 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1600, min: 1200 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1200, min: 700 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
        },
    };

    const icons: { icon: IconType; label: string }[] = [
        { icon: FaHtml5, label: 'HTML' },
        { icon: FaCoins , label: 'Blockchain' },
        { icon: FaReact, label: "React"},
        { icon: FaNodeJs, label: "Node.js"},
        { icon: FaCss3Alt, label: 'CSS' },
        { icon: FaJs, label: 'JavaScript' },
        { icon: FaBootstrap, label: 'Bootstrap' },
    ];

    return (
        <section className="py-20 relative" id="skills">
            <div className="container mx-auto h-full p-8">
                <div className="mb-12 text-center">
                    <h1 className="section-title text-5xl md:text-[50px] font-bold text-[#55e6a5]">Skills</h1>
                </div>
                <div className="skill-bx bg-gray-800 text-white rounded-xl p-10 h-full">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        className="skill-slider"
                        itemClass="p-8"
                        showDots={true}
                        autoPlay = {true}
                        autoPlaySpeed={2000}
                    >
                        {icons.map((item, index) => (
                            <div key={index} className="item flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
                                <div className="rounded-2xl overflow-hidden border-2 border-yellow-400 h-32 w-32 md:h-40 md:w-40 flex items-center justify-center">
                                    <item.icon className="text-5xl text-yellow-400" />
                                </div>
                                <h5 className="mt-3 text-xl font-semibold">{item.label}</h5>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Skills;
