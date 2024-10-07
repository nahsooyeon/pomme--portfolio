"use client";

import { FunctionComponent } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

import { FormValues, formSchema } from "@/app/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const ContactSection: FunctionComponent = () => {

  const t = useTranslations("contact");

  const { register, formState, handleSubmit, reset } = useForm<FormValues>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        alert("Message sent successfully");
      } else {
        alert("Message failed to send");
      }
    } catch (error) {
      alert("Message failed to send");
    }
  };

  return (
    <section className={"flex w-full flex-col justify-between sm:flex-row"}>
      <div className={"flex-1"}>
        <h1>Let&apos; Connect</h1>
        <p></p>
        <div className={"mt-4 flex gap-5"}>
          <Link
            className={"w-max text-2xl text-primary-400 hover:text-primary-800 active:text-primary-600"}
            target={"_blank"}
            href="https://github.com/nahsooyeon">
            <IoLogoGithub size={32} />
          </Link>
          <Link
            className={"w-max text-2xl text-primary-400 hover:text-primary-800 active:text-primary-600"}
            target={"_blank"}
            href="https://www.linkedin.com/in/sooyeon-nah-763a42241/">
            <IoLogoLinkedin size={32} />
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={"flex w-full flex-1 flex-col gap-4 sm:w-1/2"}>
        <Input
          {...register("subject")}
          hint={formState.errors.subject?.message}
          label={t("subject")}
          type="text"
          placeholder={t("subject_placeholder")}
          isError={!!formState.errors.subject}
        />
        <Input
          {...register("email")}
          hint={formState.errors.email?.message}
          label={t("email")}
          type="email"
          placeholder={t("email_placeholder")}
          isError={!!formState.errors.email}
        />
        <Textarea label={t("message")} {...register("content")} placeholder={t("message_placeholder")} />
        <Button className={"w-full"} type="submit">{t("submit")}</Button>
      </form>
    </section>
  );
};

export default ContactSection;
