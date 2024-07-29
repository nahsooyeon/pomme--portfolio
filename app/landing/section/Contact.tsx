import { FunctionComponent } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

const ContactSection: FunctionComponent = () => {
  return (
    <section className={"w-full"}>
      <form className={"flex flex-col"}>
        <Input label="name" type="text" placeholder="Name" />
        <Input label="email" type="email" placeholder="Email" />
        <Textarea placeholder="Message" />
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
};

export default ContactSection;
