"use client";

import { FunctionComponent } from "react";
import { TypeAnimation } from "react-type-animation";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const GreetSection: FunctionComponent = () => {
  const t = useTranslations("greet");
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start text-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-pink-700 sm:text-5xl sm:leading-normal lg:text-7xl lg:leading-snug">
            <span className="bg-gradient-to-r from-primary-600 to-primary-200 bg-clip-text text-transparent">
              {t("hello")} {t("iam")}{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                t("Sooyeon"),
                1000,
                t("frontend_engineer"),
                1000,
                t("growing_developer"),
                1000,
                t("meditation_developer"),
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.
          </p>
          {/*      <div>
            <Link
              href="/#contact"
              className="to-secondary-500 mr-4 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 px-6 py-3 text-white hover:bg-slate-200 sm:w-fit">
              Hire Me
            </Link>
            <Link
              href="/"
              className="to-secondary-500 mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 p-1 text-white hover:bg-slate-800 sm:w-fit">
              <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">Download CV</span>
            </Link>
          </div> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center sm:mt-0">
          <div
            className={"m-auto flex size-60 shrink-0 rounded-full bg-profile bg-cover bg-no-repeat sm:size-70"}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default GreetSection;
