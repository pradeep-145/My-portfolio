"use client"
import Image from "next/image";
import html from "@public/images/html.svg";
import nextjs from "@public/images/nextjs.svg";
import tailwind from "@public/images/tailwind.svg";
import react from "@public/images/react.svg";
import node from "@public/images/node.svg";
import mongodb from "@public/images/mongodb.svg";
import client from "@public/images/client.svg";
import { useEffect, useState } from "react";
const Skills = () => {
  const [show, setShow] = useState(null);

  return (
    <section className=" flex flex-col gap-24">
      <h1 className="text-center text-5xl font-bold font-palanquin dark:text-gray-300 mt-6 max-sm:text-3xl max-md:text-4xl text-slate-600">Skills</h1>
      <div className='mt-6 mb-12 max-md:grid flex py-12 flex-row gap-5 justify-center items-center max-md:grid-cols-2 max-md:px-6 max-md:mx-24 max-sm:px-5 max-sm:mx-16'>
        <div onMouseEnter={() => {setShow('html')}} onMouseLeave={() => {setShow(null)}} className="border-2 flex flex-col rounded-md border-gray-500 hover:scale-150 justify-center items-center duration-200  text-slate-300 text-center">
          <Image src={html}  className={`w-20 h-20 p-4 duration-200 ${show==='html'?'-translate-y-4':''}`}></Image>
          <p className={`absolute top-12  duration-200 font-bold font-sans ${show === 'html' ? 'block' : 'hidden'}`}>HTML 5</p>
        </div>
        <div onMouseEnter={() => {setShow('node')}} onMouseLeave={() => {setShow(null)}}className="border-2 flex flex-col rounded-md border-gray-500 hover:scale-150 justify-center items-center duration-200  text-slate-300 text-center">
          <Image src={node}  className={`w-20 h-20 p-4 duration-200 ${show==='node'?'-translate-y-4':''}`}></Image>
          <p className={`absolute top-12  duration-200 font-bold font-sans ${show === 'node' ? 'block' : 'hidden'}`}>Node.js</p>
        </div>
        <div onMouseEnter={() => {setShow('mongodb')}} onMouseLeave={() => {setShow(null)}} className="border-2 flex flex-col rounded-md border-gray-500 hover:scale-150 justify-center items-center duration-200  text-slate-300 text-center">
          <Image src={mongodb}  className={`w-20 h-20 p-4 duration-200 ${show==='mongodb'?'-translate-y-4':''}`}></Image>
          <p className={`absolute top-12  duration-200 font-bold text-sm font-sans ${show === 'mongodb' ? 'block' : 'hidden'}`}>MongoDB</p>
        </div>
        <div onMouseEnter={() => {setShow('nextjs')}} onMouseLeave={() => {setShow(null)}} className="border-2 flex flex-col rounded-md border-gray-500 hover:scale-150 justify-center items-center duration-200  text-slate-300 text-center">
          <Image src={nextjs}  className={`w-20 h-20 p-4 duration-200 ${show==='nextjs'?'-translate-y-4':''}`}></Image>
          <p className={`absolute top-12  duration-200 font-bold font-sans ${show === 'nextjs' ? 'block' : 'hidden'}`}>Next.js</p>
        </div>
        <div onMouseEnter={() => {setShow('tailwind')}} onMouseLeave={() => {setShow(null)}} className="border-2 flex flex-col rounded-md border-gray-500 hover:scale-150 justify-center items-center duration-200  text-slate-300 text-center">
          <Image src={tailwind}  className={`w-20 h-20 p-4 duration-200 ${show==='tailwind'?'-translate-y-4':''}`}></Image>
          <p className={`absolute top-12  duration-200 font-bold text-sm font-sans ${show === 'tailwind' ? 'block' : 'hidden'}`}>Tailwind</p>
        </div>
        <div onMouseEnter={() => {setShow('react')}} onMouseLeave={() => {setShow(null)}} className="border-2 flex flex-col rounded-md border-gray-500 hover:scale-150 justify-center items-center duration-200  text-slate-300 text-center">
          <Image src={react}  className={`w-20 h-20 p-4 duration-200 ${show==='react'?'-translate-y-4':''}`}></Image>
          <p className={`absolute top-12  duration-200 font-bold font-sans ${show === 'react' ? 'block' : 'hidden'}`}>React</p>
        </div>
      <div onMouseEnter={() => {setShow('client')}} onMouseLeave={() => {setShow(null)}} className="border-2 flex flex-col rounded-md bg-white border-gray-500 hover:scale-150 justify-center items-center duration-200  text-slate-800 text-center">
          <Image src={client}  className={`w-20 h-20 p-4 duration-200 ${show==='client'?'-translate-y-4':''}`} ></Image>
          <p className={`absolute top-12  duration-200 font-bold font-sans ${show === 'client' ? 'block' : 'hidden'}`}>Expo</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;