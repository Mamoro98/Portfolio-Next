"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="sm:w-[87%] flex mb-10 ml-16 mr-16 w-[75%] justify-center">
      <div
        className="w-[45%] sm:w-[95%] h-[52vh] sm:h-fit  p-6 border border-white rounded-sm  flex flex-col sm:flex-row justify-evenly"
        ref={ref}
      >
        <div className="flex flex-col text-white justify-center items-center ">
          <h2 className="text-3xl font-extrabold">
            <CountUp start={0} end={10} duration={4} redraw={true} suffix="+" />
          </h2>
          <span className="text-sm font-light">Projects</span>
        </div>

        <div className="flex flex-col text-white justify-center items-center ">
          <h2 className="text-3xl font-extrabold">
            <CountUp start={0} end={3} duration={4} redraw={true} />
          </h2>{" "}
          <span className="text-sm font-light">Companies</span>
        </div>

        <div className="flex flex-col text-white justify-center items-center ">
          <h2 className="text-3xl font-extrabold">
            <CountUp start={0} end={3} duration={4} redraw={true} suffix="+" />
          </h2>{" "}
          <span className="text-sm font-light">Years Of Experience</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
