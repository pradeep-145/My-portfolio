import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const achievements = [
    {
      name:"",
      desc:""
    },
    {
      name:"",
      desc:""
    },
    {
      name:"",
      desc:""
    },
  ];

  return (
    <div className="relative mx-auto max-w-4xl p-4">
      <h2 className="text-center text-5xl font-semibold text-gray-200 mb-4">
        Achievements
      </h2>
      <div className="bg-black bg-opacity-30 rounded-lg shadow-lg p-6">
        <Slider {...settings}>
          {achievements.map((item, index) => (
            <div key={index} className="text-center">
              <div className="py-16 px-4 bg-black bg-opacity-10 rounded-md">
                <p className="text-white text-lg font-semibold">{item.name}</p>
                <p className="text-white text-lg font-semibold">{item.desc}</p>
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
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-500 rounded-full p-2 z-10"
  >
    <span className="text-white">→</span>
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-500 rounded-full p-2 z-10"
  >
    <span className="text-white">←</span>
  </button>
);

export default AchievementsCarousel;
