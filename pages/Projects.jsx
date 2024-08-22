import Image from "next/image"
import { project } from "@constants"
import { FaArrowRight } from "react-icons/fa";
const Projects = () => {
  return (
     <section className="py-[12rem] flex flex-col gap-24" >
    <h1 className="text-center text-5xl font-bold font-palanquin mt-6 dark:text-gray-300  max-sm:text-3xl max-md:text-4xl text-slate-600">Projects</h1>
    <div className="mx-32 max-lg:mx-10"   >
      {project.map(item=>{
        return(
          <div className="border-2 border-slate-700 dark:text-white bg-transparent flex mb-7 max-lg:flex-col  max-lg:p-2 text-black rounded-3xl" key={item.id} >
            <Image src={item.logo} width={200} className=" rounded-lg m-7 max-lg:m-auto border-2 dark:border-white border-black"></Image>
            <div className="flex flex-col gap-3 m-3">

            <p className="text-lg font-bold font-satoshi ">{item.title}</p>
            <p className="text-justify">{item.description}</p>
            <div className="">
              {item.stack.map((stack,index)=>{
                return(
                  <span key={index} className="text-sm mr-2 text-violet-500 bg-slate-800 rounded-lg p-2">{stack}</span>
                )
              }
              )}

            </div>
            <div className="flex flex-row gap-3 ">

            <button onClick={()=>{
              window.open(item.link);
            }}className=" dark:text-white dark:bg-violet-500 flex items-center w-auto rounded-full p-2 gap-2">Try Now <FaArrowRight/></button>
            <button onClick={()=>{
              window.open(item.link);
            }}className=" dark:text-white dark:bg- flex items-center w-auto rounded-full p-2 gap-2">GitHub</button>
            </div>
            </div>
          </div>
        )
      })}
    </div>
     </section> 
  )
}

export default Projects