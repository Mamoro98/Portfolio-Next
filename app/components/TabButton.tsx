import { motion } from "framer-motion";
import React, { FunctionComponent, ReactNode, SetStateAction } from "react";
interface Props {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}
const varients = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem" },
};
const TabButton = ({ active, selectTab, children }: Props) => {
  const test = () => {};
  const buttonStyle = active ? " text-white" : " text-[#ADB7BE] ";
  return (
    <button onClick={selectTab}>
      <p className={`font-semibold mr-3 hover:text-white ${buttonStyle}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={varients}
        className="h-1 bg-purple-50 mt-1 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
