"use client";
import { motion, useScroll } from "framer-motion";
import "./styles.css";
import quote from "../../public/quote2.png";
import Image from "next/image";

export default function Recommenders() {
  return (
    <>
      <div className="uli">
        <div className="lii">
          <div className="flex justify-evenly w-full h-full place-items-center flex-col relative ">
            <Image
              src={quote}
              alt="quote"
              width={90}
              className="absolute sm:top-[10%] sm:left-[12%] left-0 top-[0%] w-[13%] sm:w-[10%]"
            />
            <code className="w-[30em]  ml-16 sm:ml-0 ">
              Omer is one of the good students you can come across as a teacher;
              he is smart, respectful, and energetic. While undergoing his
              undergraduate study, Omer also volunteered in several programs and
              events. Omer’s genuine interest in Computer vision and Machine
              learning is well reflected as he participated in Deep Learning
              INDABA in South Africa in 2018-2019 and later helped organizing
              Deep Learning IndabaX in Sudan. In addition to that, Omer also has
              a wide range of programming and software development skills using
              different tools.
            </code>
            <span className="absolute sm:right-[10%] sm:top-[80%] top-[80%] right-[2%]  font-mono font-bold text-center ">
              Mrs. Amal Elsamani
              <br />
              Lecturer at the University of Khartoum
            </span>
          </div>
        </div>
        <div className="lii">
          <div className="flex justify-evenly w-full h-full place-items-center flex-col relative ">
            <Image
              src={quote}
              alt="quote"
              className="absolute sm:top-[10%] sm:left-[12%] left-0 top-[0%] w-[13%] sm:w-[10%] "
            />
            <code className="w-[30em]  ml-16 sm:ml-0 ">
              Omer has demonstrated outstanding skills and dedication in both
              React and Kotlin development here at Orooma. His proficiency in
              React has greatly contributed to the success of our frontend
              development efforts. Beyond his technical aptitude, Omer exhibits
              a strong work ethic, a willingness to learn, and an eagerness to
              collaborate with the team. He is proactive in addressing
              challenges and has consistently delivered on their
              responsibilities. His passion for software engineering is truly
              commendable.
            </code>
            <span className="absolute sm:right-[10%] sm:top-[80%] top-[80%] right-[2%]   font-mono font-bold text-center ">
              Mr. Mohammed Satti
              <br />
              CEO of OROOMA
            </span>
          </div>
        </div>
        <div className="lii">
          <div className="flex justify-evenly w-full h-full place-items-center flex-col relative ">
            <Image
              src={quote}
              alt="quote"
              className="absolute sm:top-[10%] sm:left-[12%] left-0 top-[0%] w-[13%] sm:w-[10%] "
            />
            <code className="w-[30em]  ml-16 sm:ml-0 ">
              Engineer Omer has a likable character as he went very well with
              his colleagues and teachers. In addition, his English, both
              written and spoken, is excellent and he can communicate very well
              and work with others in a team. He was known to be a keen and
              hardworking student and his academic performance was excellent. He
              graduated with first class honours degree specializing in software
              engineering of electronic systems.
            </code>
            <span className="absolute sm:right-[10%] sm:top-[80%] top-[80%] right-[2%]   font-mono font-bold text-center ">
              Dr. Anas Showk
              <br />
              Associate Professor
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
