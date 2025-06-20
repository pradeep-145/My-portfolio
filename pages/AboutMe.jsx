import about from "@public/images/AboutMe.png";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="flex flex-col gap-16 md:gap-24 bg-gray-50 dark:bg-transparent py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center lg:text-5xl text-2xl font-bold font-palanquin sm:text-3xl md:text-4xl lg:mt-6 text-slate-800 dark:text-gray-300"
      >
        About Me
      </motion.h1>

      <div className="flex lg:flex-row lg:mt-10 flex-col gap-11 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-1 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-30"></div>
            <Image
              src={about}
              width={250}
              height={250}
              className="max-md:w-28 drop-shadow-xl relative z-10 rounded-full bg-white p-4"
              alt="About me logo"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-1 justify-center px-8 md:px-[45px] items-center"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="lg:text-lg md:text-md text-sm text-wrap text-justify text-slate-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm{" "}
              <span className="font-semibold text-violet-700 dark:text-violet-400">
                Pradeep Sakthi
              </span>
              , a passionate and dedicated Full Stack Developer with a knack for
              crafting dynamic and responsive web applications. With a strong
              foundation in both front-end and back-end technologies, I enjoy
              building seamless and user-friendly digital experiences. As a Full
              Stack Developer, I bridge the gap between design and technology,
              ensuring that every project I work on is not only visually
              appealing but also functionally robust.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
