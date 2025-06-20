"use client";
import "@styles/globals.css";

import Nav from "@pages/Nav";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaMoon, FaSun } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check localStorage or system preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <html lang="en" className={theme}>
      <head>
        <title>Pradeep Sakthi | Portfolio</title>
        <meta
          name="description"
          content="Pradeep Sakthi's Portfolio - Full Stack Developer"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${
          theme === "dark" ? "dark bg-slate-900" : "bg-gray-50"
        } selection:bg-sky-700`}
      >
        <div className={theme === "dark" ? "dark-main" : "hidden"}>
          <div className="dark-gradient"></div>
        </div>

        <motion.button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <AnimatePresence mode="wait">
            {theme === "dark" ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaSun className="text-yellow-500 text-xl" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaMoon className="text-slate-700 text-xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <main className="app relative z-10">
          <Nav />
          {children}
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                borderRadius: "10px",
                background: theme === "dark" ? "#334155" : "#fff",
                color: theme === "dark" ? "#e2e8f0" : "#334155",
              },
            }}
          />
        </main>
      </body>
    </html>
  );
}
