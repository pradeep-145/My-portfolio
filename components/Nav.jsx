"use client";
import Image from "next/image";
import hamburger from "@public/icons/hamburger.svg";
import { useState, useEffect, useRef } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

const Nav = ({ onThemeChange }) => {
  const getSystemTheme = () => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'Dark';
        }
        return 'Light';
    };
    
    const [theme, setTheme] = useState();
    useEffect(() => {
        setTheme(getSystemTheme());
    }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [transform, setTransform] = useState(false);
  const dropdownRef = useRef(null);

  const handleThemeChange = () => {
      setTheme((prev) => {
          const newTheme = prev === 'Light' ? 'Dark' : 'Light';
          onThemeChange(newTheme);
          return newTheme;
        });
    };
    useEffect(() => {
        if(theme==='Dark'){
            document.body.classList.add('dark')
        }
        else{
            document.body.classList.remove('dark')
        }
    }, [theme]);
    
        
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
    <nav className='w-full h-14 bg-transparent mt-3'>
      <ul className='flex flex-row justify-center dark:text-white gap-24 pt-4 text-xl font-palanquin text-slate-600 max-sm:hidden items-center tracking-wide '>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li>
          <button className="" onClick={handleThemeChange}>
            {theme === 'Light' ? <IoSunnySharp /> : <FaRegMoon />}
          </button>
        </li>
      </ul>
      <div className='sm:hidden flex flex-col justify-end items-end'>
        <button onClick={() => {
          setIsOpen(!isOpen);
          setTransform(!transform);
        }} className="flex">
          <Image src={hamburger} className={`bg-gray-400 rounded-md ${transform ? 'scale-100 rotate-90 duration-500 ' : ' scale-100 -rotate-60 duration-500 '}`} width={40} height={40} alt="ham" />
        </button>
        <div ref={dropdownRef} className={`rounded-lg p-0 h-[257px]  bg-white w-32 pb-3 border-2 transition-transform transform ${isOpen ? 'translate-y-[263px] opacity-100 duration-500' : '-translate-y-full duration-500'} absolute`}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full h-full '>
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
            <a href="#about-me">About Me</a>            </li>
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
            <a href="#education">Education</a>
            </li>
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
            <a href="#skills">Skills</a>            </li>
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
            <a href="#projects">Projects</a>            </li>
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
            <a href="#achievements">Achievements</a>            </li>
            
            <li className="hover:bg-slate-300 w-full flex justify-center border-b-2 items-center pt-3 m-0 rounded-sm pl-3 pr-3 text-lg leading-5">
              <button className="flex flex-row" onClick={handleThemeChange}>
                {theme === 'Light' ? <IoSunnySharp /> : <FaRegMoon />}
                {theme}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
