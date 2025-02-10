import { useEffect, useState } from "react";
const RadialProgressBar = ({ percentage }) => {
  const radius=100
  const stroke =15;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 102) * circumference;

  return (
      <svg height={radius * 2} width={radius * 2} className="relative">
          <circle stroke="#e2e8f0" fill="transparent" strokeWidth={stroke}
              r={normalizedRadius} cx={radius} cy={radius} />
          <circle stroke="#663399" fill="transparent"
              strokeWidth={stroke} strokeDasharray={circumference + " " + circumference}
              style={{ strokeDashoffset }} r={normalizedRadius} 
              cx={radius} cy={radius} initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }} transition={{ duration: 1 }} />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize={ "22"} fill="#fff">
              {percentage}%
          </text>
      </svg>
  );
};
const Education = () => {

  
  
  return (
    <section className="font-thin  flex flex-col gap-24">
      <h1 className="text-center text-5xl font-bold font-palanquin dark:text-gray-300 max-sm:text-3xl max-md:text-4xl text-slate-600">
        Education
      </h1>
      <div className="flex dark:text-white text-slate-600 lg:flex-row lg:mt-10 justify-center gap-36 flex-col items-center">
        <div className="relative flex items-center transition-all duration-300 group">
          <span className="group-hover:scale-[0.65] group-hover:-translate-x-[73px] transition-transform duration-300" >

          <RadialProgressBar percentage={63.3}  />
          </span>
          <span className="absolute opacity-0 scale-[0.2] border-slate-600 border-t-2 flex flex-col border-b-2 border-r-2 py-3 px-11 pl-16 rounded-r-lg -translate-x-2 text-white whitespace-nowrap ease-in-out duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[48px]">
            <p className="text-lg font-semibold text-black dark:text-white">SSLC</p>
            <p className="text-slate-400 mt-3 text-sm">(2019-2020)</p>
            <p className="text-slate-400 mt-1">K.V.M.Hr.Sec.School</p>
          </span>
        </div>

        <div className="relative flex items-center transition-all duration-300 group">
        <span className="group-hover:scale-[0.65] group-hover:-translate-x-[73px] transition-transform duration-300" >

        <RadialProgressBar percentage={84} />
        </span>
          <span className="absolute opacity-0 scale-[0.2] pl-16 border-slate-600 border-t-2 flex flex-col border-b-2 border-r-2 py-3 px-11 rounded-r-lg -translate-x-2 text-white whitespace-nowrap ease-in-out duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[48px]">
            <p className="text-lg font-semibold text-black dark:text-white">HSC</p>
            <p className="text-slate-400 mt-3 text-sm">(2021-2022)</p>
            <p className="text-slate-400 mt-1">K.V.M.Hr.Sec.School</p>
          </span>
        </div>

        <div className="relative flex items-center transition-all duration-300 group">
        <span className="group-hover:scale-[0.65] group-hover:-translate-x-[73px] transition-transform duration-300" >

        <RadialProgressBar percentage={77.6} />
</span>          <span className="absolute opacity-0 scale-[0.2] pl-16 border-slate-600 border-t-2 flex flex-col border-b-2 border-r-2 py-3 px-11 rounded-r-lg -translate-x-2 text-white whitespace-nowrap ease-in-out duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[48px]">
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