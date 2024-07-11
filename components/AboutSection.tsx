import React, { useState, useTransition } from "react";
import { useSpring, animated } from 'react-spring';
import {
    FaLaptopCode,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaDatabase,
    FaServer,
    FaCodeBranch,
    FaMobileAlt,
    FaCode,
    FaPython,
    FaAngular,
    FaVuejs,
    FaBootstrap,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaPhp,
    FaSwift,
    FaWordpress,
    FaWindows,
    FaLinux,
    FaApple,
    FaAndroid,
    FaChrome,
    FaFirefox,
    FaSafari,
    FaNode,
} from 'react-icons/fa';
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc ml-5 text-lg text-white">
                <li className="mb-2">2014 ~ 2018 | Northeastern Ilinois University</li>
                <li className="mb-2">Bachelor&#39;s degree in Computer Science, Software Engineering (September 2017)</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc ml-5 text-lg text-white">
                <li className="mb-2">Junior Fullstack Developer | Freelancer (May 2018 - Sep 2018)</li>
                <li className="mb-2">Senior Software Engineer | Rescode (Nov 2018 - Present)</li>
            </ul>
        )
    },
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className="list-disc ml-5 text-lg text-white">
                <li className="mb-2">English</li>
                <li className="mb-2">Dutch</li>

            </ul>
        )
    },
    {
        title: "Hobbies",
        id: "hobbies",
        content: (
            <ul className="list-disc ml-5 text-lg text-white">
                <li className="mb-2">Football</li>
                <li className="mb-2">Fitness</li>
            </ul>
        )
    },
];

const iconList = [
    FaLaptopCode,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaDatabase,
    FaServer,
    FaCodeBranch,
    FaMobileAlt,
    FaCode,
    FaPython,
    FaAngular,
    FaVuejs,
    FaBootstrap,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaPhp,
    FaSwift,
    FaWordpress,
    FaWindows,
    FaLinux,
    FaAndroid,
    FaChrome,
    FaFirefox,
    FaSafari,
    FaNode,
];

const AboutSection: React.FC = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const springProps = useSpring({
        from: { opacity: 0, transform: 'scale(0.5)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 1000 },
        reset: true,
    });

    return (
        <section id="about" className="about-section relative bg-cover bg-center py-20">
            <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-start relative z-10">
                <div className="w-full h-full flex justify-center items-center">
                    <animated.div style={springProps} className="icon-container">
                        {iconList.map((Icon, index) => (
                            <Icon key={index} className="icon-item text-white animate-bounce" style={{ animationDelay: `${index * 0.1}s` }} />
                        ))}
                    </animated.div>
                </div>
                <div className="text-left flex flex-col h-full">
                    <h1 className="section-title text-5xl md:text-[50px] text-[#55e6a5] font-bold text-center lg:text-left">
                        About Me
                    </h1>
                    <p className="mt-[1.5rem] text-[18px] text-white leading-relaxed">
                        I{"'"}m Nestor Olivs, a passionate full-stack and blockchain developer, with a strong background in Chikago. 
                        With 9+ years of experience in web developing , I thrive on <b>Website Design</b> and <b>Backend engineering</b>.
                        I hold Bachelor of Computer Science from Northeastern Illinois University.
                        I am also skilled in <b>Blockchain Developmet.</b>
                        I have honed my web developing and blockchain skills through hands-on experience in several web sites. 
                        My journey has equipped me with expertise in full-stack and blockchain technology.
                    </p>
                    <p className="mt-[1.5rem] text-[18px] text-white leading-relaxed">
                        My ambition is to excel in the programming world, creating innovative solutions that can make a difference.
                         I am passionate about solving complex problems and constantly improving my skills to stay at the forefront of technology. 
                         Alongside my developing pursuits, I enjoy sports like football and fitness, which help me maintain a balanced lifestyle and a healthy mind. I am excited about the future and the endless possibilities that come with a career in programming.
                        Let{"'"}s connect and explore how we can collaborate to achieve more successes. 
                        <b>Thank you</b> for visiting my portfolio!
                    </p>
                   <div className="flex flex-col mt-8 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                        <TabButton selectTab={() => handleTabChange("languages")} active={tab === "languages"}>Languages</TabButton>
                        <TabButton selectTab={() => handleTabChange("hobbies")} active={tab === "hobbies"}>Hobbies</TabButton>
                    </div>
                    <div className="mt-8 text-white">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
