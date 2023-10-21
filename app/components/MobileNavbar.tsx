"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
const MobileNavbar = () => {
  const [isNavbarOpen, setisNavbarOpen] = useState(false);
  return (
    <div>
      {isNavbarOpen ? (
        <button>
          <XMarkIcon />
        </button>
      ) : (
        <button>
          <Bars3Icon />
        </button>
      )}
    </div>
  );
};

export default MobileNavbar;
