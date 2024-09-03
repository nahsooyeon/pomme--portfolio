export interface ProjectCardProps {
  title: string;
  thumbnailUrl: string;
  description: string;
  techStack: string[];
  url?: string;
}
export const PROJECT_LIST: ProjectCardProps[] = [
  {
    title: "Heyseller",
    thumbnailUrl: "https://via.placeholder.com/480x384.png",
    description: "Heyseller_desc",
    techStack: ["Next.js", "Typescript", "TurboRepo", "Playwright"],
    url: "https://heyseller.kr",
  },
  {
    title: "RocketPunch",
    thumbnailUrl: "https://via.placeholder.com/480x384.png",
    description: "RocketPunch_desc",
    techStack: ["Javascript", "Django", "Jinja2", "jQuery"],
    url: "https://www.rocketpunch.com/membership/introduce?tab=service",
  },
  {
    title: "Coala",
    thumbnailUrl: "https://via.placeholder.com/480x384.png",
    description: "Coala_desc",
    techStack: ["Next.js", "Typescript", "TailwindCSS"],
    url: "https://m.coala.co.kr",
  },
];
