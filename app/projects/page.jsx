import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../../src/data/projects";
import MaskText from "@/src/components/ui/MaskText";

const Projects = () => {
  return (
    <main className="mainContent">
      <h1 className="h1 pb-20">Mes projects</h1>
      <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-1 xl:grid-rows-3 gap-5 xl:gap-32 max-w-[100vw]">
        {projectsData.map((projet) => (
          <Link
            key={projet.id}
            href={`/projects/${projet.slug}`}
            className={`${
              projet.id === 0 || projet.id === 4
                ? "xl:col-span-5"
                : projet.id === 1 || projet.id === 3
                ? "xl:col-span-7"
                : "xl:col-span-8"
            } flex flex-col`}
          >
            <div
              className={`wrapper-img ${
                projet.id === 0 || projet.id === 2 || projet.id === 4
                  ? "xl:max-h-[393px]"
                  : "xl:max-h-[598px]"
              } overflow-hidden mb-10`}
            >
              <Image
                loading="lazy"
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
              <h3 className="font-amphora text-[28px]">
                <MaskText>
                  <span className="underline">{projet.title}</span>
                  <span className="font-switzer"> - {projet.excerpt}</span>
                </MaskText>
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Projects;
