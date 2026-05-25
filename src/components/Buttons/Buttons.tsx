import "./Buttons.css";

import "../Hero/Hero.css";
import type { ReactNode } from "react";

type ButtonProps = {
  buttonLink?: string;
  buttonClass?: string;
  buttonText?: ReactNode;
  target?: string;
  rel?: string;
};

export default function Button({
  buttonLink,
  buttonClass,
  buttonText,
  target,
  rel,
}: ButtonProps) {
  return (
    <a 
    href={buttonLink} 
    className={buttonClass}
    target={target}
    rel={rel}
>
      {buttonText}
    </a>
  );
}
