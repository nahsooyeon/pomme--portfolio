import { FunctionComponent } from "react";

import { useTranslations } from "next-intl";

const AboutSection: FunctionComponent = () => {
  const t = useTranslations("about");
  return (
    <section className={"flex gap-12 bg-primary-100 py-16 max-md:flex-col-reverse md:py-24"}>
      <div className={"flex flex-col md:basis-1/2"}>
        <p className={"text-gray-500"}>{t("desc")}</p>

      </div>
      {/* <div className={"m-auto flex size-60 shrink-0 rounded-full bg-profile bg-cover bg-no-repeat sm:size-70"}></div> */}
    </section>
  );
};

export default AboutSection;
