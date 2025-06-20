import LazyImage from "@components/LazyImage";
import { project } from "@constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaCode, FaLaptopCode } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const ProjectCard = ({ item, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-white dark:bg-slate-800/90 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden 
        flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } mb-16 project-card`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="lg:w-1/3 p-6 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-500/20 dark:to-indigo-500/20"
      >
        <motion.div className="relative z-10 w-full max-w-[250px] h-[250px]">
          <LazyImage
            src={item.logo}
            alt={item.title}
            width={250}
            height={250}
            className="rounded-lg shadow-md transform transition-all duration-500 hover:rotate-2"
            onLoad={() => setImageLoaded(true)}
            priority={index === 0}
          />
        </motion.div>
      </motion.div>

      <div className="lg:w-2/3 p-8 flex flex-col justify-between relative">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <FaCode className="text-violet-600 dark:text-violet-400" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              {item.title}
            </h3>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-6 text-justify leading-relaxed">
            {item.description}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {item.stack.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                className="bg-violet-100 dark:bg-slate-700 text-violet-800 dark:text-violet-300 px-4 py-1.5 
                rounded-full text-sm font-medium shadow-sm border border-violet-200 dark:border-violet-600"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="flex space-x-4">
          {item.try && (
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(item.link1)}
              className="flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700
              text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
            >
              <FaLaptopCode />
              <span>Try Now</span>
              <FaArrowRight />
            </motion.button>
          )}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(item.github)}
            className="flex items-center space-x-2 border-2 border-slate-300 dark:border-slate-400 
            text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100 
            dark:hover:bg-slate-700 transition-all duration-300 font-medium"
          >
            <span>GitHub</span>
            <IoLogoGithub size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="bg-gray-50 dark:bg-transparent py-20 relative">
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl"></div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 mb-16"
        >
          Projects
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          {project.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
