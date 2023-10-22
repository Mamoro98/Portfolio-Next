"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

type Data = {
  title: string;
  id: string;
  content: React.JSX.Element;
};

const Skills = () => {
  const [tab, settab] = useState("Skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      settab(id);
    });
  };
  const tab_data: Data[] = [
    {
      title: "Skills",
      id: "Skills",
      content: (
        <ul className="list-none sm:list-disc ml-8 mt-4 text-white">
          <li>MERN Stack &quot;MongoDb,Express Js, React Js, Node Js&quot;</li>
          <li className="mt-6 sm:mt-0">Machine Learning and Data Science</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "Education",
      content: (
        <ul className="list-none sm:list-disc ml-8 mt-4 text-white">
          <li>University of Khartoum</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "Experience",
      content: (
        <ul className="list-none sm:list-disc ml-8 mt-4 text-white">
          <li>AmunData</li>
          <li>Orooma</li>
        </ul>
      ),
    },
  ];
  return (
    <div>
      <div className="flex flex-row mt-10 justify-center sm:mt-0 sm:justify-normal ">
        <TabButton
          selectTab={() => handleTabChange("Skills")}
          active={tab == "Skills"}
        >
          Skills
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Education")}
          active={tab == "Education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Experience")}
          active={tab == "Experience"}
        >
          Experience
        </TabButton>
      </div>
      <div>{tab_data.find((t) => t.id === tab)?.content}</div>
    </div>
  );
};

export default Skills;
