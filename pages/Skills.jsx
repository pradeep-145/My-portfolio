"use client"
import Image from "next/image";
import html from "@public/images/html.svg";
import nextjs from "@public/images/nextjs.svg";
import tailwind from "@public/images/tailwind.svg";
import react from "@public/images/react.svg";
import node from "@public/images/node.svg";
import mongodb from "@public/images/mongodb.svg";
import figma from "@public/images/figma.svg";

const Skills = () => {

  return (
    <section className="py-[12rem] flex flex-col gap-24" >
        <h1 className="text-center text-5xl font-bold font-palanquin dark:text-gray-300 mt-6 max-sm:text-3xl max-md:text-4xl text-slate-600">Skills</h1>
        <div className='mt-6 mb-12 max-md:grid flex  py-12 flex-row gap-5 justify-center items-center max-md:grid-cols-2 max-md:px-6 max-md:mx-24 max-sm:px-5 max-sm:mx-16'>
          <div className='border-2 rounded-md border-gray-500  p-4'>

         <Image src={html} width={40} height={40}></Image>
          </div>
          <div className='border-2 rounded-md border-gray-500 p-4'>

         <Image src={node} width={40} height={40}></Image>
          </div>
          <div className='border-2 rounded-md border-gray-500 p-4'>

         <Image src={mongodb} width={40} height={40}></Image>
          </div>
          <div className='border-2 rounded-md border-gray-500 p-4'>

         <Image src={nextjs} width={40} height={40}></Image>
          </div>
          <div className='border-2 rounded-md border-gray-500 p-4'>

         <Image src={tailwind} width={40} height={40}></Image>
          </div>
          <div className='border-2 rounded-md border-gray-500 p-4'>

         <Image src={react} width={40} height={40}></Image>
          </div>
          <div className='border-2 rounded-md border-gray-500 p-4'>

         <Image src={figma} width={40} height={40}></Image>
          </div>
          
        </div>

    </section>
  )
}

export default Skills