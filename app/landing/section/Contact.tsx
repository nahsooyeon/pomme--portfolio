"use client";

import { FunctionComponent } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

import { State, getContactInfo } from "@/app/actions";
import { FormValues, formSchema } from "@/app/schema";

import { zodResolver } from "@hookform/resolvers/zod";

const ContactSection: FunctionComponent = () => {
  const [state, formAction] = useFormState<State, FormData>(getContactInfo, null);
  const { register, formState } = useForm<FormValues>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  return (
    <section>
      <form action={formAction} className={"flex flex-col"}>
        <Input
          {...register("name")}
          hint={formState.errors.name?.message}
          label="name"
          type="text"
          placeholder="Name"
          isError={!!formState.errors.name}
        />
        <Input
          {...register("email")}
          hint={formState.errors.email?.message}
          label="email"
          type="email"
          placeholder="Email"
          isError={!!formState.errors.email}
        />
        <Textarea {...register("content")} placeholder="Message" />
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
};

export default ContactSection;
