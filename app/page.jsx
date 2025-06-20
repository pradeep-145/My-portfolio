"use client";
import AboutMe from "@pages/AboutMe";
import Achievements from "@pages/Achievements";
import Contact from "@pages/Contact";
import Education from "@pages/Education";
import Introduction from "@pages/Intoduction";
import Projects from "@pages/Projects";
import Skills from "@pages/Skills";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function Home() {
  const [goToTop, setGoToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setGoToTop(true);
      } else {
        setGoToTop(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = [
        "about-me",
        "education",
        "skills",
        "projects",
        "achievements",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop - 200;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (scrollPosition < 300) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="flex flex-col">
      <Head>
        <title>Pradeep Sakthi | Portfolio</title>
        <meta
          name="description"
          content="Pradeep Sakthi's Portfolio - Full Stack Developer & UI/UX Enthusiast"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <AnimatePresence>
        {goToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <motion.button
              onClick={handleGoToTop}
              className="bg-violet-600 text-white p-3 rounded-full shadow-lg hover:bg-violet-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="min-h-screen flex justify-center w-full items-center">
        <Introduction />
      </section>

      <motion.hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <motion.section
        className="max-container w-full padding-x padding-y"
        id="about-me"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutMe />
      </motion.section>

      <motion.hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <motion.section
        className="max-container w-full padding-x padding-y"
        id="education"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Education />
      </motion.section>

      <motion.hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <motion.section
        className="max-container w-full padding-x padding-y"
        id="skills"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Skills />
      </motion.section>

      <motion.hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <motion.section
        className="max-container w-full padding-x padding-y"
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Projects />
      </motion.section>

      <motion.hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <motion.section
        className="max-container w-full padding-y"
        id="achievements"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Achievements />
      </motion.section>

      <motion.hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <motion.section
        className="max-container w-full padding-x padding-y"
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>
    </main>
  );
}
