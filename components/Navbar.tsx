"use client";

import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-[70px] flex justify-between items-center px-7">
      <Image
        src="/logos/crambit_white_logo.png"
        alt="Crambit Logo"
        width={198}
        height={29}
        className="hidden dark:block"
      />
      <Image
        src="/logos/crambit_black_logo.png"
        alt="Crambit Logo"
        width={198}
        height={29}
        className="block dark:hidden"
      />
      <ul className="flex space-x-4">
        <li className="text-black dark:text-white">Home</li>
        <li className="text-black dark:text-white">Study</li>
        <li className="text-black dark:text-white">Guides</li>
        <li className="text-black dark:text-white">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
