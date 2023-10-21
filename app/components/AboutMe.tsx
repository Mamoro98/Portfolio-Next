"use client";
import Image from "next/image";
import React from "react";
import about from "../../public/about2.jpeg";
import Skills from "./Skills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="flex flex-row p-16 justify-center"
        id="about"
      >
        <Image
          src={about}
          alt="programming"
          width={250}
          height={400}
          className="rounded-sm w-[400px] h-[400px]"
        />

        <div className=" ml-10 w-fit ">
          <div className="flex flex-col h-[100%] justify-evenly ">
            <span className="text-3xl ">About Me</span>
            <span className="w-[30em] text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur temporibus quis Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aperiam,Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rerum voluptatem asperiores reprehenderit eos
              explicabo sed modi id sint numquam nesciunt magnam, atque saepe
              ullam laborum alias temporibus illum quasi tempore?
            </span>
            <Skills />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
