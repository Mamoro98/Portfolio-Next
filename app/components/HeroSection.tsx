"use client";
import Image from "next/image";
import React from "react";
import omer from "../../public/omer.jpg";
import Typer from "./Typer";
import { motion } from "framer-motion";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
const HeroSection = () => {
  return (
    <motion.div
      className="grid  sm:grid-cols-12  sm:max-md:w-[55em]  grid-cols-1 text-center sm:text-left"
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="sm:col-span-7  place-self-center ">
        <h1
          className="text-white font-extrabold text-4xl 
          lg:text-6xl
          sm:text-4xl
          "
        >
          <span className="text-transparent bg-gradient-to-br from-purple-500 to-blue-400 bg-clip-text">
            Hello {"I'm"} {""}
          </span>{" "}
          <br />
          <Typer
            name="Omer Kamal"
            title="Software Engineer"
            work="Web Developer"
            job="Electrical Engieer"
          />
        </h1>
        <br />
        <span
          className="text-[#ADB7BE]
            text-lg lg:text-xl
          "
        >
          A motivated and Proactive Software Engineer with 3 years of experience
          in creating and executing innovative software solutions to enhance
          business productivity.
        </span>
        <div className="mt-6 flex flex-col sm:block ">
          <a
            href="https://www.linkedin.com/in/omer-mamoro-40417512b/"
            className=" rounded-full
                bg-gradient-to-br from-blue-500 via-purple-500 to-red-500
                px-6 py-3 mr-4
                w-full
                lg:w-fit
                text-white
            "
          >
            Hire me
          </a>
          <a
            className="rounded-full bg-transparent px-6 py-3 hover:bg-white border
              text-white hover:text-black mt-6
             w-full
             lg:w-fit
             "
            href="/CV.pdf"
            download={true}
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="sm:col-span-5 place-self-center mt-16 lg:mt-0  ">
        <div
          className="rounded-full w-[250px] h-[250px] bg-white relative 
          lg:h-[400px] lg:w-[400px]
          "
        >
          <Image
            src={omer}
            alt="Omer Image"
            width={230}
            height={230}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full lg:w-[380px] lg:h-[380px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
