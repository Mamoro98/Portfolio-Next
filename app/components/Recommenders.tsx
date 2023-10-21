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
              className="absolute top-[10%] left-[10%]"
            />
            <code className="w-[30em] text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad
              repellat architecto est accusamus sit distinctio modi suscipit.
              Suscipit aut vero repellendus in dicta inventore, quam laborum
              quis voluptatem necessitatibus!
            </code>
            <span className="absolute right-[20%] top-[70%] font-mono font-bold text-xl">
              Name Name
            </span>
          </div>
        </div>
        <div className="lii">
          <div className="flex justify-evenly w-full h-full place-items-center flex-col relative ">
            <Image
              src={quote}
              alt="quote"
              width={90}
              className="absolute top-[10%] left-[10%]"
            />
            <code className="w-[30em] text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad
              repellat architecto est accusamus sit distinctio modi suscipit.
              Suscipit aut vero repellendus in dicta inventore, quam laborum
              quis voluptatem necessitatibus!
            </code>
            <span className="absolute right-[20%] top-[70%] font-mono font-bold text-xl">
              Name Name
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
