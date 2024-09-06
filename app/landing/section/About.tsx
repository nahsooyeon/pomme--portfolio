import { FunctionComponent } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import { useTranslations } from "next-intl";
import Link from "next/link";

const AboutSection: FunctionComponent = () => {
  const t = useTranslations("about");
  return (
    <section className={"flex gap-12 bg-pink-100 py-16 max-md:flex-col-reverse md:py-24"}>
      <div className={"flex flex-col md:basis-1/2"}>
        <p className={"text-gray-500"}>{t("desc")}</p>
        <div className={"mt-4 flex gap-5"}>
          <Link
            className={"w-max text-2xl text-pink-300 hover:text-pink-500 active:text-pink-600"}
            target={"_blank"}
            href="https://github.com/nahsooyeon">
            <IoLogoGithub size={32} />
          </Link>
          <Link
            className={"w-max text-2xl text-pink-300 hover:text-pink-500 active:text-pink-600"}
            target={"_blank"}
            href="https://www.linkedin.com/in/sooyeon-nah-763a42241/">
            <IoLogoLinkedin size={32} />
          </Link>
        </div>
      </div>
      {/* <div className={"m-auto flex size-60 shrink-0 rounded-full bg-profile bg-cover bg-no-repeat sm:size-70"}></div> */}
    </section>
  );
};

export default AboutSection;
