"use client";
import React, { useRef, useState } from "react";
import localFont from "@next/font/local";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const amphora = localFont({
  src: [
    {
      path: "../../../public/fonts/Amphora-Regular.otf",
    },
  ],
  variable: "--font-amphora",
});

const switzer = localFont({
  src: [
    {
      path: "../../../public/fonts/Switzer-Variable.ttf",
    },
  ],
  variable: "--font-switzer",
});

const Features = () => {
  return (
    <section className="py-32 overflow-x-auto flex">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        className="swipFeatures"
      >
        <SwiperSlide>
          {" "}
          <div className="flex flex-col justify-between min-w-[607px] max-w-[607px] min-h-[554px] p-10 border-y border-r">
            <div className="flex flex-col">
              <h2 className={`${amphora.variable} font-amphora text-4xl pb-7`}>
                Intéraction
              </h2>
              <p className={`${switzer.variable} font-switzer text-[18px]`}>
                Afin que vos utilisateurs puisse vivre une expérience unique,
                j’aime prendre du temps à concevoir et imaginer vos animations
                et interactions de votre projet.
              </p>
            </div>
            <span
              className={`${amphora.variable} font-amphora text-right text-4xl text-secondary`}
            >
              01
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex flex-col justify-between min-w-[607px] max-w-[607px] min-h-[554px] p-10 border-y border-r">
            <div className="flex flex-col">
              <h2 className={`${amphora.variable} font-amphora text-4xl pb-7`}>
                Optimisation
              </h2>
              <p className={`${switzer.variable} font-switzer text-[18px]`}>
                Je porte une attention particulière à la performance de votre
                projet dans le but d’obtenir une expérience utilisateur peaufiné
                et d’améliorer le référencement de celui-ci.
              </p>
            </div>
            <span
              className={`${amphora.variable} font-amphora text-right text-4xl text-secondary`}
            >
              02
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex flex-col justify-between min-w-[607px] max-w-[607px] min-h-[554px] p-10 border-y">
            <div className="flex flex-col">
              <h2 className={`${amphora.variable} font-amphora text-4xl pb-7`}>
                Travail d’équipe
              </h2>
              <p className={`${switzer.variable} font-switzer text-[18px]`}>
                J’ai l’habitude de collaborer et d’accompagner mes clients en
                suivant vos envies et besoin tout en vous donnant mon point de
                vue afin d'obtenir le meilleur pour votre projet.
              </p>
            </div>
            <span
              className={`${amphora.variable} font-amphora text-right text-4xl text-secondary`}
            >
              03
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Features;
