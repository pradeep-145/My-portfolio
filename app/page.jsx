"use client"
import Image from "next/image";
import Introduction from "@components/Intoduction";
import AboutMe from "@components/AboutMe";
import Education from "@components/Education";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Achievements from "@components/Achievements";
import Contact from "@components/Contact";
import { useEffect,useState } from "react";
import { FaArrowUp } from "react-icons/fa6";


export default function Home() {

  const [gotToTop,setGoToTop] = useState(false);
  useEffect(()=>{
    const scrollHandler = () => {
      if(window.scrollY>100){
        setGoToTop(true)
      }
      else{
        setGoToTop(false)
      }
    }
    window.addEventListener('scroll',scrollHandler)
    return ()=> window.removeEventListener('scroll',scrollHandler)
  },[gotToTop])
  const handleGoToTop = () => {
    window.scrollTo({top:0,behavior:'smooth'})
  }

  return (
    <main className="flex flex-col ">
     { gotToTop && 
     <div className="fixed bottom-4 left-6 w-1/2 flex justify-end items-end h-screen text-white">
        <button onClick={handleGoToTop} className="bg-black block border-2 border-violet-900 p-2 hover:scale-105 duration-300 animate-[bounce_0.5s_infinite] rounded-full"><FaArrowUp /></button>
        
     </div>}
      <section className="max-container  padding-x pt-28 h-screen w-full">
        <Introduction></Introduction>
      </section>
      <section className="max-container w-full  padding-x padding-y" id="about-me">
        <AboutMe/>
      </section>
      <section className="max-container  w-full padding-x padding-y"id='education'>
        <Education/>
      </section>
      <section className="max-container w-full  padding-x padding-y" id='skills'>
        <Skills/>
      </section>
      <section className="max-container w-full padding-x padding-y"id='projects'>
        <Projects/>
      </section>
      <section className="max-container w-full padding-x padding-y"id='achievements'>
        <Achievements/>
      </section>
      <section className="max-container w-full padding-x padding-y"id='contact'>
        <Contact/>
      </section>
      
    
    </main>
  );
}
