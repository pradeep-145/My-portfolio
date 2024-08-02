"use client"

import { IoLogoGithub } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaInstagramSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import profile from '@public/images/profile.png'
import Image from "next/image";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Intoduction = () => {
    const router=useRouter()
    const phoneNumber = '919385352051';
    const message = 'Hello, I am Pradeep Sakthi S';


    
  return (
    <section className="p-1 flex flex-1 md:flex-row  max-md:flex-col gap-44 justify-center">
      <div className="flex flex-col flex-1 justify-center items-center">
        <h1 className="max-md:text-4xl  max-sm:text-3xl leading-9 max-lg:text-4xl text-4xl flex flex-row font-bold text-slate-600">Hi, I'm Pradeep Sakthi</h1>
        <p className="text-lg flex flex-row  leading-10 text-slate-600">I am a full stack developer</p>
        <div className="gap-8 flex flex-row" >
            <button className="" onClick={()=>{
                window.open('https://github.com/pradeep-145')
            }}> <IoLogoGithub size={30}/> </button>
            <button className="" onClick={()=>{
                window.open('https://www.instagram.com/pradeepsakthi_20_2004?igsh=c3ZoMHB5NTAzeGZh')
            }}> <FaInstagramSquare size={30}/> </button>
            <button className="" onClick={()=>{
                window.open('mailto:spradeepsakthi2004@gmail.com')
            }}> <CgMail size={30}/> </button>
            <button className="" onClick={()=>{
                window.open('https://www.linkedin.com/in/pradeep-sakthi-sridharan-2364ba256/')
            }}> <FaLinkedin size={30}/> </button>
            <button className="" onClick={()=>{
                window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`)
            }}> <FaWhatsappSquare size={30}/> </button>
           
        </div>
      </div>
      <div className="flex flex-1">
        <Image src={profile} alt="Profile Picture" width={550} height={650} className=" rounded-md hover:scale-[1.01] duration-500 "></Image>
      </div>
    </section>
  )
}

export default Intoduction