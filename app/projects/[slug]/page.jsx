// "use client";
// import React, { useRef, useState } from "react";
import localFont from "@next/font/local";
import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel } from "swiper/modules";
// import "swiper/css";
import { projectsData } from "../../../src/data/projects";

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

export default function ProjectDetailPage({ params }) {
  const { slug } = params;
  const project = projectsData.find((proj) => proj.slug === slug);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <main className="mainContent py-28 px-20">
      <div className="pb-32">
        <div className="flex w-full justify-between items-center">
          <h1
            className={`${amphora.variable} font-amphora text-[7.5rem] pb-20`}
          >
            {project.title}
          </h1>
          <div
            className={`${switzer.variable} font-switzer flex text-2xl font-extralight`}
          >
            {Object.values(project.categories).map(
              (categorie, index, array) => (
                <p
                  key={index}
                  className={`${index !== array.length - 1 ? "pr-6" : ""}`}
                >
                  {categorie}
                </p>
              )
            )}
          </div>
        </div>
        <Image
          src={project.image}
          alt={project.title}
          width="1280"
          height="828"
          className="max-h-[828px]"
        />
      </div>
      <div className="flex justify-between py-32">
        <h2 className={`${amphora.variable} font-amphora text-4xl`}>
          Contexte du projet
        </h2>
        <p className="w-full max-w-[50%]">{project.description}</p>
      </div>
      <div className="py-32">
      <Image
          src={project.image}
          alt={project.title}
          width="1280"
          height="828"
          className="w-full max-h-[598px]"
        />
        {/* <Swiper
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
          {Object.values(project.gallery).map((imgSrc, index) => (
            <SwiperSlide key={index}>
              {" "}
              <Image
                src={imgSrc}
                width={1280}
                height={600}
                alt="Picture of the author"
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
      {/* Autres détails du projet */}
    </main>
  );
}

export async function generateStaticParams() {
  return projectsData.map((project) => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });
}
