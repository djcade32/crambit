"use client";

import React from "react";
import Image from "next/image";
import Button from "./general/Button";
import ThemeButton from "./ThemeButton";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const MAIN_NAVLINKS = [
  { label: "Home", path: "/" },
  { label: "Study", path: "/study" },
  { label: "Guides", path: "/guides" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

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
      <ul className="flex space-x-5 items-center">
        {MAIN_NAVLINKS.map((link) => (
          <li
            key={link.label}
            className={`nav-link ${pathname === link.path ? "active" : ""}`}
            onClick={() => handleNavigation(link.path)}
          >
            {link.label}
          </li>
        ))}
        {SIGNED_IN ? (
          <li
            className={`nav-link ${pathname === "/profile" ? "active" : ""}`}
            onClick={() => handleNavigation("/profile")}
          >
            Profile
          </li>
        ) : (
          <>
            <li
              className={`nav-link ${pathname === "/login" ? "active" : ""}`}
              onClick={() => handleNavigation("/login")}
            >
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
