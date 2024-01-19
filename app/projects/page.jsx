import React from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "@next/font/local";
import { projectsData } from "../../src/data/projects";

const amphora = localFont({
  src: [
    {
      path: "../../public/fonts/Amphora-Regular.otf",
    },
  ],
  variable: "--font-amphora",
});

const switzer = localFont({
  src: [
    {
      path: "../../public/fonts/Switzer-Variable.ttf",
    },
  ],
  variable: "--font-switzer",
});

const Projects = () => {
  return (
    <main className="mainContent py-28 px-20">
      <h1 className={`${amphora.variable} font-amphora text-[7.5rem] pb-20`}>
        Mes projects
      </h1>
      <div className="grid grid-cols-12 grid-rows-3 sm:gap-12 lg:gap-32">
        {projectsData.map((projet) => (
          <Link
            key={projet.id}
            href={`/projects/${projet.slug}`}
            className={`${
              projet.id === 0 || projet.id === 4
                ? "col-span-5"
                : projet.id === 1 || projet.id === 3
                ? "col-span-7"
                : "col-span-8"
            } flex flex-col`}
          >
            <div
              className={`wrapper-img ${
                projet.id === 0 || projet.id === 2 || projet.id === 4
                  ? "max-h-[393px]"
                  : "max-h-[598px]"
              } overflow-hidden mb-10`}
            >
              <Image
                src={projet.image}
                alt={projet.title}
                width={`${
                  projet.id === 0 || projet.id === 4
                    ? "800"
                    : projet.id === 1 || projet.id === 3
                    ? "1268"
                    : "1200"
                }`}
                height={`${
                  projet.id === 0 || projet.id === 4
                    ? "400"
                    : projet.id === 1 || projet.id === 3
                    ? "845"
                    : "850"
                }`}
              />
            </div>
            <div className="wrapper-text flex">
              <h3 className={`${amphora.variable} font-amphora text-[28px]`}>
                <span className="underline">{projet.title}</span>
                <span className={`${switzer.variable} font-switzer`}>
                  - {projet.excerpt}
                </span>
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Projects;
