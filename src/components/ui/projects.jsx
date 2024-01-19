"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local";
import { projectsData } from "../../data/projects";

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

const Projects = () => {
  // Logique pour gérer le mouvement de la souris et la mise à jour du style
  const handleMouseMove = (event, projectId) => {
    // Récupère la position relative de l'élément Link qui contient l'image.
    const linkElement = event.currentTarget;
    const linkRect = linkElement.getBoundingClientRect();

    // Les dimensions de l'image
    const imageWidth = 407;
    const imageHeight = 254;

    // Calculer les nouvelles positions pour centrer l'image sur le curseur
    const mouseX = event.clientX - linkRect.left - imageWidth / 2;
    const mouseY = event.clientY - linkRect.top - imageHeight / 2;

    // Trouvez l'image dans le DOM.
    const imageElement = document.querySelector(`#project-image-${projectId}`);
    if (imageElement) {
      // Mettre à jour les propriétés `left` et `top`.
      imageElement.style.left = `${mouseX}px`;
      imageElement.style.top = `${mouseY}px`;
    }
  };

  return (
    <section className="projects py-32">
      <h2
        className={`${amphora.variable} font-amphora text-4xl pb-16 px-6 md:px-20`}
      >
        Projects
      </h2>
      <div className="flex flex-col border-y">
        {projectsData.map((projet) => (
          <Link
            key={projet.id}
            href={`/projects/${projet.slug}`}
            className="py-10 border-b menu__item relative link-container hover:bg-white hover:text-primary"
            onMouseMove={(e) => handleMouseMove(e, projet.id)}
          >
            <Image
              id={`project-image-${projet.id}`}
              src={projet.image}
              alt={projet.title}
              width="407"
              height="254"
              className="absolute max-h-[254px]"
            />
            <div className="flex w-full justify-between items-center px-6 md:px-20 z-10">
              <span className="menu__item-text">
                <h3
                  className={`${amphora.variable} font-amphora menu__item-textinner relative text-[28px] pl-5 before:content-[''] before:w-[8px] before:h-[8px] before:absolute before:bg-current before:rounded-full before:top-2/4 before:-translate-y-2/4 before:-left-0`}
                >
                  {projet.title}
                </h3>
              </span>
              <div
                className={`${switzer.variable} font-switzer flex text-2xl font-extralight z-10`}
              >
                {Object.values(projet.categories).map(
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
              <span className="max-w-[82px] z-10">
                <svg
                  width="82"
                  height="34"
                  viewBox="0 0 82 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.289062 16.9722L79.2338 16.9722"
                    stroke="#26A8DF"
                    strokeWidth="2"
                  />
                  <path
                    d="M81 17.059C74.0101 16.6478 60.0303 17.059 60.0303 33.0283"
                    stroke="#26A8DF"
                    strokeWidth="2"
                  />
                  <path
                    d="M81 16.9413C74.0101 17.3525 60.0303 16.9413 60.0303 0.971945"
                    stroke="#26A8DF"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
