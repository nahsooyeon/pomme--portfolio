import { FunctionComponent } from "react";

import ProjectCard from "@/components/ProjectCard";
import { PROJECT_LIST } from "@/components/ProjectCard/constant";

const WorkSection: FunctionComponent = (p) => {
  return (
    <section className={"flex flex-col gap-12 py-16 md:py-24"}>
      <h1 className={"text-center text-primary-500 "}>Work</h1>
      <ul className={"flex flex-col flex-wrap justify-between max-sm:gap-8 sm:gap-12 lg:flex-row "}>
        {PROJECT_LIST.map(el => {
          return (
            <li className="lg:max-w-[30%] lg:flex-1" key={el.title}>
              <ProjectCard
                title={el.title}
                thumbnailUrl={el.thumbnailUrl}
                description={el.description}
                techStack={el.techStack}
                url={el.url}
              />
            </li>
          );
        })}{" "}
      </ul>
    </section>
  );
};

export default WorkSection;
