"use client";

import { showToast } from "@utils/showToast";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaCheckCircle, FaWhatsappSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.description) newErrors.description = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        showToast("success");
        setFormData({ email: "", name: "", description: "" });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
      } else {
        showToast("error");
      }
    } catch (error) {
      showToast("error");
    } finally {
      setLoading(false);
    }
  };

  const ContactMethod = ({ icon: Icon, title, subtitle, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center 
      text-center cursor-pointer hover:shadow-xl hover:shadow-violet-200 dark:hover:shadow-violet-900/50 transition-all duration-300 border-b-4 border-violet-500"
    >
      <div className="mb-4 text-violet-600 dark:text-violet-400 text-4xl">
        <Icon />
      </div>
      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
        {title}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>
    </motion.div>
  );

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="bg-gray-50 dark:bg-transparent py-20 relative">
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-20 right-20 w-64 h-64 bg-violet-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"></div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
            Get in Touch
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto"
        >
          Have a question or want to work together? Drop me a message!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6"
            >
              Contact Options
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <ContactMethod
                icon={MdOutgoingMail}
                title="Email"
                subtitle="spradeepsakthi2004@gmail.com"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=spradeepsakthi2004@gmail.com"
                  )
                }
              />
              <ContactMethod
                icon={FaWhatsappSquare}
                title="WhatsApp"
                subtitle="+91 93853 52051"
                onClick={() =>
                  window.open(
                    `https://wa.me/919385352051?text=Hello%20Pradeep%20Sakthi!`
                  )
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 p-6 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Quick Response
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                I typically respond to all messages within 24 hours. For urgent
                inquiries, WhatsApp is the fastest way to reach me.
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-xl shadow-lg p-8 space-y-6 border border-gray-200 dark:border-gray-700"
          >
            <motion.div variants={formItemVariants}>
              <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email
                    ? "border-red-500 dark:border-red-500"
                    : "border-slate-300 dark:border-slate-600"
                } bg-white dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-violet-500 text-slate-800 dark:text-white transition-all duration-300`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={formItemVariants}>
              <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name
                    ? "border-red-500 dark:border-red-500"
                    : "border-slate-300 dark:border-slate-600"
                } bg-white dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-violet-500 text-slate-800 dark:text-white transition-all duration-300`}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={formItemVariants}>
              <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">
                Your Message
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.description
                    ? "border-red-500 dark:border-red-500"
                    : "border-slate-300 dark:border-slate-600"
                } bg-white dark:bg-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-violet-500 text-slate-800 dark:text-white transition-all duration-300`}
              ></textarea>
              {errors.description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.description}
                </motion.p>
              )}
            </motion.div>

            <motion.button
              variants={formItemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading || success}
              className={`w-full py-4 rounded-lg transition-all duration-300 
              flex items-center justify-center space-x-2 text-white font-medium 
              ${
                success
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : success ? (
                <span className="flex items-center">
                  <FaCheckCircle className="mr-2" /> Message Sent!
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message <FaArrowRight className="ml-2" />
                </span>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
