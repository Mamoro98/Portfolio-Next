import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  title: string;
  href: string;
}

const NavLink = ({ title, href }: Props) => {
  return (
    <ScrollLink
      to={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white"
      smooth={true} // Enable smooth scrolling
      duration={500} // Duration of the scroll animation (in milliseconds)
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
