"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const Gallery = ({ images }) => {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        slidesPerView={"auto"}
        spaceBetween={80}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="swipGallery"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              width={1280}
              height={600}
              alt="Image de galerie"
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Gallery;
