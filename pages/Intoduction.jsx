"use client";

import profile from "@public/images/profile.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsTelegram } from "react-icons/bs";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const Introduction = () => {
  const router = useRouter();

  const socialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="p-1 flex flex-1 lg:flex-row justify-center items-center max-lg:flex-col lg:gap-44 sm:gap-10 md:gap-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col flex-1 justify-center items-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:text-4xl text-slate-800 dark:text-neutral-300 sm:text-2xl leading-9 lg:text-4xl text-2xl flex flex-row font-bold"
        >
          Hi, I'm Pradeep Sakthi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg flex flex-row leading-10 text-slate-600 dark:text-gray-400 mt-4"
        >
          Full Stack Developer & UI/UX Enthusiast
        </motion.p>

        <motion.div className="gap-8 flex flex-row mt-6">
          {[{
            icon: IoLogoGithub,
            link: "https://github.com/pradeep-145",
            custom: 1,
            color:
              "text-gray-800 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400",
          },
          {
            icon: FaInstagramSquare,
            link: "https://www.instagram.com/pradeepsakthi_20_2004?igsh=c3ZoMHB5NTAzeGZh",
            custom: 2,
            color:
              "text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300",
          },
          {
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/pradeep-sakthi-sridharan-2364ba256/",
            custom: 3,
            color:
              "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
          }].map((social, index) => (
            <motion.button
              key={index}
              custom={social.custom}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`${social.color} transition-colors duration-300`}
              onClick={() => window.open(social.link)}
            >
              <social.icon className="size-6 lg:size-9 md:size-8 sm:size-5" />
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            className="mt-9 px-6 py-3 justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-palanquin gap-3 font-semibold rounded-lg flex"
            onClick={() => {
              const element = document.getElementById("contact");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(139, 92, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello{" "}
            <BsTelegram className="size-6 lg:size-9 md:size-8 sm:size-5" />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-1 justify-center items-center mt-10 lg:mt-0"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-75"></div>
          <Image
            src={profile}
            alt="Profile Picture"
            className="md:w-72 rounded-md sm:w-56 lg:w-96 w-44 relative z-10"
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFknyeK6LTk="
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Introduction;
