 
import { useEffect, useState } from "react";

const Education = () => {

  const [stroke,setStroke]=useState('white')
  useEffect(()=>{
    
    const hasDark=document.body.classList.contains('dark');
    if(hasDark){
        setStroke('white')
    }
    else
    {
      setStroke('black')
    }
  })
   return (
     <section className=" font-thin py-[12rem] flex flex-col gap-24">
       <h1 className="text-center text-5xl font-bold font-palanquin dark:text-gray-300  max-sm:text-3xl max-md:text-4xl text-slate-600">
         Education
       </h1>
       <div className="flex dark:text-white text-slate-600 lg:flex-row lg:mt-10 justify-center gap-36 flex-col items-center ">
       <div className="relative flex items-center transition-all duration-300 group">
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className=" group-hover:scale-[0.65] group-hover:-translate-x-20 dark:text-white text-black transition-transform duration-300"
  >
    <circle cx="100" cy="100" r="90" stroke={stroke} strokeWidth="15" fill="none" />
    <circle
      cx="100"
      cy="100"
      r="90"
      stroke="blue"
      strokeWidth="15"
      strokeDasharray="70 100"
      fill="none"
      transform="rotate(-90 100 100)"
    />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      stroke="white"
      strokeWidth="2px"
      dy=".3em"
      fontSize="25px"
    >
      63.3%
    </text>
    <text
      x="50%"
      y="70%"
      textAnchor="middle"
      stroke="white"
      strokeWidth="0.5px"
      dy=".3em"
      fontSize="15px"
    >
      SSLC
    </text>
  </svg>

  <span
    className="absolute opacity-0 scale-[0.2] border-slate-600 border-t-2 flex flex-col  border-b-2 border-r-2  py-3 px-11 pl-16 rounded-r-lg -translate-x-2 text-white    whitespace-nowrap ease-in-out duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[48px]"
  >
    <p className="text-lg font-semibold text-black dark:text-white">SSLC</p>
    <p className="text-slate-400 mt-3 text-sm">(2019-2020)</p>
    <p className="text-slate-400 mt-1">K.V.M.Hr.Sec.School</p>
  </span>
</div>

 

       <div className="relative flex items-center transition-all duration-300 group">
           <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className=" group-hover:scale-[0.65] group-hover:-translate-x-20 transition-transform duration-300">
             <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="15" fill="none" />
             <circle cx="100" cy="100" r="90" stroke="green" strokeWidth="15" strokeDasharray="84 100" fill="none" transform="rotate(-90 100 100)" />
             <text x="50%" y="50%" textAnchor="middle" stroke="white" strokeWidth="2px" dy=".3em" fontSize="25px">
               84%
             </text>
             <text x="50%" y="70%" textAnchor="middle" stroke="white" strokeWidth="0.5px" dy=".3em" fontSize="15px">
               HSC
             </text>
           </svg>
 
      
           <span
    className="absolute opacity-0 scale-[0.2] pl-16 border-slate-600 border-t-2 flex flex-col  border-b-2 border-r-2  py-3 px-11 rounded-r-lg -translate-x-2 text-white    whitespace-nowrap ease-in-out duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[48px]"
  >
    <p className="text-lg font-semibold text-black dark:text-white">HSC</p>
    <p className="text-slate-400 mt-3 text-sm">(2021-2022)</p>
    <p className="text-slate-400 mt-1">K.V.M.Hr.Sec.School</p>
  </span>
         </div>
 
       <div className="relative flex items-center transition-all duration-300 group">
           <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className=" group-hover:scale-[0.65] group-hover:-translate-x-20 transition-transform duration-300">
             <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="15" fill="none" />
             <circle cx="100" cy="100" r="90" stroke="orange" strokeWidth="15" strokeDasharray="78.5 100" fill="none" transform="rotate(-90 100 100)" />
             <text x="50%" y="50%" textAnchor="middle" stroke="white" strokeWidth="2px" dy=".3em" fontSize="25px">
             78.5%
             </text>
             <text x="50%" y="70%" textAnchor="middle" stroke="white" strokeWidth="0.5px" dy=".3em" fontSize="15px">
               CGPA
             </text>
           </svg>
 
           <span
    className="absolute opacity-0 scale-[0.2] pl-16 border-slate-600 border-t-2 flex flex-col  border-b-2 border-r-2  py-3 px-11 rounded-r-lg -translate-x-2 text-white    whitespace-nowrap ease-in-out duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[48px]"
  >
    <p className="text-lg font-semibold text-black dark:text-white">BE-CSE</p>
    <p className="text-slate-400 mt-3 text-sm">(2022-TILL DATE)</p>
    <p className="text-slate-400 mt-1">KONGU ENGINEERING COLLEGE</p>
  </span>
         </div>
         </div>
     </section>
   );
 };
 
 export default Education;
 