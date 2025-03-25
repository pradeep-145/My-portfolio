"use client";

import { motion } from "framer-motion";
import { MdOutgoingMail } from "react-icons/md";
import { FaArrowRight, FaWhatsappSquare } from "react-icons/fa";
import { useState } from "react";
import { showToast } from "@utils/showToast";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        showToast('success');
        setFormData({ email: '', name: '', description: '' });
      } else {
        showToast('error');
      }
    } catch (error) {
      showToast('error');
    } finally {
      setLoading(false);
    }
  };

  const ContactMethod = ({ icon: Icon, title, subtitle, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex flex-col items-center 
      text-center cursor-pointer hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-4 text-violet-600 text-4xl">
        <Icon />
      </div>
      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
        {title}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl md:text-5xl font-bold text-slate-800 dark:text-gray-300 mb-16"
      >
        Get in Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6">
          <ContactMethod 
            icon={MdOutgoingMail}
            title="Email"
            subtitle="spradeepsakthi2004@gmail.com"
            onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=spradeepsakthi2004@gmail.com')}
          />
          <ContactMethod 
            icon={FaWhatsappSquare}
            title="WhatsApp"
            subtitle="+91 93853 52051"
            onClick={() => window.open(`https://wa.me/919385352051?text=Hello%20Pradeep%20Sakthi!`)}
          />
        </div>

        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 space-y-6"
        >
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 
              bg-transparent focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 
              bg-transparent focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            />
          </div>
          <div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 
              bg-transparent focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            ></textarea>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            disabled={loading}
            className="w-full bg-violet-600 text-white py-3 rounded-lg 
            hover:bg-violet-700 transition-colors duration-300 
            flex items-center justify-center space-x-2"
          >
            {loading ? 'Sending...' : 'Send Message'}
            {!loading && <FaArrowRight />}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;