"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Features = () => {
  return (
    <section className="py-20 md:py-32 overflow-x-auto flex">
      <Swiper slidesPerView={"auto"} spaceBetween={0} className="swipFeatures">
        <SwiperSlide>
          <div className="flex flex-col justify-between min-w-[100vw] max-w-[100vw] md:min-w-[607px] md:max-w-[607px] min-h-[554px] p-10 border-y border-r">
            <div className="flex flex-col">
              <h2 className="font-amphora text-4xl pb-7">Interaction</h2>
              <p className="font-switzer text-[18px]">
                To ensure your users have a unique experience, I enjoy taking
                the time to design and imagine the animations and interactions
                for your project.
              </p>
            </div>
            <span className="font-amphora text-right text-4xl text-secondary">
              01
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-between min-w-[100vw] max-w-[100vw] md:min-w-[607px] md:max-w-[607px] min-h-[554px] p-10 border-y border-r">
            <div className="flex flex-col">
              <h2 className="font-amphora text-4xl pb-7">Optimization</h2>
              <p className="font-switzer text-[18px]">
                I pay special attention to the performance of your project with
                the goal of achieving a refined user experience and improving
                its search engine ranking.
              </p>
            </div>
            <span className="font-amphora text-right text-4xl text-secondary">
              02
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-between min-w-[100vw] max-w-[100vw] md:min-w-[607px] md:max-w-[607px] min-h-[554px] p-10 border-y">
            <div className="flex flex-col">
              <h2 className="font-amphora text-4xl pb-7">Teamwork</h2>
              <p className="font-switzer text-[18px]">
                I am accustomed to collaborating and supporting my clients by
                following your desires and needs while offering my perspective
                in order to achieve the best for your project.
              </p>
            </div>
            <span className="font-amphora text-right text-4xl text-secondary">
              03
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Features;
