"use client";
import { skills } from "@constants";
import { motion } from "framer-motion";

const SkillCard = ({ name, level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-5 hover:shadow-lg hover:shadow-violet-200 dark:hover:shadow-violet-900/50 transition-all duration-300"
    >
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold text-slate-800 dark:text-slate-200">
          {name}
        </h3>
        <span className="text-violet-600 dark:text-violet-400 font-medium">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          viewport={{ once: true }}
          className="h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600"
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="bg-white dark:bg-transparent py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-slate-800 dark:text-gray-300 mb-16"
        >
          Skills
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {
              [
                "Git",
                "GitHub",
                "Figma",
                "VS Code",
                "Docker",
                "AWS",
                "Firebase",
                "Redux",
                "GraphQL",
              ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-violet-50 dark:bg-gray-800 text-violet-700 dark:text-slate-300 rounded-full text-sm font-medium border border-violet-200 dark:border-gray-600 hover:bg-violet-100 dark:hover:bg-gray-700 transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
