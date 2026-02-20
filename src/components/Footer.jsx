// eslint-disable-next-line no-unused-vars
import React from "react";
import { Icon } from "./Icon";
import Heart from "./canvas/icons/HeartIcon";

function Footer() {
  return (
    <div className="text-center text-white/60 pb-14">
      <div className="flex items-center justify-center gap-1">
        Coded with <Icon component={Heart} className="mb-1.5"></Icon> by{" "}
        <a
          href="https://www.linkedin.com/in/arturo-bracamontes"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Arturo Bracamontes
        </a>
      </div>
    </div>
  );
}

export default Footer;