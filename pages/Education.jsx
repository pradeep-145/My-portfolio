import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProgressBar = ({ percentage, duration = 1.5 }) => {
  return (
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      {/* Reduced height */}
      <motion.div
        className="h-full bg-gradient-to-r from-violet-500 to-purple-700"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration, ease: "easeOut" }}
      />
      <motion.p
        className="text-xs font-semibold mt-1 text-right dark:text-white text-slate-700"
        // Smaller text size
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: duration * 0.5 }}
      >
        {percentage}%
      </motion.p>
    </div>
  );
};

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const educationData = [
    {
      label: "SSLC",
      year: "(2019-2020)",
      school: "K.V.M.Hr.Sec.School",
      percentage: 63.3,
    },
    {
      label: "HSC",
      year: "(2021-2022)",
      school: "K.V.M.Hr.Sec.School",
      percentage: 84,
    },
    {
      label: "BE-CSE",
      year: "(2022 - Present)",
      school: "Kongu Engineering College",
      percentage: 77.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    // Reduced y offset
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      // Reduced hover scale and smaller shadow
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="font-thin flex flex-col gap-6 px-6 md:px-12 lg:px-16 py-12 min-h-screen">
      {/* Reduced gap and padding */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        // Smaller animation distance
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-500 text-transparent bg-clip-text"
      >
        Academic Journey
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative mx-auto max-w-6xl w-full mt-8"
        // Reduced margin
      >
        {!isMobile ? (
          <div className="relative">
            {/* Desktop Timeline Layout */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-violet-200 dark:bg-violet-900/30"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="relative z-10"
            >
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-16 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  // Reduced margin
                >
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-violet-600 border-4 border-white dark:border-gray-900 z-10"
                    // Reduced size
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 * index, duration: 0.5 }}
                  />
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                    // Reduced padding
                  >
                    <motion.div
                      className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300 border border-violet-100 dark:border-violet-900/30 relative overflow-hidden group"
                      // Reduced padding and shadow
                      initial={{ rotate: index % 2 === 0 ? -3 : 3 }}
                      whileHover={{ rotate: 0 }}
                    >
                      <div className="absolute top-0 left-0 w-16 h-16 -translate-x-8 -translate-y-8 bg-violet-500/10 rounded-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700" />
                      {/* Reduced size */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 translate-x-8 translate-y-8 bg-purple-500/10 rounded-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700" />
                      {/* Reduced size */}
                      <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-1">
                        {edu.label}
                      </h3>
                      {/* Smaller text size */}
                      <p className="text-base font-medium dark:text-gray-300 text-gray-600 mb-3">
                        {edu.school}
                      </p>
                      {/* Smaller text size */}
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {edu.year}
                      </p>

                      <div className="mt-3">
                        <ProgressBar
                          percentage={edu.percentage}
                          duration={1 + index * 0.2}
                        />
                      </div>

                      <div className="flex mt-3 justify-end gap-1">
                        {/* Achievement stars based on percentage */}
                        {[...Array(Math.floor(edu.percentage / 20))].map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ rotate: 0, scale: 0 }}
                              whileInView={{ rotate: 360, scale: 1 }}
                              transition={{
                                delay: 0.8 + i * 0.1,
                                duration: 0.5,
                              }}
                              className="text-yellow-500 text-base"
                              // Smaller text size
                            >
                              ★
                            </motion.div>
                          )
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                  <div className="w-5/12" />
                  {/* Spacer for opposite side */}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative space-y-6 py-4"
            // Reduced spacing
          >
            <motion.div
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-violet-300 dark:bg-violet-800"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative pl-10"
                // Reduced padding
              >
                <motion.div
                  className="absolute left-4 top-4 transform -translate-x-1/2 w-4 h-4 rounded-full bg-violet-600 border-2 border-white dark:border-gray-900 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />

                <motion.div
                  className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow-md border border-violet-100 dark:border-violet-900/30"
                  // Reduced padding
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-violet-700 dark:text-violet-400 mb-1">
                    {edu.label}
                  </h3>
                  {/* Smaller text size */}
                  <p className="text-sm font-medium dark:text-gray-300 text-gray-600 mb-2">
                    {edu.school}
                  </p>
                  {/* Smaller text size */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {edu.year}
                  </p>

                  <div className="mt-2">
                    {/* Reduced margin */}
                    <ProgressBar percentage={edu.percentage} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Education;
