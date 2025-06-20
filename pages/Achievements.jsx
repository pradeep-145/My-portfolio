import { Achievements } from "@constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTrophy } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 top-1/2 -translate-y-1/2 -translate-x-5 bg-white dark:bg-slate-700 p-3 rounded-full shadow-lg text-violet-700 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-slate-600 transition-all duration-300 focus:outline-none"
      aria-label="Previous slide"
    >
      <FaChevronLeft />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 top-1/2 -translate-y-1/2 translate-x-5 bg-white dark:bg-slate-700 p-3 rounded-full shadow-lg text-violet-700 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-slate-600 transition-all duration-300 focus:outline-none"
      aria-label="Next slide"
    >
      <FaChevronRight />
    </button>
  );
};

const AchievementsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div
        className={`w-4 h-4 mx-1 rounded-full transition-all duration-300 ${
          i === currentSlide
            ? "bg-violet-600 scale-125"
            : "bg-gray-300 dark:bg-gray-600"
        }`}
      />
    ),
    dotsClass:
      "slick-dots custom-dots flex justify-center items-center mt-8 space-x-2",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="achievement-background"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-bold text-slate-800 dark:text-gray-300 mb-16 relative"
        >
          <span className="relative inline-block">
            Achievements
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-violet-500 to-purple-700"
            ></motion.span>
          </span>
        </motion.h1>
      </motion.div>

      <div className="max-w-4xl mx-auto achievement-slider">
        <Slider {...settings}>
          {Achievements.map((item, index) => (
            <div key={index} className="px-4 py-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative p-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-2xl animate-gradient-xy"></div>
                <div className="relative p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden achievement-card">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-violet-500/10 rounded-full"></div>
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full"></div>

                  <div className="flex justify-between items-start mb-6 relative">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                        <FaTrophy className="text-2xl text-violet-600 dark:text-violet-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                        {item.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm rounded-full">
                      {item.Date}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-justify leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors duration-300 text-sm"
                    >
                      More Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AchievementsCarousel;
