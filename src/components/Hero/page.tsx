"use client";
import React from "react";
import hero1 from "../../assets/hero/hero1.avif";
import hero2 from "../../assets/hero/hero3.avif";
import hero3 from "../../assets/hero/hero2.avif";

import Slider from "react-slick";
import Image from "next/image";

const Hero = () => {
  const slides = [hero1, hero2, hero3];
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="overflow-hidden" id="home">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="relative w-full h-[300px] md:h-[490px]">
              <Image src={slide} alt="" fill className="" />
              {/* dark overlay */}
              <div className="absolute inset-0 bg-black opacity-30 "></div>
              {/* conditonal overlay text  */}
              {index === 0 && (
                <div className="absolute inset-0 flex justify-center md:justify-start">
                  <div className="pl-0 sm:pl-20 h-full flex flex-col justify-center items-center space-y-4">
                    <span className="text-white text-5xl lg:text-7xl font-extrabold uppercase text-center">
                      {" "}
                      Hot Offers
                    </span>
                    <span className="text-red-700 text-6xl lg:text-9xl font-bold text-center">
                      50%
                    </span>
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="absolute inset-0 text-white flex justify-center items-center">
                  <div className="text-center space-y-2">
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold flex items-start">
                      New
                    </h2>
                    <h2 className="text-4xl sm:text-6xl lg:text-9xl font-medium text-red-700">
                      Collection....
                    </h2>
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold flex justify-end">
                      2025
                    </h2>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="absolute inset-0  flex justify-center md:justify-end items-center md:pr-10">
                  <div className="w-1/2 flex flex-col items-center space-y-3">
                    <span className="text-red-700 text-7xl md:text-9xl font-extrabold leading-none uppercase text-center">
                      Deal
                    </span>
                    <span className="text-xl md:text-5xl font-semibold uppercase py-2 text-center bg-white text-black w-fit px-3 sm:px-4">
                      Of The Week
                    </span>
                    <span className="text-white text-sm md:text-base text-center ">
                      Limited Time Only - Grab It Now
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
