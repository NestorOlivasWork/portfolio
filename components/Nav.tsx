import { Bars3Icon } from '@heroicons/react/16/solid';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-scroll';
import { Image } from 'react-bootstrap';


interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    return (
        <div className="w-full h-16 flex items-center justify-between px-4 z-[1000] fixed top-0 left-0 bg-blue-500 shadow-2xl rounded-2xl" >
            <Link to = 'hero' smooth = {true} duration={500} spy = {true} offset={-70} className='cursor-pointer'>
                
                <button className="text-white text-lg text-[50px] font-bold">
                    Nestor
                    <span className='text-yellow-300'> Olivas</span>
                </button>
                
            </Link>
            <div className="flex space-x-4 items-center">
                <button><Link to="about" smooth={true} duration={500} spy={true} offset={-70} className='nav-link text-white cursor-pointer'>ABOUT ME</Link></button>
                <span >|</span>
                <button><Link to="skills" smooth={true} duration={500} spy={true} offset={-70} className='nav-link text-white cursor-pointer'>TECH SKILLS</Link></button>
                <span >|</span>
                <button><Link to="projects" smooth={true} duration={500} spy={true} offset={-70} className='nav-link text-white cursor-pointer'>PROJECTS</Link></button>
                
                {/* <a href="https://www.linkedin.com/in/houssam-aberzak-8144411a1/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 text-white hover:text-yellow-300" />
                </a>
                <a href="https://github.com/Houssam-AZ" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 text-white hover:text-yellow-300" />
                </a>
                <div onClick={openNav} className=" cursor-pointer">
                    <Bars3Icon className="w-6 h-6 text-yellow-300" />
                </div> */}
            </div>
        </div>
    );
};

export default Nav;
