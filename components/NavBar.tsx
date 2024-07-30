import { FunctionComponent } from "react";

const NavBar: FunctionComponent = () => {
  return (
    <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
      <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
        <ul className={"flex gap-4"}>
          <li>About Me</li>
          <li>Work</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <button type="button">Download CV</button>
      </div>
    </nav>
  );
};

export default NavBar;
