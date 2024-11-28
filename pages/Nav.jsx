"use client";
import Image from "next/image";
import hamburger from "@public/icons/hamburger.svg";
import { useState, useEffect, useRef } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { motion } from "framer-motion";
const Nav = () => {
    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [transform, setTransform] = useState(false);
        
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setTransform(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <motion.nav
    initial={{y:-100}}
    animate={{y:0}}
    transition={{duration:1,delay:1}}
    className='w-full h-14  bg-transparent ' id="nav" >
      <ul className='flex flex-row justify-center dark:text-white gap-24 pt-4 text-xl font-palanquin max-lg:gap-10 text-slate-600 max-lg:hidden items-center tracking-wide '>
        <li><button className="border-none p-2 " onClick={()=>{const element=document.getElementById("about-me");element.scrollIntoView({behavior:"smooth"})}}>About Me</button></li>
        <li><button className="border-none p-2 " onClick={()=>{const element=document.getElementById("education");element.scrollIntoView({behavior:"smooth"})}}>Education</button></li>
        <li><button className="border-none p-2 " onClick={()=>{const element=document.getElementById("skills");element.scrollIntoView({behavior:"smooth"})}} >Skills</button></li>
        <li><button className="border-none p-2 " onClick={()=>{const element=document.getElementById("projects");element.scrollIntoView({behavior:"smooth"})}}>Projects</button></li>
        <li><button className="border-none p-2 " onClick={()=>{const element=document.getElementById("achievements");element.scrollIntoView({behavior:"smooth"})}}>Achievements</button></li>
        
      </ul>
      <div className='lg:hidden flex flex-col mt-4 justify-end items-end'>
        <button onClick={() => {
          setIsOpen(!isOpen);
          setTransform(!transform);
        }} className="flex">
          <Image src={hamburger} className={`bg-gray-400  rounded-md ${transform ? 'scale-100 rotate-90 duration-500 ' : ' scale-100 -rotate-60 duration-500 '}`} width={40} height={40} alt="ham" />
        </button>
        <div ref={dropdownRef} className={`rounded-lg p-0 h-auto w-auto bg-white  border-2 transition-transform transform ${isOpen ? 'translate-y-[300px] opacity-100 duration-500' : '-translate-y-full duration-500'} absolute`}>
          <ul className='grid   items-center  w-full h-full '>
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
            <button className="border-none p-2 " onClick={()=>{const element=document.getElementById("about-me");element.scrollIntoView({behavior:"smooth"})}}>About Me</button>            </li>
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
            <button className="border-none p-2 " onClick={()=>{const element=document.getElementById("education");element.scrollIntoView({behavior:"smooth"})}}>Education</button>
            </li>
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
            <button className="border-none p-2 " onClick={()=>{const element=document.getElementById("skills");element.scrollIntoView({behavior:"smooth"})}} >Skills</button>            </li>
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
            <button className="border-none p-2 " onClick={()=>{const element=document.getElementById("projects");element.scrollIntoView({behavior:"smooth"})}}>Projects</button>            </li>
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
            <button className="border-none p-2 " onClick={()=>{const element=document.getElementById("achievements");element.scrollIntoView({behavior:"smooth"})}}>Achievements</button>            </li>
            
            
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
