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
        className="flex flex-col sm:flex-row p-0 text-center sm:text-left sm:p-16 justify-center"
        id="about"
      >
        <Image
          src={about}
          alt="programming"
          width={250}
          height={400}
          className="rounded-sm w-[400px] h-[400px] hidden sm:block"
        />

        <div className=" sm:ml-10 ml-0 w-fit p-10 sm:p-0 ">
          <div className="flex flex-col h-[100%] justify-evenly ">
            <span className="text-3xl ">About Me</span>
            <span className="sm:w-[30em] w-full sm:text-base mt-6 sm:mt-0 text-white">
              A motivated and Proactive Software Engineer with 2 years of
              experience in creating and executing innovative software solutions
              to enhance business productivity. Highly experienced in software
              development lifecycle. Also, I have a first class degree in
              Electrical and electronic engineering from university of Khartoum
              and I was one of the best 100 student in Sudan in high school
              Exams. Interested in Computer Science field which I find very
              helpful in solving today's problems.
            </span>
            <Skills />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
