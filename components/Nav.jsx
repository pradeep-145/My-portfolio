"use client"
import Image from "next/image";
import hamburger from "@public/icons/hamburger.svg";
import close from "@public/icons/close.svg";
import { useState,useEffect } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
const Nav = () => {
    const getSystemTheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'Dark';
        }
        return 'Light';
      };
    const [theme, setTheme] = useState('Light');
    const [isOpen, setIsOpen] = useState(false);
    const [transform, setTransform] = useState(false);
    useEffect(() => {
        setTheme(getSystemTheme());
      }, []);
    return (
        <nav className='w-full h-14 bg-transparent mt-3'>
            <ul className='flex flex-row justify-center gap-24 pt-4 text-xl font-palanquin text-slate-600 max-sm:hidden items-center tracking-wide '>
                <li><a href="/" >Home</a></li>
                <li><a href="/about" >About</a></li>
                <li><a href="/contact" >Contact</a></li>
                <li><button className="" onClick={()=>{setTheme((prev)=>{
                    if(prev==='Light'){
                        return 'Dark'
                    }else{
                        return 'Light'
                    }
                })}}>{theme==='Light'? <IoSunnySharp />: <FaRegMoon/>}</button></li>
            </ul>
            <div className='sm:hidden flex  flex-col justify-end items-end'>
                <button onClick={() => {setIsOpen(!isOpen)
                    setTransform(!transform)
                    
                }} className="flex ">
                    <Image src={hamburger} className={transform?'scale-100 rotate-90 duration-500 ':' scale-100 -rotate-60 duration-500 '} width={40} height={40} alt="ham"/></button>
                    

                    <div className={` rounded-lg p-0 h-52 bg-white  w-32 pb-3 border-2 transition-transform transform ${isOpen ? 'translate-y-52 opacity-100 duration-300' : '-translate-y-full duration-300'} absolute`}>
                    <ul className='flex flex-col justify-center items-center w-full h-full '>
                <li><a href="/" className="hover:bg-slate-300 w-full rounded-sm pl-7 pr-7 text-lg leading-5">Home</a></li>
                <li><a href="/about" className="hover:bg-slate-300 w-full rounded-sm pl-3 pr-3 text-lg leading-5">About</a></li>
                <li><a href="/contact" className="hover:bg-slate-300 w-full rounded-sm pl-3 pr-3 text-lg leading-5">Contact</a></li>
                <li><button className="" onClick={()=>{setTheme((prev)=>{
                    if(prev==='Light'){
                        return 'Dark'
                    }else{
                        return 'Light'
                    }
                })}}>{theme==='Light'? <IoSunnySharp />: <FaRegMoon/>}</button></li>
            </ul>
                    </div>
                
            </div>
        </nav>
    );
};

export default Nav;