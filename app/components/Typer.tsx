"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

interface Props {
  name: string;
  title: string;
  work: string;
  job: string;
}

const Typer = ({ name, title, work, job }: Props) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `${name}`,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        `${title}`,
        1000,
        `${job}`,
        1000,
        `${work}`,
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      style={{ fontSize: "1em" }}
    />
  );
};

export default Typer;
