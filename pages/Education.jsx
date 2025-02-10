import { useEffect, useState } from "react";

const RadialProgressBar = ({ percentage, size = 100 }) => {
  const radius = size;
  const stroke = size * 0.15;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="relative">
      <circle
        stroke="#e2e8f0"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#663399"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize={size * 0.2}
        fill="#fff"
      >
        {percentage}%
      </text>
    </svg>
  );
};

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile view for widths less than 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="font-thin flex flex-col gap-16 px-6 md:px-12 lg:px-20">
      <h1 className="text-center text-2xl lg:text-4xl md:text-5xl font-bold font-palanquin dark:text-gray-300 text-slate-600">
        Education
      </h1>

      {!isMobile ? (
        // Laptop & Tablet View
        <div className="flex dark:text-white text-slate-600 lg:flex-row lg:mt-10 justify-center gap-36 flex-col items-center">
          {[
            { label: "SSLC", year: "(2019-2020)", school: "K.V.M.Hr.Sec.School", percentage: 63.3 },
            { label: "HSC", year: "(2021-2022)", school: "K.V.M.Hr.Sec.School", percentage: 84 },
            { label: "BE-CSE", year: "(2022 - Present)", school: "Kongu Engineering College", percentage: 77.6 },
          ].map((edu, index) => (
            <div key={index} className="relative flex items-center transition-all duration-300 group">
              <span className="group-hover:scale-[0.65] group-hover:-translate-x-[73px] transition-transform duration-300">
                <RadialProgressBar percentage={edu.percentage} size={100} />
              </span>
              <span className="absolute opacity-0 scale-[0.2] border-slate-600 border-t-2 flex flex-col border-b-2 border-r-2 py-3 px-11 pl-16 rounded-r-lg -translate-x-2 text-white whitespace-nowrap ease-in-out duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[48px]">
                <p className="text-lg font-semibold text-black dark:text-white">{edu.label}</p>
                <p className="text-slate-400 mt-3 text-sm">{edu.year}</p>
                <p className="text-slate-400 mt-1">{edu.school}</p>
              </span>
            </div>
          ))}
        </div>
      ) : (
        // Mobile View
        <div className="grid grid-cols-1 gap-12 justify-center items-center">
          {[
            { label: "SSLC", year: "(2019-2020)", school: "K.V.M.Hr.Sec.School", percentage: 63.3 },
            { label: "HSC", year: "(2021-2022)", school: "K.V.M.Hr.Sec.School", percentage: 84 },
            { label: "BE-CSE", year: "(2022 - Present)", school: "Kongu Engineering College", percentage: 77.6 },
          ].map((edu, index) => (
            <div key={index} className="relative flex flex-col items-center group transition-all duration-300">
              <span className="group-hover:scale-90 transition-transform duration-300">
                <RadialProgressBar percentage={edu.percentage} size={80} />
              </span>
              <span className="absolute opacity-0 scale-75 border-slate-600 border-t-2 border-b-2 border-r-2 py-3 px-8 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white whitespace-nowrap transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 mt-4">
                <p className="text-lg font-semibold">{edu.label}</p>
                <p className="text-gray-500 mt-2 text-sm">{edu.year}</p>
                <p className="text-gray-500 mt-1">{edu.school}</p>
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Education;
