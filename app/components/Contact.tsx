import React from "react";
import Form from "./Form";
import Image from "next/image";
import github from "../../public/github3.png";
import linkedIn from "../../public/linkedin2.png";
import whatsapp from "../../public/whatsapp.png";

const Contact = () => {
  return (
    <div
      className="flex sm:flex-row flex-col sm:text-left text-center justify-around bg-[#64B5F6] sm:p-24 items-center "
      id="Contact"
    >
      <div className="sm:w-[50%] w-[70%] flex flex-col h-[64vh] justify-center">
        <h1 className="font-semibold sm:text-7xl text-4xl text-white">
          Lets Connect!
        </h1>
        <p className="font-light text-sm sm:text-sm sm:mt-0 mt-4 text-white ">
          You can reach me on WhatsApp for casual and quick communication. For
          professional collaborations and to view my coding projects, you can
          visit my GitHub profile . Finally, to connect on a more professional
          level and stay updated with my career and achievements, please find me
          on LinkedIn. I look forward to staying in touch and potentially
          working together in the future. Have a great day!
        </p>
      </div>
      <div className="flex flex-row sm:flex-col mt-0 sm:mt-2 justify-evenly w-[70%] sm:w-[15%]">
        <a href="https://github.com/Mamoro98">
          <Image src={github} alt="github link" width={150} />
        </a>
        <a href="https://wa.me/+249118912916">
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
