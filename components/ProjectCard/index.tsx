import { FunctionComponent } from "react";
import { IoIosLink } from "react-icons/io";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { ProjectCardProps } from "./constant";

const ProjectCard: FunctionComponent<ProjectCardProps> = props => {
  const t = useTranslations("work");
  return (
    <article
      className={
        "flex items-center gap-12 rounded-xl bg-gray-50 drop-shadow-md max-sm:w-full max-sm:flex-col max-sm:gap-8 max-sm:p-8 sm:flex-row sm:p-12"
      }>
      <div className={"relative max-sm:h-48 max-sm:w-70 sm:h-96 sm:w-120 sm:flex-1"}>
        <Image fill className={"absolute drop-shadow-lg"} src={props.thumbnailUrl} alt={props.title} />
      </div>
      <div className={"flex flex-1 shrink-0 flex-col gap-6 self-stretch"}>
        <h2 className={"text-xl font-semibold leading-7 text-gray-900"}>{t(props.title)}</h2>
        <p className={"text-base font-normal leading-6 text-gray-600"}>{t(props.description)}</p>
        <ul className={"flex flex-wrap gap-3"}>
          {props.techStack.map(tech => (
            <li key={tech} className={"rounded-lg bg-gray-200 px-2 py-0.5 text-pink-500"}>
              {tech}
            </li>
          ))}
        </ul>
        {props.url && (
          <Link target={"_blank"} href={props.url}>
            <IoIosLink size={24} />
          </Link>
        )}
      </div>
    </article>
  );
};
export default ProjectCard;
