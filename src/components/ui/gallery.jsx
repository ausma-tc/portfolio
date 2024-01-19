"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const Gallery = () => {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        slidesPerView={'auto'}
        spaceBetween={80}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="swipGallery"
      >
        <SwiperSlide>
          {" "}
          <Image
            src="/images/rect-1.jpeg"
            width={1280}
            height={600}
            alt="Picture of the author"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/images/rect-1.jpeg"
            width={1280}
            height={600}
            alt="Picture of the author"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/images/rect-1.jpeg"
            width={1280}
            height={600}
            alt="Picture of the author"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/images/rect-1.jpeg"
            width={1280}
            height={600}
            alt="Picture of the author"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/images/rect-1.jpeg"
            width={1280}
            height={600}
            alt="Picture of the author"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Gallery;
