"use client";

import React from "react";
import Image from "next/image";
import Button from "./general/Button";
import ThemeButton from "./ThemeButton";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  // Function to handle navigation
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const SIGNED_IN = false; // This should be replaced with actual authentication logic
  return (
    <nav className="h-[70px] flex justify-between items-center px-7 border-b border-(--neutral-gray)">
      <Image
        src="/logos/crambit_white_logo.png"
        alt="Crambit Logo"
        width={198}
        height={29}
        className="hidden dark:block cursor-pointer"
        onClick={() => handleNavigation("/")}
      />
      <Image
        src="/logos/crambit_black_logo.png"
        alt="Crambit Logo"
        width={198}
        height={29}
        className="block dark:hidden cursor-pointer"
        onClick={() => handleNavigation("/")}
      />
      <ul className="flex space-x-9 items-center">
        <li className="nav-link" onClick={() => handleNavigation("/")}>
          Home
        </li>
        <li className="nav-link" onClick={() => handleNavigation("/study")}>
          Study
        </li>
        <li className="nav-link" onClick={() => handleNavigation("/guides")}>
          Guides
        </li>
        {SIGNED_IN ? (
          <li className="nav-link" onClick={() => handleNavigation("/profile")}>
            Profile
          </li>
        ) : (
          <>
            <li className="nav-link" onClick={() => handleNavigation("/login")}>
              Login
            </li>
            <li>
              <Button label="Sign Up" onClick={() => handleNavigation("/signup")} />
            </li>
          </>
        )}
        <li>
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
