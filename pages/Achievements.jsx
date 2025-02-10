import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Achievements } from "@constants";
const AchievementsCarousel = () => {
  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  

  return (
    <div className="relative mx-auto mt-14 max-w-4xl p-4">
      <h2 className="text-center text-5xl font-semibold text-gray-200 mb-4">
        Achievements
      </h2>
      <div className="bg-black bg-opacity-30 rounded-lg shadow-lg p-6">
        <Slider {...settings}>
          {Achievements.map((item, index) => (
            <div key={index} className="ml-10">
              <div className="py-16 px-4 flex items-start flex-col bg-black bg-opacity-10 rounded-md ">
                <div className="flex flex-row items-center w-full justify-between pr-16 ">
                <p className="text-slate-200  text-lg font-semibold">{item.title}</p>
                <p className="text-gray-600  text-sm font-mono">{item.Date}</p>
                </div>
                <div className="text-wrap mr-20">

                <p className="text-slate-400 text-justify text-md font-sans ">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-500 rounded-full px-2 z-10"
  >
    <span className="text-white">→</span>
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-500 rounded-full px-2 z-10"
  >
    <span className="text-white">←</span>
  </button>
);

export default AchievementsCarousel;
