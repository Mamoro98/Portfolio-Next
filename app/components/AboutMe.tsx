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
        className="flex flex-col sm:flex-row p-4 sm:p-8 lg:p-16 text-center sm:text-left justify-center w-full max-w-full overflow-hidden"
        id="about"
      >
        <Image
          src={about}
          alt="programming"
          width={250}
          height={400}
          className="rounded-sm w-full max-w-[300px] lg:max-w-[400px] h-auto aspect-square object-cover hidden sm:block flex-shrink-0"
        />

        <div className="sm:ml-6 lg:ml-10 ml-0 w-full max-w-full p-6 sm:p-4 lg:p-0 overflow-hidden">
          <div className="flex flex-col h-[100%] justify-evenly ">
            <span className="text-3xl text-white">About Me</span>
            <span className="w-full max-w-[30em] sm:text-base mt-6 sm:mt-0 text-white">
              I completed a Master's in Mathematical Sciences through the AI for Science
              programme at Stellenbosch University and AIMS South Africa in July 2025,
              supported by a Google DeepMind Scholarship. I am a co-first author of
              research on offline multi-agent reinforcement learning generalisation.
              My experience spans Python and JAX research, full-stack applications,
              and satellite data analysis.
            </span>
            <Skills />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
