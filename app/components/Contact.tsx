import React from "react";
import Form from "./Form";
import Image from "next/image";
import github from "../../public/github2.png";
import linkedIn from "../../public/linkedin.png";

const Contact = () => {
  return (
    <div
      className="flex flex-row justify-between bg-slate-600 p-24 "
      id="Contact"
    >
      <div className="w-[50%] flex flex-col h-[30vh] justify-evenly">
        <h1 className="font-semibold text-xl ">Lets Connect!</h1>
        <p className="font-light text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eum
          quas illo beatae nulla fugit, est quo magnam aliquid rerum laudantium
          saepe. Expedita eligendi illum dignissimos cum doloremque, vel a?
        </p>
        <div className="flex flex-row mt-2 w-20 justify-evenly">
          <a href="https://github.com/Mamoro98">
            <Image src={github} alt="github link" width={25} height={25} />
          </a>
          <a href="https://www.linkedin.com/in/omer-mamoro-40417512b/">
            <Image src={linkedIn} alt="linkedin link" width={25} height={25} />
          </a>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
