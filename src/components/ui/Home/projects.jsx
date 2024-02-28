"use client";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "../../../data/projects";

const Projects = () => {
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
    <section className="projects py-20 md:py-32">
      <h2 className="h2 pb-16 px-6 md:px-20">Projects</h2>
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
            <div className="flex flex-wrap md:flex-nowrap w-full justify-between items-center px-6 md:px-20">
              <span className="menu__item-text w-full md:w-auto">
                <h3 className="font-amphora menu__item-textinner relative z-0 text-[28px] pl-5 before:content-[''] before:w-[8px] before:h-[8px] before:absolute before:bg-current before:rounded-full before:top-2/4 before:-translate-y-2/4 before:-left-0">
                  {projet.title}
                </h3>
              </span>
              <div className="font-switzer flex flex-col md:flex-row text-2xl font-extralight">
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
              <span className="max-w-[82px]">
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
