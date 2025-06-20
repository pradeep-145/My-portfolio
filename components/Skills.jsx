"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "React",
      level: 90,
      icon: FaReact,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/20",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: FaJs,
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-500/20",
    },
    {
      name: "TypeScript",
      level: 80,
      icon: SiTypescript,
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-600/20",
    },
    {
      name: "Next.js",
      level: 85,
      icon: SiNextdotjs,
      color: "from-gray-800 to-gray-600",
      bgColor: "bg-gray-800/20",
    },
    {
      name: "Node.js",
      level: 80,
      icon: FaNodeJs,
      color: "from-green-500 to-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      name: "Python",
      level: 75,
      icon: FaPython,
      color: "from-blue-500 to-yellow-400",
      bgColor: "bg-blue-500/20",
    },
    {
      name: "HTML/CSS",
      level: 95,
      icon: FaHtml5,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/20",
    },
    {
      name: "TailwindCSS",
      level: 90,
      icon: SiTailwindcss,
      color: "from-teal-400 to-blue-500",
      bgColor: "bg-teal-500/20",
    },
    {
      name: "MongoDB",
      level: 70,
      icon: FaDatabase,
      color: "from-green-600 to-green-400",
      bgColor: "bg-green-600/20",
    },
    {
      name: "Git",
      level: 85,
      icon: FaGitAlt,
      color: "from-orange-600 to-red-500",
      bgColor: "bg-orange-600/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const floatingAnimation = {
    y: [-2, 2, -2],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const gigglyHover = {
    scale: 1.05,
    rotate: [0, -1, 1, -1, 0],
    y: -10,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 400,
      rotate: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            My Skills
            <motion.span
              className="inline-block ml-4 text-4xl"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              ✨
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Technologies I love working with
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={gigglyHover}
                animate={floatingAnimation}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                className={`
                  relative p-6 rounded-2xl backdrop-blur-lg border border-white/20
                  ${skill.bgColor} hover:bg-white/10 transition-all duration-300
                  cursor-pointer group overflow-hidden
                `}
              >
                {/* Glowing Background Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  animate={{
                    scale: hoveredSkill === index ? 1.2 : 1,
                  }}
                />

                {/* Sparkles */}
                <div className="absolute top-2 right-2 space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="inline-block text-yellow-300 text-sm"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      ✨
                    </motion.span>
                  ))}
                </div>

                {/* Skill Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <IconComponent
                      className={`w-12 h-12 mx-auto bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                    />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>

                  <motion.span
                    className="text-sm text-gray-300 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                {/* Floating Particles */}
                {hoveredSkill === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [-20, -40, -60],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(139, 92, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Let's Work Together! 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
