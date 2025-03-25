import Image from "next/image"
import { project } from "@constants"
import { IoLogoGithub } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ item }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden flex flex-col lg:flex-row mb-12 transform transition-transform hover:scale-[1.02]"
  >
    <div className="lg:w-1/3 p-6 flex items-center justify-center">
      <Image 
        src={item.logo} 
        alt={item.title} 
        width={250} 
        height={250} 
        className="rounded-lg object-cover shadow-md"
      />
    </div>
    <div className="lg:w-2/3 p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">{item.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-justify">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {item.stack.map((tech, index) => (
            <span 
              key={index} 
              className="bg-violet-100 dark:bg-slate-700 text-violet-800 dark:text-violet-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-4">
        {item.try && (
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(item.link1)}
            className="flex items-center space-x-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors"
          >
            Try Now <FaArrowRight className="ml-2" />
          </motion.button>
        )}
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(item.github)}
          className="flex items-center space-x-2 border-2 border-slate-600 dark:border-slate-400 text-slate-600 dark:text-slate-400 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          GitHub <IoLogoGithub className="ml-2" size={24} />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-slate-800 dark:text-gray-300 mb-16">
        Projects
      </h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {project.map(item => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Projects