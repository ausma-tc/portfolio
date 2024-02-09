// "use client";
// import React, { useRef, useState } from "react";
import Image from "next/image";
import MaskText from "@/src/components/ui/MaskText";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel } from "swiper/modules";
// import "swiper/css";
import { projectsData } from "../../../src/data/projects";

export default function ProjectDetailPage({ params }) {
  const { slug } = params;
  const project = projectsData.find((proj) => proj.slug === slug);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <main className="mainContent">
      <div className="pb-20 md:pb-32">
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center">
          <h1 className="h1 pb-10 md:pb-20">{project.title}</h1>
          <div className="font-switzer flex text-2xl font-extralight pb-5 md:pb-0">
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
      <div className="flex flex-col md:flex-row justify-between py-20 md:py-32">
        <h2 className="h2 pb-5 md:pb-0">Contexte du projet</h2>
        <p className="w-full md:max-w-[50%]">{project.description}</p>
      </div>
      <div className="py-20 md:py-32">
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
