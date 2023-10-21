"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

function Navbar() {
  const navLinks = [
    { title: "About", href: "about" },
    // { title: "Previous Work", href: "projects" },
    { title: "Contact", href: "Contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 md:relative">
      <div className="flex flex-wrap items-center justify-between mx-auto px-2 mt-4 ">
        <div className="menu  md:block md:w-auto" id="navbar">
          <ul className="flex sm:flex-row p-4 md:p-0 md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} href={link.href} />
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
