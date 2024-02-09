import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../../src/data/projects";
import MaskText from "@/src/components/ui/MaskText";

const Projects = () => {
  return (
    <main className="mainContent">
      <h1 className="h1 pb-20">Mes projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-1 md:grid-rows-3 gap-5 md:gap-32">
        {projectsData.map((projet) => (
          <Link
            key={projet.id}
            href={`/projects/${projet.slug}`}
            className={`${
              projet.id === 0 || projet.id === 4
                ? "md:col-span-5"
                : projet.id === 1 || projet.id === 3
                ? "md:col-span-7"
                : "md:col-span-8"
            } flex flex-col`}
          >
            <div
              className={`wrapper-img ${
                projet.id === 0 || projet.id === 2 || projet.id === 4
                  ? "md:max-h-[393px]"
                  : "md:max-h-[598px]"
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
