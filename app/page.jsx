"use client"
import Image from "next/image";
import Introduction from "@pages/Intoduction";
import AboutMe from "@pages/AboutMe";
import Education from "@pages/Education";
import Skills from "@pages/Skills";
import Projects from "@pages/Projects";
import Achievements from "@pages/Achievements";
import Contact from "@pages/Contact";
import { useEffect,useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence>
     { gotToTop && 
     <>
     <motion.div initial={{opacity:0}} whileInView={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}} className="fixed bottom-4  w-auto h-auto flex left-1/2 text-white">
        <button onClick={handleGoToTop} className="bg-black block border-2 border-violet-900 p-2 hover:scale-105 duration-300 animate-[bounce_0.5s_infinite] rounded-full"><FaArrowUp /></button>
     </motion.div>
     </>
     }
     </AnimatePresence>
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
