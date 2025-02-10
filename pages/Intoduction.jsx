"use client"

import { IoLogoGithub } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaInstagramSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import profile from '@public/images/profile.jpg'
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { motion } from "framer-motion";
const Intoduction = () => {
    const router=useRouter()
   
  

    
  return (
    <section className="p-1 flex flex-1 xl:flex-row  max-lg:flex-col gap-44 md:gap-20 ">
      
      < div 
      
      className="flex flex-col flex-1 justify-center items-center">
        < h1 
       
        
        className="max-md:text-4xl dark:text-neutral-300  max-sm:text-3xl leading-9 max-lg:text-4xl text-4xl flex flex-row font-bold text-slate-600">Hi, I'm Pradeep Sakthi</ h1>
        < p
        
        className="text-lg flex flex-row  leading-10 text-slate-600"></ p>
        <div
        
        className="gap-8 flex flex-row mt-4" >
            < button 
            
            className="text-white dark:rounded-full hover:scale-[1.1] duration-300" onClick={()=>{
                window.open('https://github.com/pradeep-145')
            }}> <IoLogoGithub size={30}/> </ button>
            < button 
           
            className="text-white dark:rounded-[4px] hover:scale-[1.1] duration-300" onClick={()=>{
                window.open('https://www.instagram.com/pradeepsakthi_20_2004?igsh=c3ZoMHB5NTAzeGZh')
            }}> <FaInstagramSquare size={30}/> </ button>
            < button 
            
             className="text-white dark:rounded-[4px] hover:scale-[1.1] duration-300" onClick={()=>{
                window.open('https://www.linkedin.com/in/pradeep-sakthi-sridharan-2364ba256/')
            }}> <FaLinkedin size={30}/> </ button>
        </div>
        <div>
          <button className="mt-9 btn  justify-center items-center p-3 bg-black text-white font-palanquin gap-3 font-semibold rounded-lg flex" onClick={()=>{const element = document.getElementById('contact');element.scrollIntoView({behavior:"smooth"});}}>Say Hello <BsTelegram size={30} />
          </button>
        </div> 
       




      </ div>
      <div className="flex flex-1 justify-center items-center">
        <Image src={profile} alt="Profile Picture" className=" md:w-72 rounded-md hover:scale-[1.01] sm:w-56 lg:w-96 w-44  duration-500 "></Image>
      </div>
    </section>
  )
}

export default Intoduction