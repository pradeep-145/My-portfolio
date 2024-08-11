import Image from "next/image"
import { project } from "@constants"
const Projects = () => {
  return (
     <section className="py-[12rem] flex flex-col gap-24" >
    <h1 className="text-center text-5xl font-bold font-palanquin mt-6 dark:text-gray-300  max-sm:text-3xl max-md:text-4xl text-slate-600">Projects</h1>
    <div>
      {project.map(item=>{
        return(
          <div>
            <Image src={item.logo}></Image>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>
     </section> 
  )
}

export default Projects