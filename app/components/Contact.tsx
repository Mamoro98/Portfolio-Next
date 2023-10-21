import React from "react";
import Form from "./Form";
import Image from "next/image";
import github from "../../public/github3.png";
import linkedIn from "../../public/linkedin2.png";
import whatsapp from "../../public/whatsapp.png";

const Contact = () => {
  return (
    <div
      className="flex flex-row justify-around bg-[#64B5F6] p-24 "
      id="Contact"
    >
      <div className="w-[50%] flex flex-col h-[64vh] justify-center">
        <h1 className="font-semibold text-7xl">Lets Connect!</h1>
        <p className="font-light text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eum
          quas illo beatae nulla fugit, est quo magnam aliquid rerum laudantium
          saepe. Expedita eligendi illum dignissimos cum doloremque, vel a?
        </p>
      </div>
      <div className="flex flex-col mt-2 justify-evenly w-[15%]">
        <a href="https://github.com/Mamoro98">
          <Image src={github} alt="github link" width={150} />
        </a>
        <a href="https://wa.me/0118912916">
          <Image src={whatsapp} alt="whatsapp link" width={150} />
        </a>

        <a href="https://www.linkedin.com/in/omer-mamoro-40417512b/">
          <Image src={linkedIn} alt="linkedin link" width={150} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
