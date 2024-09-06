"use client";

import { FunctionComponent } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";

import { useTranslations } from "next-intl";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

import { State, getContactInfo } from "@/app/actions";
import { FormValues, formSchema } from "@/app/schema";

import { zodResolver } from "@hookform/resolvers/zod";

const ContactSection: FunctionComponent = () => {
  const [state, formAction] = useFormState<State, FormData>(getContactInfo, null);

  const t = useTranslations("contact");

  const { register, formState } = useForm<FormValues>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  return (
    <section className={"flex w-full"}>
      <form action={formAction} className={"flex w-1/2 flex-col gap-4"}>
        <Input
          {...register("name")}
          hint={formState.errors.name?.message}
          label={t("name")}
          type="text"
          placeholder={t("name_placeholder")}
          isError={!!formState.errors.name}
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
