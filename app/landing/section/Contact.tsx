import { FunctionComponent } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";

const ContactSection: FunctionComponent = () => {
  return (
    <section>
      <form className={"flex flex-col"}>
        <Input label="name" type="text" placeholder="Name" />
        <Input label="email" type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
};

export default ContactSection;
