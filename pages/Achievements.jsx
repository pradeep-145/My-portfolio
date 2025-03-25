import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Achievements } from "@constants";

const AchievementsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl md:text-5xl font-bold text-slate-800 dark:text-gray-300 mb-16"
      >
        Achievements
      </motion.h1>

      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {Achievements.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  {item.title}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {item.Date}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-justify">
                {item.description}
              </p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AchievementsCarousel;